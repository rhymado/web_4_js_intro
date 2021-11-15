// var, let, const
// var, let => tipe variable yg bisa diubah nilainya
// const => tipe variable yg tidak bisa diubah nilainya

// assign => memasukkan sebuah nilai kedalam variable
var a = "a";
let b = "b";
const c = "c";
// console.log(a, b, c);

// reassign => memperbaharui suatu nilai dari variabel
a = 1;
b = 2;
// c = 3;
// console.log(a, b, c);

// hoisting => mengangkat proses deklarasi ke atas

// console.log(d);
var d = 3; // var d; d = 3;

let e;
// console.log(e);
e = 5;

// scope => cakupan pemanggilan suatu variable
var carName = "Volvo";
function printCar() {
  let carName = "Toyota";
  console.log(carName); // printCar.carName
}
function printCar2() {
  let carName = "BMW";
  console.log(carName); // printCar2.carName
}
printCar();
printCar2();
console.log(carName); // global carName
