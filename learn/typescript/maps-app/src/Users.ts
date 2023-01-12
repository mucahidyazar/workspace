import faker from "faker";
// Bazi moduller typedefinition packleri icnde yukludur.
// Bazi moduller icinde faker gibi npm i @types/faker diyerek yuklememiz gerekiyor.

export class Users {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `Username: ${this.name}`;
  }
}
