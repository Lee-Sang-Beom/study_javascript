## 1. 배경 개념
 - 모듈 : 코드의 재사용/유지보수를 위해 파일들로 분리하는 것
 
 - 자주사용하는 코드는 이렇게 '모듈'로 분할하는 것이 좋음

 - 하지만, 개발 편의성을 위해 모듈을 너무 많이 만들면?

### - 과정
	1. 웹 애플리케이션 완성 시, 웹 서버에 html,css,js 파일을 배포한다.

	2. user가 브라우저를 통해 웹 사이트에 접근하면, 브라우저는 user에게 웹 사이트를 보여주기 위해 웹 서버에 html,css,js 파일 등의 리소스를 요청한다.

	3. 웹 서버는 리소스를 포함해 응답한다. 이 과정이 끝나면 비로소 user는 사이트를 볼 수 있다.


### - 문제
	1. 모듈이 많으면 그만큼 서버에 요청하는 http 개수가 많아진다.

	2. 페이지 로딩시간과 네트워크 비용이 증가한다.

	3. 그럼 모듈을 많이 만들며 페이지 로딩시간은 줄이는 방법은 없을까?



****

## 2. 번들과 웹팩
 - 개발할 때는 모듈로 나눠 개발하고, 웹 서버에 배포할 때는 하나의 파일로 묶어 배포하는 방법을 생각할 수 있다.
 
 - 그럼 그만큼 서버로 요청하는 http 개수는 줄어들 테니까!

### - 번들링, 모듈 번들러
	1. 여러 모듈을 하나로 묶는 작업 : 번들링

	2. 여러 모듈을 하나로 묶는 도구 : 모듈 번들러

	3. 웹팩은 모듈 번들러의 하나. 즉, 웹팩은 여러 파일을 하나의 파일로 묶는 모듈 번들러이다.

  4. 모듈 번들러는 프론트엔드에서 서버로 http 요청 시, 요청 개수를 줄여줌으로써 performance를 향상시키고, 공백 등을 없애므로 리소스를 최적화시킨다.

  5. 이와 같은 특성으로 사용자 경험이 좋아진다.

****

## 3. 바벨
 - ES6+ 문법을 ES5로 변환하여, 대부분 브라우저에서 실행하는 데의 문제를 해결한다.

 - 여기서는, Webpack, Babel, Polyfill를 설치하고 사용하는 방법에 대해 알아본다.

****

## 4. 과정 기록
### 1. package.json 생성
- 프로젝트가 npm에 의해 관리되는 것이 먼저 필요함 : 초기화 작업 필요

### 2. webpack 설치
- wepack를 로컬환경에 설치 : webpack-cli
- webpack은 운영환경에 배포될 일이 없음 : --save-dev

```
npm install webpack webpack-cli path --save-dev
```

### 3. webpack 설치
- root 폴더에 'webpack.config.js' 파일 생성 후, 내용 삽입

- context: base 디렉터리 정의 (__dirname: 파일이 위치한 절대경로)
- entry : 웹팩의 진입점으로, 해당 파일을 기준으로 사용하는 모듈을 추적 (어떤 파일을 기준으로 번들링 할 것인가?)
- output : 번들링 된 파일이 위치할 경로 (js폴더 안에 app.js로 저장)
- module : webpack이 사용할 플러그인 지정 (babel 설치 후 작성)

```
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'app.js',
  },
  module: {

  }
};
```

### 4. webpack 실행
- development option을 주어, webpack 실행
- webpack 설정에서 output으로 지정한 js폴더 내, app.js 파일이 만들어짐
```
.\node_modules\.bin\webpack --mode=development
```

- 아직 babel 설정을 하지 않았기에 let이 아래처럼 들어가있다.
```
eval("let a=0;\r\nconsole.log(a);\n\n//# sourceURL=webpack:///./src/app.js?");
```

### 5. babel 설치
- npm i @babel/core @babel/polyfill @babel/preset-env babel-loader --save-dev

### 6. webpack.config.js 수정
```
    // 추가
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
```

### 7. root에 .babelrc 파일 생성
```
{
    "presets": ["@babel/preset-env"]
}
```

### 8. src/app.js인 소스파일로 돌아와 바벨 폴리필 import
```
import "@babel/polyfill"; // 추가

let a=0;
console.log(a);
```

### 9. 다시 webpack 실행
```
.\node_modules\.bin\webpack --mode=development
```

- 실행 시, let이 var로 변경됨
```
eval("var a = 0;\nconsole.log(a);\n\n//# sourceURL=webpack:///./src/app.js?");
```

### 10. 오류 발생시키기
- src/app.js의 import문을 지우고,
- webpack.config.js의 babel관련 코드를 지우고 아래와 같이 코드를 작성해보자

```
- src/app.js

const arrow = () => {
    console.log('arrow func');
}

const a = new Promise((resolve, reject)=>{
    resolve('good');
});

arrow();
console.log(a);
```

```
- index.html

<script src="./js/app.js"></script>
```

```
- webpack.config.js (module부분 주석처리 or 제거)

module: {
}
```

- 아래 명령어로, 다시 webpack 실행 시, index.html은 구문오류를 발생시킨다.
```
.\node_modules\.bin\webpack --mode=development
```

### 11. 다시 실행하기

```
- src/app.js
import "@babel/polyfill";

const arrow = () => {
    console.log('arrow func');
}

const a = new Promise((resolve, reject)=>{
    resolve('good');
});

arrow();
console.log(a);
```

```
- index.html

<script src="./js/app.js"></script>
```

```
- webpack.config.js (module부분 주석처리 or 제거)

module: {
        rules:[
            {
                test:/\.js$/, 
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
```

- 아래 명령어로, 다시 webpack 실행 시, 구문오류가 사라진다.
```
.\node_modules\.bin\webpack --mode=development
```

### 12. TIP
 - 매번 명령어를 길게 쳐서, webpack 실행 시 생산성이 떨어질 수 있다. 그래서 아래와 같은 방법을 사용할 수 있다.
    
    #### 1) webpack.config.js에 mode추가
    ```
    module.exports = {
    mode: "development", // 추가 (or production)
    context: __dirname,
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "js"),
        filename: "app.js",
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },
        ],
    },
    };
    ```  

    #### 2) package.json에 script추가
     - npm run build로, 간단하게 webpack을 실행하기 위함이다.
     - 정상 설치 과정을 따라오면, 입력 결과는 아래와 같다
    ```
    {
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack"
      },
    "devDependencies": {
        "@babel/core": "^7.19.3",
        "@babel/polyfill": "^7.12.1",
        "@babel/preset-env": "^7.19.4",
        "babel-loader": "^8.2.5",
        "path": "^0.12.7",
        "webpack": "^5.74.0",
        "webpack-cli": "^4.10.0"
    }
    }
    ``` 

    #### 3) npm run build로 webpack 실행