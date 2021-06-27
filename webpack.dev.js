const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
module.exports = merge(common, {
  entry: {
    // index: path.join(srcPath, 'index.js'),
    index: [
        'webpack-dev-server/client?http://localhost:3000/',
        'webpack/hot/dev-server',
        path.join(path.join(__dirname, 'src/index.js'))
    ],
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // 其他选项
                    },
                  ],
                ],
              },
            },
          },
          
        ],
      },
      {
        test: /\.less$/,
        // 增加 'less-loader' ，注意顺序
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // 其他选项
                    },
                  ],
                ],
              },
            },
          },
          'less-loader',
        ],
      }
    ]  
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),  // 根目录
    hot: true,
    // process: true,
    overlay: true,
    compress: true,
    progress: true,
    watchContentBase: true,
    clientLogLevel: 'none',
    // errorOverlay: true,
    // clientLogLevel: 'error',
    // 设置代理
    // proxy: {
    //     // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
    //     '/api': 'http://localhost:3000',

    //     // 将本地 /api2/xxx 代理到 localhost:3000/xxx
    //     '/api2': {
    //         target: 'http://localhost:3000',
    //         pathRewrite: {
    //             '/api2': ''
    //         }
    //     }
    // }
  },
})