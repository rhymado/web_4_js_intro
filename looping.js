const n = 2;
let i = 0; // iterator
// console.log("start looping");
// while (i < n) {
//   console.log(i, n);
//   i++; // step = 1
//   // i = i + 2; // step = 2
//   // i = i + 1;
// }
// console.log("end looping");

let j = 0;
// console.log("start looping");
// do {
//   console.log(j, n);
//   j++;
// } while (j < n);
// console.log("end looping");

// for loop
// for (inisialisasi iterator lokal; kondisi perulangan; step/perubahan counter)
// {logika yang diulang}
// console.log("for loop");
// for (let i = 0; i < n; i++) {
//   console.log(i, n);
// }
const scores = [5, 3, 2, 7, 8, 9, 3]; // nilai selama seminggu (0-10)
// A > 8
// B 6 < score <= 8
// C 4 < score <= 6
// D <= 4
// console.log(scores);
for (let index = 0; index < scores.length; index++) {
  if (scores[index] > 8) {
    console.log("A", scores[index]);
  } else if (scores[index] > 6) {
    console.log("B", scores[index]);
  } else if (scores[index] > 4) {
    console.log("C", scores[index]);
  } else if (scores[index] <= 4) {
    console.log("D", scores[index]);
  }
}

for (let score of scores) {
  if (score > 8) {
    console.log("A", score);
  } else if (score > 6) {
    console.log("B", score);
  } else if (score > 4) {
    console.log("C", score);
  } else if (score <= 4) {
    console.log("D", score);
  }
}

const student = {
  name: "Ando",
  grade: 10,
  address: "Bandung",
  DOB: "29/02/2004",
};

for (let property in student) {
  console.log(property + " = " + student[property]);
}
