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

// map: 배열 내 요소 하나하나에 대해 그 요소값을 새 값으로 변환
// 변환된 값들만 리턴
const result = students.map(student => {
    return student.age*2;
})

// [ 58, 56, 36 ]
console.log(result);