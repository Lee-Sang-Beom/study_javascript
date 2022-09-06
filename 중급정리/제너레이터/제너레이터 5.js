function* func(){
    const num1 = yield "첫번째 숫자 입력";
    console.log(num1);

    const num2 = yield "두번째 숫자 입력";
    console.log(num2);

    return num1+num2;
}

const a= func();

// next()로 인자 전달하기 : yield1을 만날때까지 수행. 만난 yield의 데이터객체 반환
console.log(a.next());

// 전달 시, num1에 저장 : 값을 넣고 yield2를 만날때까지 수행
console.log(a.next(1));

// 전달 시, num2에 저장 : 값을 넣고 return문 만날때까지 수행
// return문을 만나면 value, done 프로퍼티 출력
console.log(a.next(2));