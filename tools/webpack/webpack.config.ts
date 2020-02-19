import { join } from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  entry: './src/index.ts',
  resolve: { extensions: ['.js', '.ts'] },
  output: {
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'coconut',
  },
  module: {
    rules: [
      {
        test: /\.(?:j|t)s$/,
        include: join(`${__dirname}/../../src`),
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/env',
              {
                useBuiltIns: 'usage',
                corejs: 2,
                targets: {
                  ie: 11,
                },
              },
            ],
            '@babel/typescript',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/proposal-object-rest-spread',
          ],
        },
      },
    ],
  },
};

export default config;
