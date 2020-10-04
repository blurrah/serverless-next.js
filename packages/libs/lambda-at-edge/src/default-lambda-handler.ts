import { APIGatewayProxyResultV2, APIGatewayProxyHandlerV2 } from "aws-lambda";
// @ts-ignore
import lambdaApiGwCompatLayer from "@sls-next/next-aws-lambda";
// @ts-ignore
import ManifestJson from "./manifest.json";
// @ts-ignore
import RoutesManifestJson from "./routes-manifest.json";
import { OriginRequestDefaultHandlerManifest } from "../types";

export const handler: APIGatewayProxyHandlerV2 = async (
  event,
  context
): Promise<APIGatewayProxyResultV2> => {
  // Get current path with routing logic
  console.log(event);
  console.log(context);
  const uri = normaliseUri(event.requestContext.http.path || event.rawPath);

  const pagePath = router(ManifestJson)(uri);
  const page = require(`./${pagePath}`); // eslint-disable-line
  const returnPromise = await lambdaApiGwCompatLayer(page)(event, context);
  console.log(returnPromise);
  return returnPromise;
};

const basePath = RoutesManifestJson.basePath;

const normaliseUri = (uri: string): string => {
  if (basePath) {
    if (uri.startsWith(basePath)) {
      uri = uri.slice(basePath.length);
    } else {
      // basePath set but URI does not start with basePath, return 404
      return "/404";
    }
  }

  // Remove trailing slash for all paths
  if (uri.endsWith("/")) {
    uri = uri.slice(0, -1);
  }

  // Empty path should be normalised to "/" as there is no Next.js route for ""
  return uri === "" ? "/" : uri;
};

const normaliseDataRequestUri = (
  uri: string,
  manifest: OriginRequestDefaultHandlerManifest
): string => {
  let normalisedUri = uri
    .replace(`/_next/data/${manifest.buildId}`, "")
    .replace(".json", "");

  // Normalise to "/" for index data request
  normalisedUri = ["/index", ""].includes(normalisedUri) ? "/" : normalisedUri;

  return normalisedUri;
};

const isDataRequest = (uri: string): boolean => uri.startsWith("/_next/data");

const router = (
  manifest: OriginRequestDefaultHandlerManifest
): ((uri: string) => string) => {
  const {
    pages: { ssr, html }
  } = manifest;

  const allDynamicRoutes = { ...ssr.dynamic, ...html.dynamic };

  return (uri: string): string => {
    let normalisedUri = uri;

    if (isDataRequest(uri)) {
      normalisedUri = normaliseDataRequestUri(normalisedUri, manifest);
    }

    if (ssr.nonDynamic[normalisedUri]) {
      return ssr.nonDynamic[normalisedUri];
    }

    for (const route in allDynamicRoutes) {
      const { file, regex } = allDynamicRoutes[route];

      const re = new RegExp(regex, "i");
      const pathMatchesRoute = re.test(normalisedUri);

      if (pathMatchesRoute) {
        return file;
      }
    }

    // only use the 404 page if the project exports it
    if (html.nonDynamic["/404"] !== undefined) {
      return "pages/404.html";
    }

    return "pages/_error.js";
  };
};
