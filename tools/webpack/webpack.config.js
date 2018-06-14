const { join } = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: join(`${__dirname}/../../src`),
        loader: 'babel-loader',
        options: { presets: ['env', 'stage-2'], plugins: ['lodash', 'transform-class-properties'] },
      },
    ],
  },
};
