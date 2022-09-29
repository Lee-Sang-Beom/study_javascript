// promise는 동기적 실행이 아니므로, try-catch로 예외처리를 하지 않는다.
// promise에서, 비동기처리 실패 시, reject문을 사용한다.
{
  function wait(sec) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("error");
      }, sec * 1000);
    });
  }

  // wait 내, setTimeout은 webapi실행후, 콜백 큐에 ()=>reject()가 들어가고, 콜스택이 비었을 때 콜백함수가 실행됨
  // 따라서, waite(3)이 실행될 시점에 오류를 잡는게아니라 x
  //   try{
  //     wait(3);
  //   } catch(e){
  //     console.log(e);
  //   }
}

// then을 사용해 에러처리
{
    function wait(sec) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            reject("error");
          }, sec * 1000);
        });
      }

    // wait(1).then(
    //     (res) => {
    //         console.log(res)
    //     }, (rej) => {
    //         console.log('error1 : ', rej);
    //     }
    // ).catch(e=>console.log('error2 : ', e)); 
    // catch는 실행되지 않음. 앞의 내용에서 오류가 발생해야 실행 
    // 하지만, wait 함수의 에러는 then의 2번째 인자인 reject 콜백함수에서 정상처리했으니.

    wait(1).then(
        (res) => {
            console.log(res);
        }, (rej) => {
            console.log('error1 : ', rej);
            throw new Error(rej);
        }
    ).catch(e=>console.log('error2 : ', e)); 
    // catch가 실행되게끔하려면, then의 두번째인자인 콜백함수에서 throw

    
}


// catch을 사용해 에러처리
{
  function wait(sec) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("error");
      }, sec * 1000);
    });
  }

  // promise는 체인형태로 후속처리 메서드를 사용할 수 있음.
  // 하지만, catch는 체인형태로 실행되지 않음
  
  // then은 계속 사용해도 항상 promise객체를 반환한다.
  // 하지만, 첫번째 함수실행으로 나온 promise는 생성자 내, 콜백함수의 실행문으로 나온 promise이고,
  // catch 실행으로 나온 promise는 catch 자체의 행위가 제대로 됐는지를 나타내는 promise이다.

  // 다음 체인을 위해서는 1번째 함수실행으로 나온 promise에 catch를 붙여야한다.
  // catch()가 바라보는 건, 앞에 있는 메소드로부터 예외가 발생했는지를 바라보기 때문임
  // wait(3).catch(e => console.log('1st catch', e));

  // 앞선 catch는 에러를 받아 처리한 정상적인 동작을 했으니, 다음 catch가 진행되지 않은거임
  // wait(3).catch(e => console.log('1st catch', e)).catch(??);

  // 만약, catch를 연쇄적으로 사용하려면, 다음과 같이 캐치 문 내에 throw를 넣어야함
//   wait(3).catch(e => {
//     console.log('1st catch', e);
//     throw e;
//   }).catch(e=>{
//     console.log('2st catch', e);
//   });


}
