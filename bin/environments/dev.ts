import * as cdk from "aws-cdk-lib";
import DevProps from "../../configs/dev";
import { setupEnvironment } from "./base";

export function setupDevEnvironment(app: cdk.App) {
  return setupEnvironment(app, DevProps);
}
