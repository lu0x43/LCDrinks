const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: ['jpg', 'png', 'mp3'], // Adiciona novas extensões de asset suportadas
  },
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'), // Configura o transformer para suportar SVGs
  },
  // Mais configurações podem ser adicionadas aqui
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
