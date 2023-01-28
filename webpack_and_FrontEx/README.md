
## 1. 프로젝트 계획 이유
 -  webpack을 이용하여 프론트 개발 환경을 세팅하는 방법을 정리하기 위해 계획하였습니다.


****
# 2. Install and Use
## 2.1. npm 패키저
* npm 패키저를 초기화합니다.
    ```
    npm init
    ```

## 2.2. webpack
* 모듈 번들러 webpack을 설치합니다.
    ```
    npm i webpack webpack-cli --save-dev
    ```

* webpack 사용을 위한 환경 파일인 `webpack.config.js`을 만듭니다.
    ```
    // node에서 제공하는 path모듈
    // 파일이나 폴더의 경로작업을 위한 기능제공
    const path = require('path');

    module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'js'), // "현재경로 하위에 js폴더를 만들고"
        filename: 'main.js', // output으로 main.js라는 파일을 만들어놓음
    },
    module: {

    }
    };

    ```

* webpack 실행을 위해, script를 일부 수정합니다.
    ```
      "scripts": {
        "build": "webpack --mode=production", // 추가: mode는 production mode로 진행 (development는 작업 중 에러 발생 시, 에러를 수정할 수있도록 하기 때문에 코드가 길움) 
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```

## 2.3. html-webpack-plugin
* 배포 시, js/main.js만 배포하는 건 불가능합니다.
* html 파일도 배포할 수 있도록, 추가적으로 설치해주어야 합니다.
    ```
    npm i html-webpack-plugin
    ```

* 이후, 설치한 html-webpack-plugin을 불러와 사용할 수 있도록, webpack.config.js 파일을 수정합니다.
    ```
    const path = require('path');
    const HtmlWebpackPlugin = require("html-webpack-plugin"); // 추가

    module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'main.js', 
    },
    module: {

    },
    plugins : [ // 추가
        new HtmlWebpackPlugin({
        template: './index.html' // 기존에 만들었던 파일을 이용해서 빌드 수행
    }),
    ]
    };
    ```
* 이후 npm run build 수행 시, output 폴더에 index.html파일이 추가됩니다.

## 2.4. webpack-dev-server
* 매번 webpack 명령어를 실행하는 등의 번거로운 작업을 간소화 할 수 있도록 합니다.
* 개발하기 쉽도록 서버를 띄워줍니다.
    ```
    npm i webpack-dev-server -D
    ```

* webpack.config.js를 수정합니다.
    ```

    const path = require('path');
    const HtmlWebpackPlugin = require("html-webpack-plugin");

    module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'js'), 
        filename: 'main.js',
    },
    module: {

    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './index.html' 
        }),
    ],
    devServer: { // 추가
        static: {
            directory: path.resolve(__dirname, 'js') // 파일경로 작성
        },
        port: 8080, // 서버구동포트
    }
    };
    ```

* package.json파일에서 scripts에 "start" 명령어를 추가합니다.
    ```
    "scripts": {
        "start": "webpack serve --open --mode=development",
        "build": "webpack",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```

* 이제 `src/index.js`, `src/util.js` 등 폴더에서 변경사항이 생기면 자동으로 webpack이 사용됩니다.

## 2.5. style-loader, css-loader
* style-loader와 css-loader를 설치합니다.
    * css-loader는 css파일을 읽어줍니다.
    * style-loader는 읽은 css를 style 태그로 만들어줍니다.
        * 그리고 `<head>`내부에 이 style을 넣어 바로 적용될 수 있도록 합니다.

    ```
    npm i -D style-loader css-loader
    ```

* webpack.config.js파일 내 module의 rules를 추가합니다.
    ```
    const path = require('path');
    const HtmlWebpackPlugin = require("html-webpack-plugin");

    module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'js'), 
        filename: 'main.js', 
    },
    module: { // 추가
        rules:[
            {
                test: /\.css$/, // 확장자가 css일 때
                use: ["style-loader", "css-loader"] //css-loader로 읽고, style-loader로 적용
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './index.html' 
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'js') 
        },
        port: 8080, 
    }
    };
    ```

