const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

//TANLIS
const { name }: string = profile; // YANLIS. Bu kullanim yanlis

//DOGRU
//Yani asagisi bize profile'nin number olan bir age propertysine sahip bir obje oldugunu soyler.
const { age }: { age: number } = profile;
const { name, age }: { name: string; age: number } = profile;

const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
