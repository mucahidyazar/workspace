import { Users } from "./Users";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const users = new Users();
const company = new Company();
const customMap = new CustomMap("map");

customMap.addMarker(users);
customMap.addMarker(company);

// customMap.addUserMarker(users);
// customMap.addCompanyMarker(company);

// const company = new Company();
// console.log(company);

//GoogleMap ile API olusturup html dosyamiza ekledik. Ve google artik globbal bir scope oldu bizim icin. Fakat burada kullanabilmemiz icin once types definition'unu yuklememiz gerekiyor. npm i @types/googlemaps
