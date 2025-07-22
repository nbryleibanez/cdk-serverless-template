const commons = {
  env: {
    account: process.env.AWS_ACCOUNT_ID,
  },
  stage: "dev",
};

const Stateful = {
  ...commons,
  env: {
    ...commons.env,
    region: process.env.AWS_REGION,
  },
};

const Stateless = {
  ...commons,
  env: {
    ...commons.env,
    region: process.env.AWS_REGION,
  },
};

const Global = {
  ...commons,
  env: {
    ...commons.env,
    region: "us-east-1",
  },
};

export default {
  commons,
  Stateful,
  Stateless,
  Global,
};
