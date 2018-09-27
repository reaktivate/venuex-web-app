const rewireEslint = require('react-app-rewire-eslint'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = (config, env) => {
  config = rewireEslint(config, env);
  return config;
};
