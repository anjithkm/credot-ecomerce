const { pathsToModuleNameMapper } = require('ts-jest');
const path = require('path')
const CracoAlias = require('craco-alias');
const { compilerOptions } = require('./tsconfig.path.json');
module.exports = {
  // plugins: [
  //   {
  //     plugin: CracoAlias,
  //     options: {
  //       source: 'options',
  //       baseUrl: './',
  //       aliases: {
  //         '@': './src',
  //       },
  //     },
  //   }],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/src/',
      }),
    },
  },
};