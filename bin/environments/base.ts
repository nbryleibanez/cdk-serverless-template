import * as cdk from "aws-cdk-lib";
import { StatelessStack } from "../../lib/stateless/stateless-stack";
import { StatefulStack } from "../../lib/stateful/stateful-stack";
import { GlobalStack } from "../../lib/global/global-stack";

export interface EnvironmentConfig {
  Stateful: any;
  Stateless: any;
  Global: any;
}

export function setupEnvironment(
  app: cdk.App,
  envConfig: EnvironmentConfig,
): {
  statefulStack: StatefulStack;
  statelessStack: StatelessStack;
  globalStack: GlobalStack;
} {
  const statefulStack = new StatefulStack(
    app,
    `${envConfig.Stateful.stage}-StatefulStack`,
    {
      ...envConfig.Stateful,
    },
  );

  const statelessStack = new StatelessStack(
    app,
    `${envConfig.Stateless.stage}-StatelessStack`,
    {
      ...envConfig.Stateless,
      dynamodbTable: statefulStack.dynamoDbConstruct.dataDb,
    },
  );

  const globalStack = new GlobalStack(
    app,
    `${envConfig.Global.stage}-GlobalStack`,
    {
      ...envConfig.Global,
    },
  );

  return { statefulStack, statelessStack, globalStack };
}
