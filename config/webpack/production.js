process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin

environment.plugins.append(
  'AngularCompilerPlugin',
  new AngularCompilerPlugin({
    tsConfigPath: 'tsconfig.json',
    entryModule: 'app/javascript/hello_angular/app/app.module#AppModule'
  })
)

environment.loaders.append('typescript', {
  test: /\.ts$/,
  use: '@ngtools/webpack'
})

module.exports = environment.toWebpackConfig()
