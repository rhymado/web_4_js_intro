// if then else
const score = 90;
// if chain
if (score >= 90) {
  // condition true
  console.log("cum laude");
} else if (score >= 75) {
  console.log("lulus");
} else {
  // condition false
  console.log("tidak lulus");
}
// nested if
if (score >= 75) {
  if (score >= 90) {
    console.log("cum laude");
  } else {
    console.log("lulus");
  }
} else {
  console.log("tidak lulus");
}

// comparison
const a = 1;
const b = "1";
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);
// console.log(a + 1); // penjumlahan normal
// console.log(b + 1); // karena b merupakan string, maka berubah menjadi penjumlahan string

// switch-case
// dipakai ketika nilai yang dicari itu bukan range
const grade = "a";
switch (grade) {
  case "A":
    console.log("bagus");
    break;
  case "B":
    console.log("baik");
    break;
  case "C":
    console.log("cukup");
    break;
  case "D":
    console.log("kurang");
    break;
  case "E":
    console.log("sangat kurang");
    break;

  default:
    console.log("Grade tidak ditemukan");
    break;
}

// ternary op
// shorthand dari if else
// condition ? condition true : condition false
const money = 40 * 1000 * 1000; // 4000000
const pcCost = 20 * 1000 * 1000; // 20000000

money >= pcCost ? console.log("beli PC baru") : console.log("nabung lagi");
const finals = 90;
const result =
  finals >= 75 ? (finals >= 90 ? "cum laude" : "lulus") : "tidak lulus";
console.log(result);
