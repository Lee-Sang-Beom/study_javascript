{
  async function myAsync() {
    throw "myAsyncError"; // async에서 throw시 rejected상태 promise인스턴스가 반환
    return "done"; // async에서 리턴시 resolve상태 promise인스턴스가 반환
  }

  function myPromise() {
    return new Promise((resolve, reject) => {
      reject("myerror"); // promise에서 reject 수행 시 rejected상태 promise반환
      resolve("done"); // promise에서 resolve 수행 시 resolve상태 promise반환
    });
  }

  // async: promise생성패턴에서 만들었던, promise의 인스턴스가 반환
  const result = myAsync().catch((e) => console.log(e));
  const result2 = myPromise().catch((e) => console.log(e));
}

{
  function wait(sec) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("wait error"); // sec초 후, reject발생
        // resolve('done');
      }, sec * 1000);
    });
  }

  async function myAsync() {
    console.log(new Date(1));
    // 이행되면 다음줄 실행,
    // reject되면 다음줄이 실행되지 않고, reject에 들어있는 값이 throw됨. 따라서 try,catch 사용
    // await wait(3); 에서 기다리는게 reject되면 throw됨. 그럼 throw되는 걸 잡는 건 try,catch
    try {
      await wait(3);
    } catch (e) {
      console.log(e);
    }

    // try-catch로 꼭 하지 않고, await한다고 하지만, catch해도 상관은없음
    // const res = await wait(3).catch(e=>console.log(e));
    // console.log(res); >> catch가 오류를 잡아서, res가 undefined이 될수있음에 주의
    console.log(new Date(1));
  }

  const result = myAsync();
}

// async 함수 내 오타에서 발생한 에러는?
{
  async function myAsync() {
    // async내부의 throw 발생
    consolwweqe.log(new Date(1));
    return 'done'
  }

  // 만약 오타내용을 uncaught없이 잡고싶다면?
  try {
    // 이렇게 사용 시, promise를 반환하니 문제없음
    // myAsync();
  } catch (e) {
    console.log(e);
  }

  // promise가 반환된 것을 catch해야 함
  // myAsync().catch((e) => console.log("error발생! ", e));
}

/* 중요.
 0. async에서 throw시 rejected상태 promise인스턴스가 반환
    async에서 return시 resolve상태 promise인스턴스가 반환
    promise에서 reject 수행 시 rejected상태 promise반환
    promise에서 resolve 수행 시 resolve상태 promise반환
    
 1. await fun()으로 기다리는 중에 promise에서 reject가 발생되면 try-catch로 에러 잡을 수 있음
 2. async 내에서 오타 발생 시, 바로 throw를 날림
   - 맨 위에서 적었듯, async에서 throw시 rejected상태 promise인스턴스가 반환
   - 따라서, try문에서 promise를 받아도 catch가 실행안됨
   - 따라서 이 때는 try-catch문 대신, async fun().catch()를 사용해야함

*/
