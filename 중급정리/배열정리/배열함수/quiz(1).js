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

// quiz: 각 학생의 점수를 일단 반환하고, 50점 이상인 점수만 문자열로 합치기
const result = students.map((student) =>{
    return student.score;
}).filter((score) => {
    return score >= 50;
}).join(', ');

// map으로 점수만 뽑고
// filter로 50점 이상인 점수만 반환하고
// join으로 배열들을 , 로 구분해 문자열로 만듬

console.log(result);