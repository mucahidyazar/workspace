// GENERICS with UTILTYTYPES
// https://www.typescriptlang.org/docs/handbook/utility-types.html

//PARTIALS
//PARTIAL 'dan sonra generics icinde interfacemizi asagidaki gibi kullanirsak PARTIAL sayesinde interface icindeki zorunluluklar opsiyonel olurlar.
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date
}
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  // as CourseGoal yapmasaydik courseGoal kendisini partialin bir parcasi olarak gorecekti. Oysa biz returnumuzu CourseGoal Interfacesine gore yapmak istiyoruz. Partial kismi sadece ici icin gecerli olsun istiyoruz. Ve bu durumuda asagida kigib as yaparak asil hedifimizi secerek return ediyoruz.
  return courseGoal as CourseGoal;
}

//READONLY
//Bunun sayesindede dizimizin sadece okunabilir read edilebilir bir string dizisi oldugunu soyleyerel daha sonradan yapilacak push gibi islemleri onleyebiliyoruz.
const names: Readonly<string[]> = ["Max", "Anne"];
// names.push('Manu');




//GENERIC TYPES vs UNION TYPES
//GENERIC
class genericType<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
}
const generic = new genericType<string>();
generic.addItem("Hakan");
generic.addItem(25); // OLMAZ CUNKU generic string olarak ayarlandi
//UNION
class unionType {
  private data: (string | number | boolean)[] = [];
  addItem(item: (string | number | boolean)) {
    this.data.push(item);
  }
}
const union = new unionType();
union.addItem("Deniz");
union.addItem(28);
//BURADA ise hersey ekleyebiliriz cunku burada herhangi bir tanimladiktan sonra generic gibi bir type belirlemek zorunda degilzi

