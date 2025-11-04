const marvelHeros = ["thor", "ironman", "hulk", "spiderman"];
const dcHeros = ["superman","flash", "batman"];

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);

// marvelHeros.concat(dcHeros);
// console.log(marvelHeros)

const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);


const allNewHeros = [...marvelHeros, ...dcHeros]
console.log(allNewHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realArray = another_array.flat(Infinity)
console.log(realArray);

console.log(Array.isArray("Sahishnu"));
console.log(Array.from("Sahishnu"));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));