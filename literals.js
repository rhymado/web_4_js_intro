const number1 = 10;
const number2 = 12;

// console.log(
//   "number 1 = " +
//     number1 +
//     "\nnumber 2 = " +
//     number2 +
//     "\nhasil penjumlahan antara number 1 dan number 2 = " +
//     (number1 + number2)
// );

console.log(`number 1 = ${number1}
number 2 = ${number2}
hasil penjumlahan antara number 1 dan number 2 = ${number1 + number2}`);

const student = {
  name: "Ando",
  grade: 10,
  address: "Bandung",
  DOB: "29/02/2004",
};

for (let property in student) {
//   console.log(property + " = " + student[property]);
  console.log(`${property} = ${student[property]}`);
}
