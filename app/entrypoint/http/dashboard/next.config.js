// Plugins
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const config = withImages(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    webpack: (config, { dev }) => {
      config.module.rules.push(
        {
          test: /\.test.js$/,
          loader: 'ignore-loader'
        }
      );
      return config;
    }
  })
);

module.exports = config;
