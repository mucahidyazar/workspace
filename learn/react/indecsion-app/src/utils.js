console.log('utils.js is running');

//Buna user.js'den ulasilmasi icin once asagidaki gibi EXPORT etmemiz gerekiyor.
const square = (x) => x * x;

// 2 Type EXPORT turu vardir
// DEFAULT EXPORT ve NAMED EXPORT

//Ikinci bir export icin virgul koyulup yanina gondermek istedigimiz degiskeni gonderebiliriz. Asagida 2. olarak bir fonksiyon gonderiyoruz ornek olarak. 3. 4. gibi islemlerdede aynisi gecerli.
export  { square, add, minus };
const add = (a, b) => a + b;


//Ayrica basina EXPORT yazarak da export edebiliriz degiskenleri.
export const minus = (a, b) => a - b;
//Tabi STRING'ler buna dahil degil
//export 'YANLIS KULLANIM'

//Degiskenlerin baslarina export yazarakda EXPORT islemini yapabiliriz.
//Fakat export default degiskenlerin basina yazilmaz. FAKAT CLASS'larin basina yazilabilir.
export const sayi1 = 5; //DOGRU
export const topla = (a, b) => a + b; //DOGRU
export default sayi2 = 7; //YANLIS
export default sayi2; //DOGRU => sayi2 once bir degisken olarak tanimlanir sonra bu sekilde EXPORT edilebilir.
export default topla = (a, b) => a + b; //YANLIS
export default topla; //DOGRU => topla once bir degisken olarak tanimlanir sonra bu sekilde EXPORT edilebilir.
export default class topla { } //DOGRU


//CHALLENGE
const isAdult = (age) => age>=18
const canDrink = (age) => age>=18
const isSenior = (age) => age>=65

export {isAdult, canDrink, isSenior as default};
//DEFAULT EXPORT'lar 1 tane olabilir sadece bir dosyada.
//Ya yukaridaki gibi as default yanina yazilarak normal EXPORT'larla birlikte EXPORT edilebilirler.