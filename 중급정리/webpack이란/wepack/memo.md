study-webpack
======================

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

## 3. 사용

3-1) 프로젝트가 npm에 의해 관리되는 것이 먼저 필요함 : 초기화 작업 필요 (package.json 생성)
```
npm init -y
```


3-2) webpack 설치
 - wepack를 로컬환경에 설치 : webpack-cli
 - webpack은 운영환경에 배포될 일이 없음 : --save-dev
```
npm install --save-dev webpack webpack-cli
```


3-3) root 폴더에 'webpack.config.js' 파일 생성 후, 내용 삽입
 - entry : 웹팩의 진입점으로, 해당 파일을 기준으로 사용하는 모듈을 추적 (어떤 파일을 기준으로 번들링 할 것인가?)
 - output : 번들링 된 파일이 위치할 경로 (dist폴더 안에 bundle.js로 저장)

```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

 - 아래와 같이, mode를 추가하면 코드 최적화 대신 보기 쉽게 파일이 저장됨
```
const path = require('path');

module.exports = {
  mode: 'production', // 개발환경이라고 지정 : 보기쉽게됨
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

3-4) package.json 수정
 - 'npm run build' 시, 자동으로 webpack 작업이 수행되게 하려면, scripts에 속성추가
 - "build" : 'webpack" 추가 

```
{
  "name": "wepack",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
  }
}

```