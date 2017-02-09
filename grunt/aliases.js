module.exports = {
  default: [
    'build',
    'watch:appCSS'
  ],

  build: [
    'buildCSS'
  ],

  buildCSS: [
    'buildAppCSS'
  ],

  buildAppCSS: [
    'sass_globbing',
    'sass:appCSS'
  ]
}
