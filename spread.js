// copy suatu array ke array lain
const hobby = ["swimming", "hiking", "gaming"];

const myHobby = ["gardening", ...hobby, "reading"];
// console.log(hobby);
// console.log(myHobby); // swimming hiking gaming reading

// menggabungkan 2 array
const actionBooks = ["Hunger Games", "Mockingjay", "Catching Fire"];
const romanceBooks = ["Hunger Games", "Dilan 1990", "Rindu"];

const collections = [...actionBooks, ...romanceBooks];
// console.log(collections);

// copy object
const student = {
  name: "Ando",
  grade: 10,
  address: "Bandung",
  DOB: "29/02/2004",
  parent: {
    father: "Pak Andi",
    mother: "Bu Andini",
  },
};

const newStudent = {
  ...student,
  gender: "Male",
  grade: 11,
  parent: {
    ...student.parent,
    father: "Pak Anda",
  },
};
console.log(newStudent);

// menggabungkan 2 object
// PC
const hardware = {
  cpu: "Core i3 9300H",
  gpu: "NVIDIA RTX 3060",
  storage: "NVMe 256GB SSD",
  monitor: 'LG 32"',
};

const software = {
  OS: "Windows",
  textEditor: "VSCode",
  gameLibrary: "Steam",
  photoViewer: "Windows Photo Viewer",
};

const PC = {
  ...hardware,
  ...software,
};

console.log(PC);
