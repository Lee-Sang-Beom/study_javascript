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

// some: 배열 내 요소에서 특정요소가 하나라도 n보다 작을때를 검사
// boolean값 반환 : 만약 특정요소가 하나라도 true면 true반환
const result = students.some(student => {
    return student.age < 20;
})

// true
console.log(result);