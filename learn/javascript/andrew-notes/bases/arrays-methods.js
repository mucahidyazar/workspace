const notes = ["Note 1", "Note 2", "Note 3"];
console.log(notes.length); //3
console.log(notes[0]); //Note 1
console.log(notes[99]); //undefined
console.log(notes[notes.length - 1]); //Note 3 *Choosing last item

notes.push("Deneme");
console.log(notes.length); //4
console.log(notes); //["Note 1", "Note 2", "Note 3", "Deneme"]

const deletedLastItem = notes.pop(); //Arrayin son elemanini siler //Bir degiskene atandiginda o degiskene silinen son item doner asagidaki gibi.
console.log(notes); //["Note 1", "Note 2", "Note 3"]
console.log(deletedLastItem); //Deneme

const todos = ["Todo 1", "Todo 2", "Todo 3"];
//shift => Ilk bastan eleman siler.
console.log(todos.shift()); //Todo 1
console.log(todos); //[ 'Todo 2', 'Todo 3' ]

//unshift => Ilk basa eleman ekler
console.log(todos.unshift("My First Todo"));
console.log(todos); //['My First Todo', 'Todo 2', 'Todo 3' ]

//SPLICE(index, how many, new Item) => Arrayin herhangi bir yerine eleman eklememize ve silmemize yarar
const makes = ["Make 1", "Make 2", "Make 3"];
makes.splice(1, 1); //Yani index1'dan 1 tane sil demek
console.log(makes); //["Make 1", "Make 3"]

makes.splice(1, 0, "Deneme"); //Yani indexi 1 olandan hic silme ve index 1 e "Deneme" yi ekle
console.log(makes); //[ 'Make 1', 'Deneme', 'Make 3' ]

makes.splice(0, 1, "Replace edilsin"); //Yani indexi 0 olan silinsin ve yerine 3. argument olan yeni item eklensin.
console.log(makes); //[ 'Replace edilsin', 'Deneme', 'Make 3' ]

makes[2] = "This is now the new note 3";
console.log(makes); //[ 'Replace edilsin', 'Deneme', 'This is now the new note 3' ]

//.forEach(callbackFn(value, index, array))
const notes = ["Note 1", "Note 2", "Note 3"];
notes.forEach((note, index, array) => {
  console.log(note);
  console.log(index);
  console.log(array);
});
// Note 1
// 0
// [ 'Note 1', 'Note 2', 'Note 3' ]
// Note 2
// 1
// [ 'Note 1', 'Note 2', 'Note 3' ]
// Note 3
// 2
// [ 'Note 1', 'Note 2', 'Note 3' ]

const notes = ["Note 1", "Note 2", "Note 3"];
for (let count = 0; count < notes.length; count++) {
  console.log(`Counting ... ${count}`);
}
// Counting ... 0
// Counting ... 1
// Counting ... 2

for (let count = notes.length - 1; count >= 0; count--) {
  console.log(`Counting ... ${count}`);
}
// Counting ... 2
// Counting ... 1
// Counting ... 0
