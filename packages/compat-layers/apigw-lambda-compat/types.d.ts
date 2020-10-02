import { CloudFrontResultResponse, CloudFrontRequest } from "aws-lambda";
import { IncomingMessage, ServerResponse } from "http";

declare function lambdaCompat(event: {
  request: CloudFrontRequest;
}): {
  responsePromise: Promise<CloudFrontResultResponse>;
  req: IncomingMessage;
  res: ServerResponse;
};

export default lambdaAtEdgeCompat;

declare const handlerFactory = async (page: any) => (
  event: any,
  context: any
): any => void;
