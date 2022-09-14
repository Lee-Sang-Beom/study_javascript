class Students {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Students('A', 29, false, 45),
    new Students('B', 28, true, 90),
    new Students('C', 18, true, 80),
];

// 배열 전체를 돌며, 특정 값을 포함하는 배열요소를 '모두' 가져오는 것이 특징
// find() 는 최초 1개만 return

const result = students.filter((student) => {
    return student.enrolled === true;
})

/*
[
  Students { name: 'B', age: 28, enrolled: true, score: 90 },
  Students { name: 'C', age: 18, enrolled: true, score: 80 }
]
*/
console.log(result);