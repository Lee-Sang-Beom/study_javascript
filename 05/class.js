'use strict';

// 1. class?
// class는 템플릿(틀)에 속함. 실제로 데이터를 넣으면 Object..!!


class Person{
    constructor(name, age) //생성자
    {
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name} : hello`);
    }
}

const ellie = new Person('ellie',20);
ellie.speak();

// 2. getter setter?

class User{

    #end=32;
    constructor(firstName, lastName, age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age()
    {
        return this._age;
    }

    set age(value){
        if(value<0)
        {
            this._age = 0;
        }

        this._age = value < 0 ? 0 : value; //value를 age에 할당할때 setter를 호출. 이게무한반복
         // 그래서 this.age가 아니라, getter와 setter에서 쓰이는 변수에 차별을줌
    }
}

const user1 = new User('steve','job',-1);
console.log(user1.age);
console.log(user1.end);

// 3. public, private

class Experiment{
    //생성자를 사용하지않고 필드적용가능
    publicField = 2; // public필드
    #privateField = 0; // #사용시 클래스 내부에서만 접근되는 private
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. static

  // static 은 오브젝트에 붙은 값이 아님.
  // 대신 클래스에 붙은값임

class Article{
    static publisher = 'dream';
    constructor(articNumber){
        this.articleNumber = articNumber;
    }

    // static printPublisher(){
    //     console.log(Article.publisher);
    // }

    static printPublisher = () => console.log(Article.publisher);
}
const a = new Article(9);
const b = new Article(10);
console.log('object 출력 : '+ a.publisher); // undefine. 오브젝트에서 호출x
console.log('class 출력: '+ Article.publisher); 
Article.printPublisher();

// 5. 상속과 다형성
class shape{
    constructor(width, height, color)
    {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw()
    {
        console.log(`drawing ${this.color} color of`);
    }

    // 이건 왜안되지 getArea = () => this.width * this.height;
    getArea()
    {
        return this.width * this.height;
    }
}

class rectangle extends shape{

}

class triangle extends shape{
    
    draw()
    {
        super.draw();
        console.log('tri');
    }
    getArea()
    {
        return (this.width * this.height) / 2; // 오버라이딩
    }
    //getArea = () => this.width * this.height / 2;

    toString()
    {
        return `this is triangle`;
    }
}

const rect = new rectangle(20,30,'blue');
const tri = new triangle(30,20,'red');
console.log('========================');
rect.draw();
tri.draw();
console.log(rect.getArea());
console.log(tri.getArea());

// 6. instanceOf

console.log(rect instanceof rectangle); //rect라는 오브젝트는 rectangle 클래스의 인스턴스인가?
console.log(tri instanceof rectangle);
console.log(tri instanceof triangle);
console.log(tri instanceof shape);
console.log(tri instanceof Object);
console.log(tri.toString());
console.log(tri); // 속성들 출력
