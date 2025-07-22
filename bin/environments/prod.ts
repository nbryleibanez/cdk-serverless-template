import * as cdk from "aws-cdk-lib";
import ProdProps from "../../configs/prod";
import { setupEnvironment } from "./base";

export function setupProdEnvironment(app: cdk.App) {
  return setupEnvironment(app, ProdProps);
}
