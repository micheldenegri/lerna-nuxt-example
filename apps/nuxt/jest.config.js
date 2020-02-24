const { resolve } = require('path')
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  preset: 'ts-jest',
  rootDir: resolve(__dirname),
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  snapshotSerializers: [require.resolve('jest-serializer-vue')],
  transform: {
    '^.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': require.resolve('jest-transform-stub'),
    '^.+\\.tsx?$': require.resolve('ts-jest'),
    '^.+\\.jsx?$': require.resolve('babel-jest'),
    '^.+\\.vue?$': require.resolve('vue-jest')
  },
  testURL: 'http://localhost/',
  transformIgnorePatterns: [resolve(__dirname, 'node_modules/(?!@micheldenegri/utils)')],
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'vue'
  ],
  testMatch: [
    '**/tests/unit/**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  verbose: true
}
