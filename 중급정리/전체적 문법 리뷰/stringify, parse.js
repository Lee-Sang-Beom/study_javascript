const obj = {
    x:5,
    y:10
}

// 자바스크립트 값이나, 객체를 JSON 문자열로 변경한다.
const obj2 = JSON.stringify(obj);
console.log(obj, obj2);

// JSON 문자열을 자바스크립트 값이나 객체로 변경한다.

const revertObj = JSON.parse(obj2);
console.log(obj2, revertObj);

