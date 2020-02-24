module.exports = {
  preset: 'ts-jest',
  projects: [
    'packages/utils'
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'vue'
  ],
  rootDir: __dirname,
  testMatch: [
    '**/tests/unit/**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  verbose: true,
  testEnvironment: 'node',
}
