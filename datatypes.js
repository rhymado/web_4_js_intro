// number => angka
let angka = 1;
// console.log(typeof angka);

// string => kata, kalimat, karakter
let str = "hello";
// console.log(typeof str);

// boolean => nilai kebenaran (true, false)
let isOnline = true;
// console.log(typeof isOnline);

// function => fungsi
function fungsi() {}
// console.log(typeof fungsi);

// object => array, object
// berisikan kelompok data yang merupakan pasangan key-value
// array key=index      [0,1,2,3]
// object key=property  {key1:value, key2:value}
const numbers = [5, 6, 7, 8];
const user = {
  firstName: "Andi",
  lastName: "Boris",
  age: 20,
};
// console.log(typeof numbers);
// console.log(typeof user);
console.log(numbers[3]); // namaArr[indeks]
console.log(user.firstName); // namaObj.property
console.log(user["firstName"]); // namaObj["property"]
const mixed = [1, "1", true, function () {}, [0, 1, 2], { a: "a" }];
console.log(mixed);

// null, undefined
// 0 - null - undefined
// 0 - bernilai dan didefinisikan
// null - tidak bernilai dan didefinisikan
// undefined - tidak bernilai dan tidak didefinisikan

let a = null;
console.log(a);

// shorthand untuk object
const firstName = "Aang";
const lastName = "Skywalker";
const age = 23;
// transformasi namaProperty: namaValue => namaPropertyDanValue
const newUser = {
  ...user,
  firstName, // firstName: firstName
  lastName, // lastName: lastName
  age,
};
console.log(newUser);

// const firstName = "Andi";
// const user2 = {
//   firstName: "Bagus",
// };
// firstName;
// user2.firstName;
