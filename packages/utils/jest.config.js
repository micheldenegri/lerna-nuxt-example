// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path')

module.exports = {
  name: 'utils',
  displayName: 'utils',
  preset: 'ts-jest',
  rootDir: resolve(__dirname),
  transform: {
    '^.+\\.tsx?$': require.resolve('ts-jest'),
    '^.+\\.jsx?$': require.resolve('babel-jest')
  }
}
