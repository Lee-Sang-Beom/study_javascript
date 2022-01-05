'use strict';


class UserStorage{
    loginUser(id, password){

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy'))
                {
                    resolve(id); // 위 조건 만족시, onsuccess라는 콜백함수를 불러줌. id를 전달해줌
                }

                else{
                    reject(new Error('not found')); // 에러면 onError 함수 실행해, 에러라는 오브젝트를 만들어 전달
                }

            },1000)
        })

    }
    // id,pw를 받아오고,
    // 로그인 정상 시, onSuccess라는 콜백함수를 사용자 데이터와 함께 호출
    // 실패하면 onError 하는 함수

    getRoles(user){ // 함수 호출 후, 1초이후에 실행된다.
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                if(user === 'ellie'){
                    resolve({name : 'ellie', role : 'admin'});
                }

                else {
                    reject(new Error('not access')); // print(object) 의 느낌임
                }

            },1000);
        })
    // user의 데이터를 받아, 사용자 마다 가지고있는 역할들을 서버에게 다시 요청해서 정보를 받는 api
    // 정보를 잘 받아오면 onSuccess를 사용자 역할과 함께 호출
    // 실패하면 onError를 호출
}

}

// 콜백지옥 해결~!!
const UserStorages = new UserStorage();

const id = prompt('enter your id');
const password = prompt('enter your pw');

UserStorages.loginUser(id, password)
    .then((user) => UserStorages.getRoles(user))
    .catch((error)=>console.log(error))
    .then((user) => alert(`Hello ${user.name}, you have a ${user.role}`))
    .catch((error)=>console.log(error));

// 전달되는 value값이 하나면 이렇게 생략가능 wow! 
// UserStorages. 
//     loginUser(id, password)
//     .then(UserStorages.getRoles) 
//     .catch(console.log)
//     .then((user) => alert(`Hello ${user.name}, you have a ${user.role}`))
//     .catch(console.log);




// loginuser 함수실행 -> 정상수행 시, user value를 받아와서 getRoles 함수를 user 넣어서 수행
// 그게 또 잘되면, user넣어서 이름이정의되지 않은 함수 수행. alert 됨. 이건 예외상황 고려 x



function add(x) {
    return new Promise((resolve, reject) => {
        let sum = x + x;
        console.log(sum);
        resolve(sum);
    })
}

add(2).then(result => {
    add(result).then(result => {
        add(result).then(result => {
            console.log('finish!!');
        })
    })
})

//add(2).then((result) => add(result).then((result)=>add(result).then((result)=>(result)=>console.log(result))));