const user = {
  firstName: "Andi",
  lastName: "Boris",
  age: 20,
  sayHello: function () {
    console.log("Hello World");
  },
  addNumber: function (a, b) {
    console.log(a + b);
  },
  getFullNameES5: function () {
    // this = object dari method ybs = user
    return `${this.firstName} ${this.lastName}`;
  },
  getFullNameES6: () => {
    // this = pembungkus dari object dari method ybs = global
    return `${this.firstName} ${this.lastName}`;
  },
};

// user.sayHello();
// user.addNumber(1, 2);
const fullName5 = user.getFullNameES5();
// console.log(fullName5);
const fullName6 = user.getFullNameES6();
// console.log(fullName6);

// BUILT-IN METHOD JS
// array.sort
// mengurutkan variabel/elemen array berdasarkan keingingan
const numbers = [5, 3, 2, 7, 8, 9, 3, 10];
// const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);
// const ascendingNumber = numbers.sort((a, b) => a - b);
// console.log(ascendingNumber);
// const descendingNumber = numbers.sort((a, b) => b - a);
// console.log(descendingNumber);

// string.replace
// digunakan untuk mengubah suatu substring menjadi substring lain
const text = "Hello World";
const newText = text.replace("Hello", "Welcome");
console.log(newText);
// console.log(text);

// array.reverse
// membalikkan urutan dari suatu elemen
// const reversedNumbers = numbers.reverse();
// console.log(reversedNumbers);

// array.push
// digunakan untuk menambah elemen baru di posisi terbelakang
// console.log(numbers.length);
// numbers.push(20, 1, 5);
// console.log(numbers.length, numbers);

// string.split array.join
// split => memisahkan string menjadi array
// join => menggabungkan array menjadi string
const sentence = "selamat malam saudara pendengar";
const splittedSentence = sentence.split(" ");
// console.log(splittedSentence);
// console.log(sentence);
const newSentence = splittedSentence.join(" kembali ");
// console.log(newSentence);
// console.log(splittedSentence);

// array.map array.filter
// sama sama mengakses semua elemen array
// map => akan memberikan "treatment" untuk setiap elemen array
// map => hasilnya berupa elemen tsb + treatment
// filter => akan memberikan "pengecekan" untuk setiap elemen array
// filter => hasilnya berupa elemen2 yang lolos pengecekan

// const grades = numbers.map((value) => {
//   if (value > 8) {
//     return "A";
//   } else if (value > 6) {
//     return "B";
//   } else if (value > 4) {
//     return "C";
//   } else if (value <= 4) {
//     return "D";
//   }
// });
const grades = numbers.map((value) =>
  value > 8 ? "A" : value > 6 ? "B" : value > 4 ? "C" : value <= 4 ? "D" : "E"
);
console.log(numbers);
console.log(grades);

const numberGreaterThan6 = numbers.filter((value) => {
  return value > 6;
});
// console.log(numbers);
// console.log(numberGreaterThan6);

const data = [1, 2, "3", 4, "5", 6];
const dataNumber = data.filter((datum) => typeof datum == "number");
const dataString = data.filter((datum) => typeof datum == "string");
// console.log(data);
// console.log(dataNumber);
// console.log(dataString);
