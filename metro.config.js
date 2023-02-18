const MetroConfig = require('@ui-kitten/metro-config');
const evaConfig = {
  evaPackage: '@eva-design/eva',
  customMappingPath: './app/themes/mapping.json',
};
module.exports = MetroConfig.create(evaConfig, {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
});
