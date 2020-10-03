import { APIGatewayProxyResultV2, APIGatewayProxyHandlerV2 } from "aws-lambda";
// @ts-ignore
import lambdaApiGwCompatLayer from "@sls-next/next-aws-lambda";
const page = require(`./pages/server/[product].js`); // eslint-disable-line

export const handler: APIGatewayProxyHandlerV2 = async (
  event,
  context
): Promise<APIGatewayProxyResultV2> => {
  const returnPromise = await lambdaApiGwCompatLayer(page)(event, context);
  console.log(returnPromise);
  returnPromise["headers"]["Content-Type"] = "text/html";
  return returnPromise;
};
