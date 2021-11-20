const getNames = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
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
    if (success) return resolve(names);
    return reject(new Error("500 | Network Error"));
  }, 100);
});

getNames
  .then((nameList) => {
    const result = nameList.filter((name) => name.includes("b"));
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("fetching");

const searchName = (keyword, limit) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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
      const searchResult = names.filter((name) =>
        name.toLowerCase().includes(keyword.toLowerCase())
      );
      if (searchResult)
        return resolve({
          data: searchResult,
          limit: limit,
        });
      return reject(new Error("Nama tidak ditemukan"));
    }, 150);
  });
};
const outputLimiter = (data, limit) => {
  console.log(data.slice(0, limit));
};
const outputLimiter2 = ({ data, limit }) => {
  console.log(data.slice(0, limit));
};
searchName("b", 4)
  //   .then(({ data, limit }) => outputLimiter(data, limit))
  .then(outputLimiter2)
  .catch((err) => console.log(err));
