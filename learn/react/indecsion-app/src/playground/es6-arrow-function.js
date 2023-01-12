function square(x) {
    return x * x;
};
console.log(square(3));

const square1 = function (x) {
    return x * x;
};
console.log(square1(3));

const squareArrow = (x) => {
    return x*x;
}
console.log(squareArrow(3));

const squareArrow2 = (x) => x*x;
console.log(squareArrow2(3));


const arrowFunction1 = (fullName) => {
    const firstName = fullName.split(' ')[0];
    return firstName;
}
console.log(arrowFunction1('Talha Yazar'));

const arrowFunction2 = (fullName) => fullName.split(' ')[0];
console.log(arrowFunction2('Mucahid Yazar'))