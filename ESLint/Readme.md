# ESLint
- ESLint는 자바스크립트 소스 코드의 문제를 분석하고 교정까지 해주며,  코드의 일관성을 높여 가독성까지 고려할 수 있도록 도와주는 린터입니다. 
- (참고: 린터란 소스 코드에 문제가 있는지 탐색하는 린트 작업을 도와주는 소프트웨어 도구)

- eslint 패키지를 설치해 사용할 수 있습니다. (다른 정적분석도구와 비교해 커스터마이징 쉽고, 확장성이 뛰어나다고 들었습니다)
- 자바스크립트는 컴파일 과정이 없는 인터프리터 언어이기 때문에, 런타임 에러가 발생할 확률이 높습니다. 따라서, 이 린트 작업으로 사전 에러를 잡아주는 것이 중요합니다

# Install & Apply

1. ESLint 설치
    ``` 
    npm install eslint --save-dev
    ``` 

2. config 파일 설정 및 설치
    ``` 
    npx eslint --init
    ``` 
    - How would you like to configure ESLint? : Use a popular style guide
    - Which style guide do you want to follow? : Standard
    - What format do you want your config file to be in? : JavaScript


    ```
    module.exports = {
        "extends": "standard",
        "rules": {
            "indent": [
                "error",
                4
            ],
            "semi": [
                "error",
                "always"
            ],
            "no-trailing-spaces": 0,
            "keyword-spacing": 0,
            "no-unused-vars": 1,
            "no-multiple-empty-lines": 0,
            "space-before-function-paren": 0,
            "eol-last": 0
        }
    };
    ```
3. 실행
    ```
    npx eslint <yourefile.js>
    option : --fix (자동수정)
    ```