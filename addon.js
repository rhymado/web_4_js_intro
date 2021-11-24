const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
const doFetch = async (url, cb) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    cb(data);
  } catch (err) {
    console.log(err);
  }
};

const doFetchAbilities = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    getPokemonAbilities(data);
  } catch (err) {
    console.log(err);
  }
};

const doFetchMoveSet = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    getPokemonMoveSet(data);
  } catch (err) {
    console.log(err);
  }
};

const getPokemonAbilities = (pokemon) => {
  console.log(pokemon.abilities);
};
const getPokemonMoveSet = (pokemon) => {
  const { moves } = pokemon;
  const moveSet = moves.map((moveItem) => {
    // console.log(moveItem);
    return {
      move: moveItem.move,
    };
  });
  console.log(moveSet);
};

// doFetch(url, getPokemonAbilities);
// doFetch(url, getPokemonMoveSet);
// doFetch(url, (pokemon) => {
//   //   console.log(pokemon.stats);
//   const { stats } = pokemon;
//   const statList = stats.map((statItem) => {
//     // {name: namaStat, base: baseStat}
//     return {
//       name: statItem.stat.name,
//       base: statItem.base_stat,
//     };
//   });
//   console.log(statList);
// });

const urlPokemon = "https://pokeapi.co/api/v2/pokemon/";
// const getPokemonList = async (url) => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.results;
//   } catch (err) {
//     console.error(err);
//   }
// };
const getPokemonTyping = async (pokemonToGet) => {
  try {
    const { name, url } = pokemonToGet;
    const response = await fetch(url);
    const { types } = await response.json();
    // return data.types;
    const typeList = types.map((typeItem) => {
      return {
        name: typeItem.type.name,
      };
    });
    const pokemon = {
      name: name,
      type: typeList,
    };
    console.log(pokemon);
  } catch (err) {
    console.error(err);
  }
};
const getPokemonListWithCb = async (url, cb) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const pokemonToGet = data.results[0];
    cb(pokemonToGet);
  } catch (err) {
    console.error(err);
  }
};

getPokemonListWithCb(urlPokemon, getPokemonTyping);

// const getPokemonWithTyping = async (link) => {
//   try {
//     const pokemonList = await getPokemonList(link);
//     const { name, url } = pokemonList[0];
//     const pokemonTyping = await getPokemonTyping(url);
//     const typeList = pokemonTyping.map((typeItem) => {
//       return {
//         name: typeItem.type.name,
//       };
//     });
//     const pokemon = {
//       name: name,
//       type: typeList,
//     };
//     console.log(pokemon);
//   } catch (err) {
//     console.error(err);
//   }
// };

// getPokemonWithTyping(urlPokemon);

// map
const customMap = (array, cb) => {
  let result = [];
  for (let idx = 0; idx < array.length; idx++) {
    const newValue = cb(array[idx], idx, array);
    result[idx] = newValue;
  }
  return result;
};

// array.map(cb)
// customMap(array, cb)
const numbers = [5, 3, 2, 7, 8, 9, 3, 10];
const gradesMapped = numbers.map((value) =>
  value > 8 ? "A" : value > 6 ? "B" : value > 4 ? "C" : value <= 4 ? "D" : "E"
);
const gradesCustomMapped = customMap(numbers, (value) =>
  value > 8 ? "A" : value > 6 ? "B" : value > 4 ? "C" : value <= 4 ? "D" : "E"
);

console.log(gradesMapped);
console.log("=======================================");
console.log(gradesCustomMapped);
