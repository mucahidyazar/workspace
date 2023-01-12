const drink = {
  color: "brown",
  carbonate: true,
  sugar: 40
};

// Ya asagidaki gibi diziye tanimlari zorunlu yapabiliriz.
const pepsi: [string, boolean, number] = ["brown", true, 40];

//TYPE ALIAS
type Drink = [string, boolean, number];
//Yada tanimladigimzi bir type alia yi surekli olarak ayni yapidaki tanimlar icin kullanabiliriz.
const cocacola: Drink = [`clear`, true, 40];
const tea: Drink = ["brown", false, 0];
