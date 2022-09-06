/* 제너레이터
  - 함수의 실행을 중간에 멈췄다가 재 실행할 수 있는 독특한 함수
  - function 키워드 옆에 *을 쓰고, yield 키워드를 사용해 함수 실행을 잠깐 멈출수있음
  

* 정리 : 제너레이터는 다른 작업을 하다가 다시 돌아와서, next()해주면 진행이 멈췄던 부분부터 이어서 실행할 수 있다.

*/

function* fn() {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    console.log(5);

    return "finish!!";
}

// 제너레이터 함수 실행 시, 제너레이터 객체가 반환됨
const a = fn(); 

/*
 함수 실행 시, 객체만 반환되고 아직 함수 본문 코드는 실행되지 않음.
 객체.next()메소드를 사용하면, 가장 가까운 yield를 만날때까지 실행하고 데이터 객체를 반환한다.

 여기서 반환된 객체는 value, done 프로퍼티를 갖는다. { value: 1, done: false }
 value는 yield와 함께 쓰인 값(생략 시 undefined), done은 함수코드가 끝났는지 

 끝까지 왔으면, value는 함수에서 리턴한 값, done:true 반환
 */
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());

// 함수 종료 후, 호출하면 value:undefined, done:true
console.log(a.next());