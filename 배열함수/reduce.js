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

// reduce: 배열 내 요소 값을 확인하며 누적결과를 리턴할 때 사용
// prev: 이전까지의 누적값, curr: 현재확인하는 값
const result = students.reduce((prev, curr) => {
    return prev + curr.score;
},0) // 2번째 인자로 전해지는 값(0)은 init(prev)임

// 215
console.log(result);