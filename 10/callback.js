'use strict';

// 1. JavaScript is synchronous (동기적인 아이)
// 코드가 hoisting 된 이후부터 나타나는 순서 그대로 동기적으로 시행
// hoisting : var, function의 선언들이 제일 위로 올라가는 것

// function _4()
// {
//     console.log('4');
// }

console.log('1');
setTimeout(() => console.log('4'),1000); // setTimeout(_4,1000); 와 동일

// 지정한 시간이 지나면, 콜백함수를 호출하도록 하는 브라우저 API
// 브라우저에게 먼저 요청을 보내는 API인 것임. 
// 브라우저에서 1초가 지나면 콜백함수 실행.
// 정리) 지금당장실행하지않고, 나중에 1초가 지난 후 내 함수를 다시 불러줘(CALL)의 의미로, 전달한 함수가
  //     콜백함수
console.log('2');
console.log('3');


// 2. 콜백도 두가지의 경우로 나뉩
  
// synchronous callback (즉각 동기적 콜백)

function printImmediately(print) // 함수의 선언은 hoisting이 되어 맨 위로..
{
    print(); // 즉각실행. 내가 직접실행해야 하므로 ()까지

    //function ??? () {
    //    console.log('hello');
    //}
}
printImmediately(() => console.log('hello'));


// asynchronous callback (나중에 언제실행될 지 예측 불가한 콜백)

function printDelay(print,timeout) {//얼마정도 타임아웃할건지 ms로 전달받음

    setTimeout(print,timeout); // 전달받은 print와 timeout을 그냥 settimeout으로 브라우저에게 요청
                               // timeout 시간이 지나면, print함수 실행요청
                               // 실행하라고 timeout 후 요청이 오니, print()가 아님에 주의
                               
    // setTimeout(() => console.log('async_callback'),timeout); 
}

printDelay(() => console.log('async_callback'),2000); 
// settimeout 자체가 콜백함수를 전달하는 모습이므로 함수에 전달하는 파라미터를 콜백의 모습으로



// ==========================================================================================
// 3. 콜백지옥
// 사용자의 데이터를 서버에게서 받아오는 클래스작성
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if ((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy'))
            {
                onSuccess(id); // 위 조건 만족시, onsuccess라는 콜백함수를 불러줌. id를 전달해줌
            }

            else{
                onError(new Error('not found')); // 에러면 onError 함수 실행해, 에러라는 오브젝트를 만들어 전달
            }

        },2000) // loginuser 함수 호출 시, 2초 후의 위 코드들이 실행됨
    }
    // id,pw를 받아오고, 
    // 로그인 정상 시, onSuccess라는 콜백함수를 사용자 데이터와 함께 호출
    // 실패하면 onError 하는 함수

    getRoles(user, onSuccess, onError){ // 함수 호출 후, 1초이후에 실행된다.
        setTimeout(()=>{
        if(user === 'ellie'){
            onSuccess({name : 'ellie', role : 'admin'});
        }

        else {
            onError(new Error('not access')); // print(object) 의 느낌임
        }

    },1000);
    // user의 데이터를 받아, 사용자 마다 가지고있는 역할들을 서버에게 다시 요청해서 정보를 받는 api
    // 정보를 잘 받아오면 onSuccess를 사용자 역할과 함께 호출
    // 실패하면 onError를 호출
}

}

const UserStorages = new UserStorage();

const id = prompt('enter your id');
const password = prompt('enter your pw');

UserStorages.loginUser(
    id,
    password,
    // onSuccess 함수를 정의한다. 파라미터로는 user를 받음! 
    (user) => {
        UserStorages.getRoles(
            user,
            (userWithRole)=>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`);
            },
            (error)=>{
                console.log(error); // 리턴받은 걸 출력
            }
        )
    },
    // onError 함수를 정의한다. 파라미터로는 errorr를 받음! 
    (error) => {console.log(error)} // 전달받은 파라미터 그냥 출력
)

