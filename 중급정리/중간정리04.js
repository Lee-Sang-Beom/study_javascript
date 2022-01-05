'use strict'

let desc = 'ABCDEFG'
console.log(desc.length);
console.log(desc.slice(0,3));
console.log(desc.slice(4)); // 이건 인덱스 4부터 출력
console.log(desc.substring(1,3));  // slice, substring 모두 각 인덱스 사이 값 반환

console.log(desc.substr(2,3)); // 인덱스 2부터 3개 가져옴


let desc2 = ` coding   `;
console.log(desc2.trim()); // 공백 제거
console.log(desc.repeat(2)); // n번 반복

console.log("a".codePointAt(0)); // a에 해당하는 아스키코드 얻음
console.log(String.fromCodePoint(97)); // 97 아스키코드에 해당하는 문자 출력


let list = ["01. 들어가며", "02. JS의 역사", "03. 자료형", "04. 함수", "05. 배열"];
let newList = [];

for (let i = 0; i<list.length; i++){
    newList.push(list[i].slice(4)); // 숫자빼고 문자열만
}

console.log(newList);

function hasCola(str){
    // if(str.indexOf('콜라') > -1) 이렇게 인덱스가 -1보다 큰지 출력하는 방법이 있음
    // {
    //     console.log('금칙어 : 콜라 가 있습니다.');
    // }

    
    if(str.includes('콜라')) //만약 콜라가 str에 포함된다면? 야호!
    {
        console.log('금칙어 : 콜라 가 있습니다.');
    }
    else{
        console.log('금칙어가 없습니다');
    }
}

hasCola("콜라안녕난상범이야");

//console.log(fruits3.indexOf('바나나')); //제일앞에있는 인덱스 출력
//console.log(fruits3.lastIndexOf('바나나')); // 제일뒤에있는 인덱스 출력

