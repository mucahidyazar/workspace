interface Vehicle {
  name: string;
  year: number | Date;
  broken: boolean;
  summary(): string; //Summary fonksiyonunun bir string return yapacagini soyledik yani mecbur kildik.
}
//Eger yukarida sadece sumamry olsa printVehicle ile oldCivic gi hondersek Typescript interface icinde sadece olan summarynin oldCivic icinde olup olmadigini kontrol eder varsa hata vermez yoksa hata verir.

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

//Fonksiyonun icine gelecek obje parametrelerini zorunlu kilmak
//Bu yapida bu sekilde cok fazla tanim ve yazi oldugu icin okumasi gucluk cektirecek.
//Bu yuzden bunlari interfaces lerle daha rahat ve kolay yapabiliriz.
const printVehicle = (
  vehicle: Vehicle // Asagidaki tum obje yerine sadece bu interface yi yazmamniz yeterli oluyor.
  // {
  //   name: string;
  //   year: number;
  //   broken: boolean;
  // }
): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(`Vehicle Summary: ${vehicle.summary()}`);
};
printVehicle(oldCivic);

//Bu sekilde baska yerlerdede kullanabiliriz interfaceyi fakat tabi once yukaridaki interfaceden ilk 3 tekiler silinmesi lazim. Cunku uyan sadece sugar var. Oranin icinde sadece sugar kalirsa uyumluluk saglanri ancak.
const turkishDrink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};
printVehicle(turkishDrink);
