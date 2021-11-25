const customMap = (array, cb) => {
  if (!array.length) {
    return console.log("Bukan Array");
  }
  if (typeof cb !== "function") {
    return console.log("CB Harus Fungsi");
  }
  let result = [];
  for (let idx = 0; idx < array.length; idx++) {
    const newValue = cb(array[idx], idx, array);
    result[idx] = newValue;
  }
  return result;
};

const customFilter = (array, cb) => {
  if (!array.length) {
    return console.log("Bukan Array");
  }
  if (typeof cb !== "function") {
    return console.log("CB Harus Fungsi");
  }
  let result = [];
  let resultIdx = 0;
  for (let idx = 0; idx < array.length; idx++) {
    const isElementFiltered = cb(array[idx], idx, array);
    if (isElementFiltered) {
      result[resultIdx] = array[idx];
      resultIdx++;
    }
  }
  return result;
};

// es5
module.exports = {
  mapCustom5: customMap,
  filterCustom5: customFilter,
};

// es6
// export default {
//   mapCustom6: customMap,
//   filterCustom6: customFilter,
// };
