const mix = require('laravel-mix');

mix.react('resources/assets/js/script.js', 'public/common/js')
   .sass('resources/assets/scss/style.scss', 'public/common/css')
   .options({
      processCssUrls: false,
      postCss: [
        require('css-mqpacker')()
      ],
      autoprefixer: {
        browsers: ['last 2 versions'],
        options: {
          grid: true,
        }
      }
   })
   .sourceMaps()
   
mix.webpackConfig({ devtool: "inline-source-map" })

mix.browserSync({
  server: 'public',
  proxy: false,
  files: [
    'public/**/*.html',
    'public/**/*.php',
    'public/common/js/*.js',
    'public/common/css/*.css',
  ]
})
