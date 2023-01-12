//DECORATORS leri kullanacaksak
//target es6 olmali
//"experimentalDecorators": true OLMALI

function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log('Creating person pbject...');
  }
}
const pers = new Person();
console.log(pers);