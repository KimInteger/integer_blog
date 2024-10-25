const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv');
const webpack = require('webpack');

// dotenv 패키지를 사용하여 .env.local 파일에서 환경 변수를 로드
const env = dotenv.config({ path: './.env.local' }).parsed;

// 환경 변수를 Webpack에서 사용할 수 있도록 변환
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});


module.exports = {
  entry: env.ENTRY_POINT,
  output: {
    path: path.resolve(__dirname, ".build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'], // CSS 파일을 처리
      },
      {
        test: /\.(js|jsx|ts|tsx)$/, // 자바스크립트 및 타입스크립트 파일을 처리
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx$/, // 타입스크립트 파일을 처리
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 템플릿으로 사용할 HTML 파일 경로
      filename: 'index.html',          // 출력될 HTML 파일 이름
    }),
    new webpack.DefinePlugin(envKeys), // 환경 변수를 Webpack에서 사용할 수 있도록 정의
  ],
};
