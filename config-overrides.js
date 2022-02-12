const path = require('path');
const { override, getBabelLoader } = require('customize-cra');

const babelConfig = (config) => {
  const loader = getBabelLoader(config);
  loader.options.configFile = path.resolve(__dirname, 'babel.config.js');

  return config;
};

module.exports = override(babelConfig);
