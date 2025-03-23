const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)//problem => creates array in array, array as an element
//console.log(marvel_heros);

//const Allheros = marvel_heros.concat(dc_heros)//returns new array with changing the exiting array
//console.log(Allheros);

const all_new_heroes = [...marvel_heros, ...dc_heros]//spread operator
//console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);

console.log(Array.isArray("Arham"));
console.log(Array.from("Arham"));
console.log(Array.from({name: "Arham"}));//interesting case => note ye key h so key se array nh bna pyega "from" tu [] dega 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
