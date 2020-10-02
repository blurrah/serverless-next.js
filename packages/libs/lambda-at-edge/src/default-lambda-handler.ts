import { APIGatewayProxyResultV2, APIGatewayProxyHandlerV2 } from "aws-lambda";
// @ts-ignore
import lambdaApiGwCompatLayer from "@sls-next/next-aws-lambda";
const page = require(`./server/[product].js`); // eslint-disable-line

export const handler: APIGatewayProxyHandlerV2 = async (
  event,
  context
): Promise<APIGatewayProxyResultV2> => {
  return lambdaApiGwCompatLayer(page)(event, context);
};
