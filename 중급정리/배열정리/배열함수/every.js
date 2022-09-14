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

// every: 배열 내 요소에서 특정요소가 모두 n보다 작을때를 검사
// boolean값 반환 : 만약 특정요소가 모두 true여야 true반환
const result = students.every(student => {
    return student.age < 20;
})

// false
console.log(result);