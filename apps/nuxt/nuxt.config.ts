import { resolve } from 'path'
import { Configuration } from '@nuxt/types'

const isDev = () => process.env.NODE_ENV !== 'production'

const config: Configuration = {
  mode: 'universal',
  srcDir: resolve(__dirname, 'src'),
  buildDir: resolve(__dirname, '.nuxt'),
  dev: isDev(),
  devtools: isDev(),
  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/eslint-module', { emitError: true }]
  ],
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  build: {
    analyze: isDev(),
    cssSourceMap: true,
    transpile: [
      '@micheldenegri/utils'
    ],
    extend (config, { isDev, isClient }): void {
      if (isDev && isClient && config.module) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (isDev && isClient && config.devtool) {
        config.devtool = isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}

export default config
