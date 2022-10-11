const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'js'),
      filename: 'app.js',
    },
    module: {
        rules:[
            {
                test:/\.js$/, // 확장자가 .js인 파일을 대상으로 하고,
                exclude: /node_modules/, // node_modules 디렉토리는 제외하고,
                loader: 'babel-loader' // babel loader 적용
            }
        ]
    }
  };