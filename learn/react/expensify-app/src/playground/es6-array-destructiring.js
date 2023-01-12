const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylivania' 19147]

const [street, city, state, zip] = address;
console.log(street);
console.log(city);


//Istersek ilk 3 tane yi tanimlariz asagidaki gibi
const [street = '1500 Mars Street', city, state] = address;
//Veya iclerinden sadece istedigimiz birini. Asagidaki gibi dizinin 3. elemani gibi yani.
const [ , , state = '1500 Mars Street'] = address;


//Istersek asagidaki gibi DEFAULT deger atayabiliriz.
const [street = '1500 Mars Street', city, state] = address;