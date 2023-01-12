//DECORATORS leri kullanacaksak
//target es6 olmali
//"experimentalDecorators": true OLMALI

//Decorator ler function olarak tanimlaniyor ve genellikle buyuk harfle baslarlar
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

// Logger decoratoru kendisinden sonra gelen class i yazdirir
@Logger
class Person1 {
  name = "Max";

  constructor() {
    console.log('Creating person pbject1...');
  }
}
const pers1 = new Person1();





//VALUE ile birlikte declorator kullanimi
//Bu sekilde decloratorleri daha guclu bir sekilde kullanabiliriz.
function Logger2(value: string) {
  return (constructor: Function) => {
    console.log(value);
    console.log(constructor);
  }
}
@Logger2("Mucahid")
class Person2 {
  name = "Max";

  constructor() {
    console.log('Creating person pbject2...');
  }
}
const pers2 = new Person2();




// _ koyarak constructoru yani class i onemsemedigimizi gozardi ettigimizi soyluyoruz.
function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  }
}
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person3 {
  name = "Max";

  constructor() {
    console.log('Creating person pbject3...');
  }
}
const pers3 = new Person3();


// Veya constructoru kullanarak classa erisir ve icinden name i aliriz. 
// Any yazmamizin sebebi function olursa .name yazip secemeyiz.
// constructoru bir lcass gibi dusunup once new ile bir degiskene atayip sonra kullaniriz asagidaki gibi.
function WithTemplate2(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const pers = new constructor();
    if (hookEl) {
      hookEl.innerHTML = pers.name;
    }
  }
}
@WithTemplate2("<h1>My Person Object</h1>", "app")
class Person4 {
  name = "Max";

  constructor() {
    console.log('Creating person pbject4...');
  }
}
const pers4 = new Person4();






