* src/style.css를 만들고, src/index.js에서는 이를 import합니다.


## 2.6. mini-css-extract-plugin
* `2.5`는 css파일을 internal방식으로 사용하는 방법입니다.
* css 파일을 별도로 만들어 가져와야 할 상황에서 사용할 수 있습니다.
    ```
    npm i -D mini-css-extract-plugin
    ```
* webpack.config.js를 수정합니다. (rule 변경)
    ```

    const path = require('path');
    const HtmlWebpackPlugin = require("html-webpack-plugin");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");

    module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'js'), 
        filename: 'main.js', 
    },
    module: {
        rules:[
            {
                test: /\.css$/, // 확장자가 css일 때
                // use: ["style-loader", "css-loader"] // css-loader로 읽고, style-loader로 적용
                use: [MiniCssExtractPlugin.loader, "css-loader"] // css-loader로 읽고, head에 style태그를 만드는방식으로 넣는게아니라 (style-loader) 외부에서 가져오는 방식이기 때문에 Minicssextractplugin 사용
                
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './index.html' 
        }),

        // 추가
        new MiniCssExtractPlugin({
            filename:'common.css' // 추가된 파일은 common.css 파일이라는 이름을 가진다.
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'js') // 파일경로 작성
        },
        port: 8080, // 서버구동포트
    }
    };
    ```

* 브라우저 F12의 요소의 head 태그를 살펴보면, `<link href="외부파일.css">`형식으로 css파일을 불러온 것을 확인할 수 있습니다. 
    * 혹은 `npm run build`로, output폴더 내에 생성된 css 파일을 확인해도 됩니다.



## 2.7. file-loader
* 이미지 로드를 수행하기 위한 file-loader를 설치합니다.
    ```
    npm i -D file-loader
    ```

* webpack.config.js 파일에, 설치한 file-loader를 추가합니다.
    ```
    const path = require('path');
    const HtmlWebpackPlugin = require("html-webpack-plugin");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");

    module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'main.js', 
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                // use: ["style-loader", "css-loader"] 
                use: [MiniCssExtractPlugin.loader, "css-loader"] 
            },{
                // 추가
            test: /\.png$/, // 추가할 확장자 파일
            use: ["file-loader"] // 사용할 로더
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './index.html' 
        }),
        new MiniCssExtractPlugin({
            filename:'common.css'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'js') 
        },
        port: 8080, 
    }
    };

    ```

* src/index.js 에 아래처럼 img 태그 사용을 추가하고 npm start 명령어로 webpack-dev-server를 구동합니다.
    ```
    import {add, hello} from "./util";
    import "./style.css";
    import "./header.css"
    import logo from "./images/forestLogo.png";

    const text = hello("<h1>LEEEee!</h1>");
    const num = add(1,2);
    const img = `<img src=${logo} alt="ori"/>`; // 추가

    document.getElementById("root").innerHTML = img + text + num;
    ```


## 2.8. clean-webpack-plugin
* 이전 build때 사용하고, 더이상 사용하지 않는 파일을 정리할 수 있도록 기능을 지원하는 clean-webpack-plugin을 설치합니다. 
    * 예시: 이미지 파일을 사용했다가, 더이상 사용하지 않을 때
    ```
    npm i -D clean-webpack-plugin
    ```

* webpack.config.js 파일에, 설치한 플러그인을 추가합니다.
    ```
    const path = require('path');
    const HtmlWebpackPlugin = require("html-webpack-plugin");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    const {CleanWebpackPlugin} = require("clean-webpack-plugin"); // default export가 설정되어있지않아 중괄호로 감싸야 함

    module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'js'), 
        filename: 'main.js', 
    },
    module: {
        rules:[
            {
                test: /\.css$/, // 확장자가 css일 때
                // use: ["style-loader", "css-loader"] 
                use: [MiniCssExtractPlugin.loader, "css-loader"]
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
        new CleanWebpackPlugin(), // 추가
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'js') 
        },
        port: 8080, 
    }
    };
    ```