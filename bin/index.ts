#!/usr/bin/env node

import * as cdk from "aws-cdk-lib";
import {
  setupProdEnvironment,
  setupStagingEnvironment,
  setupDevEnvironment,
} from "./environments";

const app = new cdk.App();

setupProdEnvironment(app);
setupStagingEnvironment(app);
setupDevEnvironment(app);
