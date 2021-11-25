//es5
const { mapCustom5, filterCustom5 } = require("./1");

const array = [1, 2, 3];
const newArray = mapCustom5(array, (value) => value + 2);
console.log(newArray);
const filteredArray = filterCustom5(array, (value) => value % 2 === 0);
console.log(filteredArray);

// es6
// import methodArrayCustom from "./1.js";
// const { mapCustom6, filterCustom6 } = methodArrayCustom;

// const array = [1, 2, 3];
// const newArray = mapCustom6(array, (value) => value + 2);
// console.log(newArray);
// const filteredArray = filterCustom6(array, (value) => value % 2 === 0);
// console.log(filteredArray);
