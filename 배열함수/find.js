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

// find() : 최초로 value값 내 true인 요소를 찾고 바로 return!
const result = students.find(student => {
    return student.score === 90;
})

// Students { name: 'B', age: 28, enrolled: true, score: 90 }
console.log(result);