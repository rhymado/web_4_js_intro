// destructuring object
const student = {
  grade: 10,
  address: "Bandung",
  DOB: "29/02/2004",
  fullName: "Andi Sukandi",
};

const { address, fullName } = student;
// const fullName = student.fullName
// const address = student.address
console.log(`${fullName} tinggal di ${address}`);
// {
//   const name = "";
//   console.log(name);
// }

const students = [
  {
    fullName: "Andi Sukandi",
    grade: 10,
    address: "Bandung",
    DOB: "29/02/2004",
  },
  {
    fullName: "Andi Sukandiman",
    grade: 10,
    address: "Bandung",
    DOB: "29/02/2004",
  },
  {
    fullName: "Andini Sukandi",
    grade: 10,
    address: "Bandung",
    DOB: "29/02/2004",
  },
];

// destructuring array
const rgb = [255, 140, 0];
const [green, red, blue] = rgb;
console.log(red, green, blue);

const numbers = [1, 2, 3, 1, 3, 1, 3, 2, 3, 4, 4, 3, 2, 4];
const [one, two, ...rest] = numbers;
console.log(one, two);
console.log(rest);
