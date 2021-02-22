import developmentEnvs from "./env.development";
import productionEnvs from "./env.production";

enum Environment {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
  TEST = "test",
}

export const isProd = process.env.APP_ENV === Environment.PRODUCTION;

const getConfig = (environment) => {
  if (
    process.env.NODE_ENV === Environment.DEVELOPMENT ||
    process.env.NODE_ENV === Environment.TEST
  )
    return developmentEnvs; // development mode

  if (environment === Environment.DEVELOPMENT) return developmentEnvs; // stag.pier.digital
  if (environment === Environment.PRODUCTION) return productionEnvs; // pier.digital

  throw new Error("Error on loading env config");
};

const config = getConfig(process.env.APP_ENV);

export default config;
