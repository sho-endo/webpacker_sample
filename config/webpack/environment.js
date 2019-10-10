const { environment } = require('@rails/webpacker')

// ref
// https://github.com/rails/webpacker/issues/321#issuecomment-329119714
// https://github.com/rails/webpacker/blob/3-x-stable/docs/webpack.md#overriding-loader-options-in-webpack-3-for-css-modules-etc
const merge = require('webpack-merge')

const sassLoaderOptions = {
  includePaths: environment.toWebpackConfig().resolveLoader.modules
}


// webpackerのwarningを消すための設定
// ref: https://stackoverflow.com/questions/47252987/emitted-value-instead-of-an-instance-of-error-postcss-custom-properties-in-bul?rq=1
const postCSSLoaderOptions = {
  sourceMap: true,
  plugins: (loader) => [
    require('postcss-cssnext')({
      features: {
        customProperties: {
          warnings: false
        }
      }
    })
  ]
}

const CSSLoader = environment.loaders.get('sass').use.find(el => el.loader === 'sass-loader')
const PostCSSLoader = environment.loaders.get('sass').use.find(el => el.loader === 'postcss-loader')

CSSLoader.options = merge(CSSLoader.options, sassLoaderOptions);
PostCSSLoader.options = merge(PostCSSLoader, postCSSLoaderOptions);

module.exports = environment;
