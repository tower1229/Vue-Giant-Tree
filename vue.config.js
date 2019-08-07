module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ?
    '/Vue-Giant-Tree/' : '/',
  css: {
    extract: false
  }
}