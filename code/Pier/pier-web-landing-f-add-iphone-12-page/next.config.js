require("dotenv").config();

const RollbarSourcemapPlugin = require("rollbar-sourcemap-webpack-plugin");
const withSourceMaps = require("@zeit/next-source-maps")({
  devtool: "nosources-source-map",
});

const getProductionPlugins = (webpack, buildId, rollbarToken) => {
  const codeVersion = JSON.stringify(buildId);
  const definePlugin = new webpack.DefinePlugin({
    "process.env.NEXT_BUILD_ID": codeVersion,
  });

  const rollbarPlugin = new RollbarSourcemapPlugin({
    accessToken: rollbarToken,
    version: codeVersion,
    publicPath: "https://www.pier.digital/_next/",
    ignoreErrors: true,
  });

  return [
    new webpack.EnvironmentPlugin(process.env),
    rollbarPlugin,
    definePlugin,
  ];
};

const ROLLBAR_ACCESS_TOKEN_SERVER = process.env.ROLLBAR_ACCESS_TOKEN_SERVER;

module.exports = {
  exportPathMap() {
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = withSourceMaps({
  env: {
    ROLLBAR_ACCESS_TOKEN_SERVER,
  },
  webpack: (config, { dev, webpack, buildId }) => {
    if (dev) return config;

    config.output.futureEmitAssets = false;
    config.plugins.push(
      ...getProductionPlugins(webpack, buildId, ROLLBAR_ACCESS_TOKEN_SERVER)
    );

    return config;
  },
});
