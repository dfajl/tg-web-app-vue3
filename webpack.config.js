module.exports = {
  resolve: {
    fallback: {
      timers: require.resolve('timers-browserify'),
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto'),
      fs: false,
      path: falsec,
      https: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
    },
  },   
   devServer: {
       compress: true,
       disableHostCheck: true,

   },
}
