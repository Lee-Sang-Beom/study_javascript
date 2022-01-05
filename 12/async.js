'use strict';



// async & await : 깔끔하게 promise를 사용할 수 있는 방법
// 기존에 존재하는 것 위에 혹은 이를 감싸서 조금 더 간단하게 API를 쓸 수 있도록 한 것 : Syntactic sugar
// async는 기존에 존재하는 promise위에 좀 더 간편한 api를 제공


// 1. async 써보기
// 상황 : 사용자 데이터를 백엔드에서 받아오는 함수.. (10초정도 걸리는 코드라고 가정)
// function fetchUser(){
//     return new Promise((resolve, reject) => {
//         // return 'ellie'; //resolve와 reject를 호출하지않고 리턴하면, promise가 pending상태가 되었다함
//         //지금은 resolve와 reject를 호출하지않았기에 계~속 pending 상태가됨
//         resolve('ellie'); // resolve 사용 시 fulfilled
//     })

//     // return 'ellie';
//     // 뭔가 오래걸리는 코드를 비동기적 처리를 하지않으면, 이전 한 줄이 끝나야 다음줄이 시작됨
//     // 텅텅 빈 웹페이지만 볼 수도 있음. 
//     // 10초가 지나면 사용자 이름을 받아옴.
// }

// const user = fetchUser(); 
// user.then((value)=>console.log(value));
// //console.log(user); 

async function fetchUser(){ 
    // async라는 키워드를 쓰면 promise 쓰지 않아도, 자동적으로 함수 안 내용들이 promise로 변환
    return 'ellie';
}

fetchUser().then((Value)=>console.log(Value));




// 2. await 써보기

function delay(ms)
{
    return new Promise((resolve,reject) => setTimeout(resolve, ms));
    // delay 함수는 promise를 리턴하는데, 정해진 ms가 지나면, resolve를 호출
}

async function getApple()
{
    await delay(2000); //await 키워드는 async가 붙은 함수 안에서만 씀
    //await를 쓰면, delay(3000);가 끝날 때 까지 기다림. 3초있다 사과 출력됨
    return('사과');
}

async function getBanana()
{
    await delay(1000); // 얘도 3초있다가 바나나리턴
    return '바나나'; // promise를 리턴함
}



// 이렇게 하면, apple을 string 으로 출력 불가
// function pickFruit(){
//     return getApple().then((apple)=>getBanana()).then((banana)=>`(${apple} + ${banana})`);
// }

// function pickFruit(){
//     return getApple().then((apple) => {
//         return getBanana().then((banana)=> `${banana} + ${apple}`); // 바나나+사과
//     })
// } 이러면 실행은 되는데, 너무 복잡해보임..






// async function pickFruit(){
//     const apple = await getApple(); // 비동기인 async 속에서, 이 getapple()이 끝나기까지 기다리고 다음줄수행.
//     // 왜냐하면 바로바로 넘어가면 return시, delay(3000) 기다려야하는데 넘겨받은 값이없어서 이상한값나옴
//     const banana = await getBanana();
//     return `${apple}, ${banana}`;
// }

// 개선이 필요. 병렬처리로





// 3. 병렬처리


// async function pickFruit(){

//     const applePromise = getApple(); // 사과의 promise만듬
//     // 바로 만들면 promise 내 코드블록은 바로실행됨을 이용
//     const bananaPromise = getBanana(); // 바나나의 promise 만듬

//     //이렇게하면, 각자호출한 함수 내에서 3초를 쓰지, 3초를쓰고 또 뒤에 3초를 또 기다리지 않음
//     //그렇기에 만들자마자, 각각 병렬적으로 각 자신의 함수내에서 3초를 기다림
//     //단, 사과를 만드는데 바나나가 필요없고, 바나나 만드는데 사과가 필요없기에 가능

//     const apple = await applePromise; // 단순대입까지만 기다려줌
//     const banana = await bananaPromise;

//     // getapple, getbanana는 await이 아니라, 서로 기다리지않음.
//     return `${apple}, ${banana}`;
// }


// pickFruit().then((value) => console.log(value));


// 4. 위의 병렬처리도 좀 더럽다. 간편하게>>promise에서 제공하는 함수
function pickAllFruits()
{
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(', ')); // 배열의 요소를 모아 스트링으로.
    // promise 배열을 전달하면(꼭 배열을전달), 모든 promise들이 병렬적으로 다 받을때까지 모아주는 함수 
}

pickAllFruits().then((result)=>console.log(result));

// 5. 먼저 따지는 첫번째 과일만 받아옴
function pickOnlyOne()
{
    return Promise.race([getApple(), getBanana()])
    // 가장 먼저 값이 return 된 프로미스만 전달
}

pickOnlyOne().then((result)=>console.log(result));