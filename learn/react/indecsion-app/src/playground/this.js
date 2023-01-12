const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
}

console.log(obj.getName());
//Bu calisir sorunsuz cikti verir.

//Buda calisir
const getName1 = obj.getName();
console.log(getName1);

// //Fakat bu calismaz hata verir.
// const getName2 = obj.getName;
// console.log(getName2());

//Fakat bind ile baglarsak hatasini engelleyebiliriz.
const getName3 = obj.getName.bind(obj);
console.log(getName3());

//Veya bind icinde hardCode yaparak getName metodunun hardCode isimi almasini saglayabiliriz.
const getName4 = obj.getName.bind({ name : 'Hakan'});
console.log(getName4());

//Bu hata vermesz ama fonksiyonu kod seklinde gosterir.
const getName5 = obj.getName;
console.log(getName5);

const func = function () {
    //this burada func'i veya fonksiyonu gostermez UNDEFINED'dir
    console.log(this);
}
func();