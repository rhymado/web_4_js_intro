// DEKLARASI
// function namaFunsi () {}
// () => berisikan parameter/argumen/input => external factor
// {} => berisikan implementasi dari fungsi ybs => local scope untuk fungsi ybs
function powDeclaration(num, power) {
  // num ^ power
  let result = 1;
  // power = 0
  // looping tidak terjadi
  for (let i = 1; i <= power; i++) {
    // result = result * num;
    result *= num;
  }
  return result;
}

// console.log(powDeclaration(5, 3));

// EXPRESSION
const powExpression = function (num, power) {
  // validasi 1
  // num dan power harus bertipe number
  if (typeof num !== "number" || typeof power !== "number") {
    return new Error("input harus bertipe number");
  }
  // validasi 2
  // power tidak boleh lebih kecil dari 0
  if (power < 0) {
    return new Error("pangkat harus lebih besar atau sama dengan 0");
  }
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result *= num;
  }
  return result;
  //   if (typeof num === "number" && typeof power !== "number") {
  //     let result = 1;
  //     for (let i = 1; i <= power; i++) {
  //       result *= num;
  //     }
  //     return result;
  //   } else {
  //     return new Error("input harus bertipe number");
  //   }
};

// console.log(powExpression(5, 2));

// ARROW
const powArrow = (num, power) => {
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result *= num;
  }
  //   return console.log("inside func", result);
  console.log("inside func", result);
  return;
};

// console.log(powArrow(5, 2));
// fungsi mengalami transformasi menjadi bentuk returnnya

// const resultOfPowArrow = powArrow(5, 2);
// console.log(resultOfPowArrow);

// const noReturn = () => {
//   return console.log("inside noreturn", "kosong");
// };
// const resultOfNoReturn = noReturn();
// console.log(resultOfNoReturn);

// const radius = 5;
// const circleArea = Math.PI * powExpression(radius, 2);
// console.log(circleArea);

// arrow function memiliki sifat implicit return
// pada implicit return fungsi akan otomatis return
// perbedaan bentuk kurung dari blok implementasi
// {} => explicit return
// () => implicit return
// biasanya implicit return digunakan untuk fungsi yang
// berisikan sedikit logic
const add = (a, b) => {
  //   const hasil = a + b;
  //   return hasil;
  return a + b;
};
const addImplicit = (a, b) => a + b;

console.log(add(1, 2));
console.log(addImplicit(1, 2));
