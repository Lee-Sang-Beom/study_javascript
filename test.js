{
  /*
call과 apply는 함수를 호출하는 함수이다. 
그러나 그냥 실행하는 것이 아니라 첫 번째 인자에 this로 setting하고 싶은 객체를 넘겨주어 this를 바꾸고나서 실행한다.

첫 번째 실행인 say("soeul")의 경우는 say가 실행 될 때 this에 아무런 setting이 되어있지 않으므로 this는 window객체이다.

두 번째 실행인 say.call(obj, "seoul");의 경우와 세 번째 실행인 say.apply(obj, "seoul")은
this를 obj로 변경시켰으므로 원하는 값이 나온다.

call과 apply의 유일한 차이점은, 첫 번째 인자(this를 대체할 값)를 제외하고, 실제 say에 필요한 parameter를 입력하는 방식이다.
call과는 다르게 apply함수는 두 번째 인자부터 모두 배열에 넣어야 한다.
*/

  const obj = { name: "tom" };
  const say = function (city) {
    console.log(`hello ${this.name}, this is ${city}`);
  };

  // say("seoul");
  // say.call(obj, "seoul");
  // say.apply(obj, ["seoul"]);

  /*
 bind함수는 call, apply와 다른 점은 함수를 실행하지 않는다. 대신 bound함수를 리턴한다. 
 이 bound함수(boundSay)는 이제부터 this를 obj로 갖고 있기 때문에 나중에 사용해도 된다. 
 bind에 사용하는 나머지 rest 파라미터는 call과 apply와 동일하다. 
 */
  const boundSay = say.bind(obj);
  boundSay("busan");
}

// {
//   const obj = { name: "tom" };

//   function foo(a, b, c) {
//     console.log(a + b + c);
//     console.log(this);
//   };
  
//   foo(1, 2, 3); // 6
//   foo.call(obj, 1, 2, 3); // 6
//   foo.apply(obj, [1, 2, 3]); // 6
// }
