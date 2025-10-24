module.exports = function(api) {
  // We want Babel to rerun the config function
  // on every build to allow changes from env files
  // to take effect.
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          verbose: false,
        },
      ],
    ]
  };
};
