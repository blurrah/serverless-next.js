import { Component } from "@serverless/core";
import { readJSON } from "fs-extra";
import { join, resolve } from "path";
import uploadAssetsToS3 from "@sls-next/s3-static-assets";
import {
  BuildOptions,
  LambdaInput,
  LambdaType,
  OriginRequestDefaultHandlerManifest,
  RoutesManifest,
  ServerlessComponentInputs
} from "../types";
import Builder, { DEFAULT_LAMBDA_CODE_DIR } from "./build";

type DeploymentResult = {
  appUrl: string;
  bucketName: string;
  distributionId: string;
};

class NextjsLambdaComponent extends Component {
  async default(
    inputs: ServerlessComponentInputs = {}
  ): Promise<DeploymentResult> {
    if (inputs.build !== false) {
      await this.build(inputs);
    }

    return this.deploy(inputs);
  }

  readDefaultBuildManifest(
    nextConfigPath: string
  ): Promise<OriginRequestDefaultHandlerManifest> {
    return readJSON(
      join(nextConfigPath, ".serverless_nextjs/default-lambda/manifest.json")
    );
  }

  readRoutesManifest(nextConfigPath: string): Promise<RoutesManifest> {
    return readJSON(join(nextConfigPath, ".next/routes-manifest.json"));
  }

  async deploy(
    inputs: ServerlessComponentInputs = {}
  ): Promise<DeploymentResult> {
    console.log(inputs);

    const readLambdaInputValue = (
      inputKey: "memory" | "timeout" | "name" | "runtime",
      lambdaType: LambdaType,
      defaultValue: string | number | undefined
    ): string | number | undefined => {
      const inputValue = inputs[inputKey];

      if (typeof inputValue === "string" || typeof inputValue === "number") {
        return inputValue;
      }

      if (!inputValue) {
        return defaultValue;
      }

      return inputValue[lambdaType] || defaultValue;
    };

    const nextConfigPath = inputs.nextConfigDir
      ? resolve(inputs.nextConfigDir)
      : process.cwd();

    const nextStaticPath = inputs.nextStaticDir
      ? resolve(inputs.nextStaticDir)
      : nextConfigPath;

    const bucketRegion = inputs.bucketRegion || "eu-central-1";

    const [defaultBuildManifest, routesManifest] = await Promise.all([
      this.readDefaultBuildManifest(nextConfigPath),
      this.readRoutesManifest(nextConfigPath)
    ]);

    const [bucket, defaultLambda] = await Promise.all([
      this.load("@serverless/aws-s3"),
      this.load("@sls-next/aws-lambda", "defaultLambda")
    ]);

    // Create bucket containing static files
    const bucketOutputs = await bucket({
      accelerated: true,
      name: inputs.bucketName,
      region: bucketRegion
    });

    const bucketUrl = `http://${bucketOutputs.name}.s3.${bucketRegion}.amazonaws.com`;

    await uploadAssetsToS3({
      bucketName: bucketOutputs.name,
      basePath: routesManifest.basePath,
      nextConfigDir: nextConfigPath,
      nextStaticDir: nextStaticPath,
      credentials: this.context.credentials.aws,
      publicDirectoryCache: inputs.publicDirectoryCache
    });

    // Set up Lambda function
    // default policy
    let policy: Record<string, unknown> = {
      Version: "2012-10-17",
      Statement: [
        {
          Effect: "Allow",
          Resource: "*",
          Action: [
            "logs:CreateLogGroup",
            "logs:CreateLogStream",
            "logs:PutLogEvents"
          ]
        },
        {
          Effect: "Allow",
          Resource: `arn:aws:s3:::${bucketOutputs.name}/*`,
          Action: ["s3:GetObject", "s3:PutObject"]
        }
      ]
    };

    if (inputs.policy) {
      if (typeof inputs.policy === "string") {
        policy = { arn: inputs.policy };
      } else {
        policy = inputs.policy;
      }
    }

    const defaultLambdaInput: LambdaInput = {
      description: inputs.description || "Default Lambda for NextJS",
      handler: "index.handler",
      code: join(nextConfigPath, DEFAULT_LAMBDA_CODE_DIR),
      role: {
        service: ["lambda.amazonaws.com"],
        policy
      },
      memory: readLambdaInputValue("memory", "defaultLambda", 512) as number,
      timeout: readLambdaInputValue("timeout", "defaultLambda", 10) as number,
      runtime: readLambdaInputValue(
        "runtime",
        "defaultLambda",
        "nodejs12.x"
      ) as string,
      name: readLambdaInputValue("name", "defaultLambda", undefined) as
        | string
        | undefined
    };

    const defaultLambdaOutputs = await defaultLambda(defaultLambdaInput);

    const defaultEdgeLambdaPublishOutputs = await defaultLambda.publishVersion();

    return await {
      appUrl: "test",
      bucketName: bucketOutputs.name,
      distributionId: "test"
    };
  }

  async build(inputs: ServerlessComponentInputs = {}): Promise<void> {
    const nextConfigPath = inputs.nextConfigDir
      ? resolve(inputs.nextConfigDir)
      : process.cwd();

    const buildCwd =
      typeof inputs.build === "boolean" ||
      typeof inputs.build === "undefined" ||
      !inputs.build.cwd
        ? nextConfigPath
        : resolve(inputs.build.cwd);

    const buildConfig: BuildOptions = {
      enabled: inputs.build
        ? // @ts-ignore
          inputs.build !== false && inputs.build.enabled !== false
        : true,
      cmd: "node_modules/.bin/next",
      args: ["build"],
      ...(typeof inputs.build === "object" ? inputs.build : {}),
      cwd: buildCwd
    };

    if (buildConfig.enabled) {
      const builder = new Builder(
        nextConfigPath,
        join(nextConfigPath, ".serverless_nextjs"),
        {
          cmd: buildConfig.cmd,
          cwd: buildConfig.cwd,
          env: buildConfig.env,
          args: buildConfig.args,
          useServerlessTraceTarget: inputs.useServerlessTraceTarget || false,
          logLambdaExecutionTimes: inputs.logLambdaExecutionTimes || false
        }
      );

      await builder.build(this.context.instance.debugMode);
    }
  }
}

export default NextjsLambdaComponent;
