const person = {
    name: 'Anrew',
    age: 28,
    location: {
        city: 'Istanbul',
        temp: 92
    }
}

const { name, age } = person;
const [ city, temp ] = person.location;
console.log(name);
console.log(age);
console.log(city);
console.log(temp);


//Bu sekilde tanimlama yaparakda istedigimiz sekilde cagirabiliriz destructiring tanimlamalarini.
//Artik temp i cagirmak yada kullanmak istersek bu tanimdan sorna artik kullanamayiz.
const { city, temp: temperature } = person.location;
console.log(temperature);


//DEFAULT VALUES with ES6
//Eger bir atama yapilmamissa asagidaki gibi default atadigimiz degerleri kullanabiliriz.
const { name = "Mucahid", age = 28 } = person;


//Hem callName i degistirme hemde DEFAULT value atama
const { city, temp: temperature = 98 } = person.location;
console.log(temperature);


