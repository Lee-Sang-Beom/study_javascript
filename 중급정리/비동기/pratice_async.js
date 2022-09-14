'use strict'

function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve,ms));
}
async function getApple(){
    await delay(1000);
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return "banana";
}

async function pick(){
    const aPromise = getApple(); // 사과와 바나나를 동시에..! 병렬로
    const bPromise = getBanana();

    const apple = await aPromise;
    const banana = await bPromise;
    // const apple =  await getApple();
    // const banana =  await getBanana();
    return `${apple}, ${banana}`;
}


function pickAll() {
  return Promise.all([getApple(), getBanana()]). // getapple,getbanana의 promise배열을 전달하고, 얘네 결과를 다 받아내면,  2개 과일의 배열을 얻음
  then((fruits) => // 배열을 string으로 묶는 join으로 묶음 (기호는 +)
    fruits.join(" + ")
  );
}

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]); // 가장 먼저 값을 리턴한 것만 전달
}

pickOnlyOne().then(console.log);