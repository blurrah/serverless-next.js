import { CloudFrontResultResponse, CloudFrontRequest } from "aws-lambda";
import { IncomingMessage, ServerResponse } from "http";

declare const handlerFactory = async (page: any) => (
  event: any,
  context: any
): any => void;

export default handlerFactory
