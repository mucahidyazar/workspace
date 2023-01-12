function power(par1, par2) {
  if (par2 === 0) return 1;

  return par1 * power(par1, par2 - 1);
}
console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));

//

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(4)); //24
console.log(factorial(7)); //5040

//

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}
console.log(productOfArray([1, 2, 3])); //6
console.log(productOfArray([1, 2, 3, 10])); //60

//

function recursiveRange(num) {
  let total = 0;
  if (num === 0) return total;
  total = num + recursiveRange(num - 1);
  return total;
}
console.log(recursiveRange(6)); //21
console.log(recursiveRange(10)); //55

//

function fib(num) {}
console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));

//

//

//

//POWER SOLUTION
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
//FACTORIAL SOLUTION
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}
//PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
//RECURSIVE RANGE SOLUTION
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}
//FIBONACCI SOLUTION
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
