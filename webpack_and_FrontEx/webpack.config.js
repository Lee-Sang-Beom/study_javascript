// node에서 제공하는 path모듈
// 파일이나 폴더의 경로작업을 위한 기능제공
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin"); // default export가 설정되어있지않아 중괄호로 감싸야 함

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'js'), // "현재경로 하위에 js폴더를 만들고"
    filename: 'main.js', // output으로 main.js라는 파일을 만들어놓음
  },
  module: {
    rules:[
        {
            test: /\.css$/, // 확장자가 css일 때
            // use: ["style-loader", "css-loader"] // css-loader로 읽고, style-loader로 적용
            use: [MiniCssExtractPlugin.loader, "css-loader"] // css-loader로 읽고, head에 style태그를 만드는방식으로 넣는게아니라 (style-loader) 외부에서 가져오는 방식이기 때문에 Minicssextractplugin 사용
        },{
          test: /\.png$/,
          use: ["file-loader"]
        }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
        template: './index.html' 
    }),
    new MiniCssExtractPlugin({
        filename:'common.css'
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'js') // 파일경로 작성
    },
    port: 8080, // 서버구동포트
  }
};
