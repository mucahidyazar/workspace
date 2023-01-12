import faker from "faker";
import { Mappable } from "./CustomMap";

// interfacemizi CumstomMap'den export ederek implement olarak Company iel bagliyoruz. Bu sayede Company ile CustomMap arasinda yakin bir bag kuruyoruz. Ve buda bize herhangi bir hata durumunda bize asil kaynagin dogruca gosterilmesini sagliyor.
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>        
    `;
  }
}
