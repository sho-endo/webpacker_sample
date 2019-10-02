const { environment } = require('@rails/webpacker')

// ref
// https://github.com/rails/webpacker/issues/321#issuecomment-329119714
// https://github.com/rails/webpacker/blob/3-x-stable/docs/webpack.md#overriding-loader-options-in-webpack-3-for-css-modules-etc
const merge = require('webpack-merge')

  const sassLoaderOptions = {
    includePaths: environment.toWebpackConfig().resolveLoader.modules
}

const CSSLoader = environment.loaders.get('sass').use.find(el => el.loader === 'sass-loader')

CSSLoader.options = merge(CSSLoader.options, sassLoaderOptions)

module.exports = environment
