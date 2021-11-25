// tipe data : 2 jenis
// tipe data primitif :
// number, string, boolean, undefined, null : menggunakan value
// tipe data non-primitif :
// function, object (array & object) : menggunakan referensi

// value: nilai dari suatu variabel
const a = 1;
const b = 1;
// console.log(a === b);

// referensi: referensi dari suatu nilai dari suatu variabel
const c = [1, 2, 3]; // 0x01
const d = [...c]; // 0x02
// console.log(c === d); // 0x01 === 0x02
function isArrayEquivalent(arrayA, arrayB) {
  let isEquivalent = false;
  const a = [...arrayA];
  const b = [...arrayB];
  if (a.length !== b.length) return isEquivalent;
  a.sort();
  b.sort();
  //   arrayA.sort();
  //   arrayB.sort();
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      isEquivalent = false;
      break;
    }
    isEquivalent = true;
  }
  return isEquivalent;
}
// console.log(isArrayEquivalent(c, d)); // 0x01, 0x02
// console.log(c);
// console.log(d);

const sayHello = function () {
  console.log("Hello World");
  return undefined;
};
const sayHalo = function () {
  console.log("Hello World");
  //   return undefined;
};
// console.log(sayHalo === sayHello);

// passing by value; passing by reference
let e = "Andi"; // string; primitive
let f = e;
console.log(e === f); // "Andi" === "Andi"
f = f.concat(" Skywalker");
console.log(e === f); // "Andi" === "Andi Skywalker"

const userG = {
  firstName: "Luke",
  lastName: "Skywalker",
}; // 0x03
const userH = userG; // userH = 0x03
console.log(userG === userH); // 0x03 === 0x03
Object.assign(userH, { age: 45 });
console.log(userG);
console.log(userG === userH); // 0x03 === 0x03

function addProperty(addedProperty) {
  const userI = userG;
  Object.assign(userI, addedProperty);
}

addProperty({ hobbies: ["Swimming", "Reading"] });
console.log(userG);

const arrayC = [1, 2, 3]; // 0x019
arrayC.push(4);
console.log(arrayC);
// arrayC = [1, 2, 3];
