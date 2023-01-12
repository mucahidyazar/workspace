class Person {
    constructor(name, age) {
        this.age = age,
        this.name = name
    }

    getDesription(){
        return `Hello. I am ${this.name} and I am ${this.age} years old.`
    }
}

class Student1 extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    getGreeting() {
        return ('Hello. I am ' + this.name + ' and I am ' + this.age + ' years old. I am coming from ' + this.location + '.')
    }
}

class Student2 extends Student1 {
    constructor(name, age, location, university) {
        super(name, age, location);
        this.university = university;
    }
    getInformation() {
        return ('Hello. I am ' + this.name + ' and I am ' + this.age + ' years old. I am coming from ' + this.location + '. I am studying at the ' + this.university + ' of ' + this.location + '.')
    }
}

const person = new Person('Mucahid Yazar', 28);
console.log(person.getDesription());

const student1 = new Student1('Furkan Yazar', 23, 'Istanbul');
console.log(student1.getGreeting());

const student2 = new Student2('Talha Yazar', 26, 'Istanbul', 'Sakarya University');
console.log(student2.getInformation());