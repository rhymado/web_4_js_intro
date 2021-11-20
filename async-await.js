// deklarasi
async function namaFungsi1(parameter) {
  //   synchronous code;
  //   await asynchronous code;
  //   synchronous code;
}

// ekspresi
const namaFungsi2 = async function (parameter) {
  //   synchronous code;
  //   await asynchronous code;
  //   synchronous code;
};

// arrow func
const namaFungsi3 = async (parameter) => {
  //   synchronous code;
  //   await asynchronous code;
  //   synchronous code;
};

const getNameByKeyword = (keyword) => {
  // async
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
      if (searchResult.length > 0) return resolve(searchResult);
      return reject(new Error("Nama Tidak Ditemukan"));
    }, 100);
  });
};

const outputLimiter = (data, limit) => {
  return data.slice(0, limit);
};

const searchName = async (keyword, limit, cb) => {
  try {
    const searchResult = await getNameByKeyword(keyword);
    console.log(cb(searchResult, limit));
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
};

searchName("xyz", 3, outputLimiter);
