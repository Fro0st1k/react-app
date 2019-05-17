module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: 'last 2 versions'
    },
    cssnano: {
      preset: ['default', { discardComments: { removeAll: true } }]
    }
  }
};
