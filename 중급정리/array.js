{
    // 1. join() : 배열 원소를 string으로 반환. (구분자 존재)
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' + '); 
    console.log(result);
}

{
    // 2. split() : string을 배열로 반환. (구분자를 기준으로)
    // const fruits = `apple-banana-orange`;
    // const result = fruits.split(`-`,2); // 2번째 파라미터 limit을 넣으면, 앞 2개만 반환
    // console.log(result);
}

{
    // 3. reverse() : 배열 자체를 reverse시킴 
    // const arr = [1,2,3,4,5];
    // const result = arr.reverse();
    // console.log(result, arr);
}

{
    // 4. splice(a,b) : index a~b의 원소를 삭제함. 그리고 삭제된걸 반환 (원래배열에도 적용)
    // const arr = [1,2,3,4,5];
    // const result = arr.splice(2,4); // 원래배열은 index 2,3,4가 빠짐(마지막것도 포함)
    // console.log(result, arr);

    // 5. slice(a,b) : index a~b의 원소를 원래배열 영향없이 잘라서 가져옴
    // const arr= [1,2,3,4,5];
    // const result = arr.slice(2,4); // 마지막 4번째 인덱스 미포함
    // console.log(result,arr);    
}

{
    class Students {
        constructor(name, age, enrolled, score){
            this.name = name;
            this.age = age;
            this.enrolled = enrolled
            this.score = score;
        }
    }

    const students = [
        new Students('A', 29, false, 45),
        new Students('B', 28, true, 90),
        new Students('C', 18, true, 80),
    ];

    // 6. find() : 최초로 value값 내 true인 요소를 찾고 바로 return 
    // const result = students.find((value)=>{
    //     return value.score === 90;
    // })
    // console.log(result);

    // 7. filter() : 배열 전체를 돌며, 특정 값을 포함하는 배열요소를 '모두'가져옴. 위 find는 최초1개만 받아옴
    // const result = students.filter((student)=> student.enrolled);
    // console.log(result);

    // 8. map() : 배열 내 요소 하나하나를 보고, 그 요소값을 새로운 값으로 변환하기 위한 방법을 고려할 때 사용
    // const result = students.map((student) => student.age * 2); // 배열 내 특정요소에 *2한 후, 그것만 반환
    // console.log(result);

    // 9. some() : 배열 내 요소에서 특정요소가 하나라도 n보다 작을 때를 검사하여 boolean값을 반환할 때 사용가능
    // const result = students.some((student) => {
    //     return student.score <= 50;
    // })
    // console.log(result);

    // 10. every() : 배열 내 모든 요소가 return의 조건문을 만족하면 true 반환 
    // const result = students.every((student) => {
    //     return student.score <= 50;
    // })
    // console.log(result);

    // 11. reduce() : 배열 내 모든 값을 확인하면서, 누적된 결과값을 리턴할 때 사용, reduceRight()는 방향이 반대로
    // const result = students.reduce((prev, curr)=>{ 
    //     return prev + curr.score; // 0 + 45 > 45 + 80 > 125 + 90 = 215 
    // },0) // initial(prev) 값이 0으로 시작. (0부터 시작함)
    // console.log(result);

    // 12. quiz : 점수를 반환하고, 50점이상인 점수만 그걸 문자열로 합치기
    // const result = students
    //   .map((student) => student.score)
    //   .filter((student) => student >= 50)
    //   .join(" -> ");
    // console.log(result);
 

    // 13. sort() : 학생 점수를 정렬한 후, string으로 변환
    // const result = students
    //   .map((student) => student.score)
    //   .sort((a, b) => b - a) // 두개가 전달되는데, b-a처럼하면 내림차순
    //   .join("-"); // 문자열로
    // console.log(result);

}