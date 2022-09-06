class Students {
    constructor(name, age, enrolled, score) {  
        this.name=name;
        this.age=age;
        this.enrolled=enrolled;
        this.score=score;
    }
}

const students = [
    new Students('A', 29, false, 45),
    new Students('B', 28, true, 90),
    new Students('C', 18, true, 80),
]

// quiz: 학생 점수를 정렬하고 string으로 변환해서 반환
const result = students.map((student) =>{
    return student.score;
}).sort((a,b) => {
   return b-a
}).join(' -> ');

// map으로 점수만 뽑고
// sort로 내림차순 (b-a) | 오름차순(a-b)
// join으로 배열들을 -> 로 구분해 문자열로 만듬

console.log(result);