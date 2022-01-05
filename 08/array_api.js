'use strict';

// 01. 배열의 요소를 모두 연결해 string으로! 
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(', '); //구분자 전달!
    console.log(result);
}

// 02. 주어진 string을 array로!
{
    const fruits = 'apple, banana, orange';
    const result = fruits.split(', ', 3); // separate [구분자] 기준으로 끊음
    console.log(result);                 // 두 번째 파라미터는 첫번째 n개를 배열로 전달한다는 뜻
}

// 03. 배열을 거꾸로
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.reverse();

    console.log('원래배열 : ' + fruits); // 본래 배열도 reverse됨
    console.log('reverse 결과배열 : ' + result); 
}

// 04. 특정 인덱스의 요소를 제외한 새로운 배열 생성
{
    const array = [1,2,3,4,5];
    const result = array.slice(2,5); // index 2부터 index 4까지
    
    console.log('원래배열 : ' + array);  // 복사된 것이므로 남아있음.
    console.log('slice 결과배열 : ' + result);  
    // splice는 본래 것을 잘라서 갖고오지만, slice는 일정부분을 복사해간다 이해 
}


class Student{
    constructor(name, age, enrolled, score)
    {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A',29, true, 45),
    new Student('B',28, false, 80),
    new Student('C',30, true, 90),
    new Student('D',40, false, 66),
    new Student('E',18, true, 88),
]

// 05. 90점인 학생만
{
   
    const result = students.find(function(student, index) { // student (this임)
        
        return student['score'] === 90;
        
         // 배열의 모든 요소마다 호출이 한번씩 되는데,
         // 이 callback 함수가 return을 true로 하게되면, find 메소드가 멈춤.
         // 그리고, 이 student 요소를 리턴
    });

    //아래는 같은문장
    //const result = students.find((student, index) => student.score === 90)
//arrow function 사용 시, 한 문장이면 {} 생략가능, return 생략가능, ; 생략가능
    console.log(result);    
}


// 06. 수업에 등록한(true) 학생만 배열로 전체반환
{
    const result = students.filter((student) => student.enrolled)
    console.log('필터 ', result); // 필터를 이용해 리턴값이 true인 원하는 것만!
}

// 07. 점수만 들어있는 새로운 배열 생성 : map 
{
    const result = students.map((student) => student.score *2) 
    
    console.log(result); // 필터를 이용해 리턴값이 true인 원하는 것만!
}

// 08. 학생 중, 50점보다 낮은 점수가 있는지 없는지 확인
{
    //some : 배열요소중에 callback 함수가 리턴이 true가 되는 요소가 있는지 확인한다. 
    const result = students.some((student) => student.score < 50) 
    // 한명이라도 있으면 바로 true 반환
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50)
    // 모두가 이 조건을 만족해야만 true반환
    console.log(result2); // 문제는 50보다 낮은점수가 있는지를 확인하는것이니 true를 반환해야하는것임.
}


// 09. 학생들 평균점수를 구해옴
{
    //계속 배열내 요소를 보면서, 반복할건데 curr은 현재보는 것, prev는 이전의 curr사이클이었던것
    //원하는 시작점으로부터 계속 요소를 돌며, 어떤값을 누적할때씀
  
    const result = students.reduce((prev, curr) => {
        return prev + curr.score;
    },0);
    console.log(result/students.length);

    //const result = students.reduce((prev,curr) => prev+curr.score, 0)

    // const result = students.reduceRight((prev, curr) => {
    //     return prev + curr.score;
    // },0);
}


// 10. 학생들 모든 점수를 스트링으로
{
    //const result = students.map((student) => student.score).join('->');
    const result = students.map((student) => student.score).filter((score) => score >= 50).join(' -> ');
    // 점수만을 갖는 배열로 반환하고, 그것중 50점 이상만을 필터링한 배열을 만들어 문자열로만듬
    
    console.log(result);  
    
}

// 11. 학생들 모든 점수를 정렬
{
    const result = students.map((student) => student.score).sort();
    //반대로 하려면 sort((a,b) = >b-a);
    
    console.log(result);
}