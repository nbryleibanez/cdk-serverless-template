import * as cdk from "aws-cdk-lib";
import StagingProps from "../../configs/staging";
import { setupEnvironment } from "./base";

export function setupStagingEnvironment(app: cdk.App) {
  return setupEnvironment(app, StagingProps);
}
