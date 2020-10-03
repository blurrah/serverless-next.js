declare module "@sls-next/next-aws-lambda" {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
  function lambdaApiGwCompatLayer(
    page: any
  ): (curry: any, secondCurry: any) => any;

  export default lambdaApiGwCompatLayer;
}
