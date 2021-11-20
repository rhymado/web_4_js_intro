// synchronous
function first() {
  console.log("first");
}
function second() {
  console.log("second");
}

// first();
// second();
// first();

console.log("");

// asynchronous
function firstAsync() {
  console.log("fetching data...........");
  setTimeout(() => {
    console.log("first");
  }, 300);
}

// firstAsync();
// second();

function three(cb1, cb2) {
  setTimeout(() => {
    console.log("three", new Date().getMilliseconds());
    cb1(cb2);
  }, 100);
}
function four(cb) {
  setTimeout(() => {
    console.log("four", new Date().getMilliseconds());
    cb();
  }, 300);
}
function five() {
  setTimeout(() => {
    console.log("five", new Date().getMilliseconds());
  }, 200);
}

// five();
// four();
// three();

// jalankan three()
// jika three() selesai, jalankan four()
// jika four() selesai, jalankan five()
// three(four, five);

const searchName = (keyword, limit, cb) => {
  setTimeout(() => {
    let searchResult = [];
    const names = [
      "Abigail",
      "Alexandra",
      "Alison",
      "Amanda",
      "Angela",
      "Bella",
      "Carol",
      "Caroline",
      "Carolyn",
      "Deirdre",
      "Diana",
      "Elizabeth",
      "Ella",
      "Faith",
      "Olivia",
      "Penelope",
    ];
    searchResult = names.filter((name) =>
      name.toLowerCase().includes(keyword.toLowerCase())
    );
    cb(searchResult, limit);
  }, 100);
};

const outputLimiter = (data, limit) => {
  console.log(data.slice(0, limit));
};

// const searchResult = searchName("al");
// console.log(searchResult);

// const limitedResult = outputLimiter(searchResult, 3);
// console.log(limitedResult);

searchName("an", 3, outputLimiter);
