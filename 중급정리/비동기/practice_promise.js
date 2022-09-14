"use strict";

const fetchNum = new Promise((resolve, reject) => {
  setTimeout(() => {resolve(1);}, 1000);
});

// 성공 시(1초후) resolve가 호출되면 state : pending->fulfilled 가 되며, result :  resolve로 전달한 값이 부여
fetchNum
  .then((val) => val = val * 3)
  .then(val => val*2)
  .then((val) => console.log(val));
