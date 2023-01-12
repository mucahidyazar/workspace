//Prototypal Inheritance
// myPerson ==> Person.prototype ==> Object.prototype ==> null

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age}`;
    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}`;
    });
    return bio;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}
const me = new Person("Mucahid", "Yazar", 28, ["Teaching", "Biking"]);

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }

  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}.`;
  }
  getYearsLeft() {
    return 65 - this.age;
  }
}
const employee = new Employee("Mucahid", "Yazar", 28, "Teacher", [
  "Teaching",
  "Biking",
]);

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }
  getBio() {
    return `${this.firstName} is ${this.grade >= 70 ? "passing" : "failing"}`;
  }
  updateGrade(newPoint) {
    this.grade = newPoint;
  }
}
const student = new Employee("Mucahid", "Yazar", 28, "Teacher", [
  "camping",
  "coding",
]);
student.fullName = "Clancey Turner";
console.log(student.getBio());
console.log(student.fullName);
