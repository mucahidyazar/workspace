//OLD WAY
// function userCreater(name, score) {
//   const newUser = Object.create(userFunctionStore);

//   newUser.name = name;
//   newUser.score = score;
//   return newUser;
// }

// const userFunctionStore = {
//   increment: function () {
//     this.score++;
//   },
//   login: function () {
//     console.log("You are loggedin");
//   },
// };
// userFunctionStore.decrement = function () {
//   this.score--;
// };

// const user1 = userCreater("Mucahid", 5);
// user1.increment();
// console.log(user1);

//

//

//

// const userCreater = function (name, score) {
//   const newUser = Object.create(userFunctions);
//   newUser.name = name;
//   newUser.score = score;
//   return newUser;
// };

// const userFunctions = {
//   sayName: function () {
//     console.log(this.name);
//   },
//   increment: function () {
//     this.score++;
//   },
// };
// const user1 = new userCreater("Mucahid", 5);
// user1.sayName();

// const paidUserCreater = function (paidUser, paidScore, accountBalance) {
//   const newPaidUser = userCreater(paidUser, paidScore);
//   Object.setPrototypeOf(newPaidUser, paidUserFunctions);
//   newPaidUser.accountBalance = accountBalance;
//   return newPaidUser;
// };

// const paidUserFunctions = {
//   increaseBalance: function () {
//     this.accountBalance++;
//   },
// };

// Object.setPrototypeOf(paidUserFunctions, userFunctions);

// const paidUser1 = new paidUserCreater("Alay", 25, 100);
// console.log(paidUser1);
// paidUser1.increaseBalance();
// console.log(paidUser1);

// const userCreater = function (name, score) {
//   this.name = name;
//   this.score = score;
// };
// userCreater.prototype.sayName = function () {
//   console.log(this.name);
// };
// userCreater.prototype.increment = function () {
//   this.score++;
// };
// const user1 = new userCreater("Mucahid", 10);
// console.log(user1);
// user1.increment();
// console.log(user1);

// const paidUserCreater = function (paidName, paidScore, accountBalance) {
//   userCreater.call(this, paidName, paidScore);
//   //userCreater.apply(this, [paidName, paidScore]);
//   this.accountBalance = accountBalance;
// };
// paidUserCreater.prototype = userCreater.prototype;
// paidUserCreater.prototype.increaseBalance = function () {
//   this.accountBalance++;
// };
// const paidUser1 = new paidUserCreater("Alay", 5, 100);
// console.log(paidUser1);
// paidUser1.increaseBalance();
// paidUser1.sayName();
// console.log(paidUser1);

// class userCreater {
//   constructor(name, score) {
//     this.name = name;
//     this.score = score;
//   }
//   sayName() {
//     console.log(`I am ${this.name}`);
//   }
//   increment() {
//     this.score++;
//   }
// }
// const user1 = new userCreater("Mucahid", 5);
// console.log(user1);
// user1.increment();
// console.log(user1);

// class paidUserCreater extends userCreater {
//   constructor(paidName, paidScore, accountBalance) {
//     super(paidName, paidScore);
//     this.accountBalance = accountBalance;
//   }
//   increaseBalance() {
//     this.accountBalance++;
//   }
// }
// const paidUser1 = new paidUserCreater("Alay", 5, 50);
// console.log(paidUser1);
// paidUser1.sayName();
// paidUser1.increaseBalance();
// console.log(paidUser1);
