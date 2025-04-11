// loops for array and objects

const arr = [1,2,3,4,5]

// for (const num of arr) { // yaha object ka mtlb datatype object nh h but english wala object = > any
//     console.log(num);
    
// }

const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Maps => array jese hi hoty h (object h apne ap mn)
const map = new Map()
map.set('PK', "Pakistan")
map.set('US', "America")
map.set('FR', "France")
map.set('IN', "INDIA")

//console.log(map);

// returns array of each pair
// for (const key of map) {
//     console.log(key);
// }

// for (const [key,value] of map) {
//     console.log(key, ':-', value);
// }


// iterating objects
const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
 


//forof not for objects
// for (const element of object) {
    
// }

const obj2 = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

// for (const key in obj2) {
//     //console.log(myObj[key]);
//     console.log(`${key} short is for ${obj2[key]}`);
// }

//forin loop
const programming = ["js","rb","py","java","cpp"]
// for (const key in programming) {
//     //console.log(key); // arrays ki keys index hoti h from i = 0; thats why object bnaye gaye thy so that we can have key to our desire
//     console.log(programming[key]);
// }


// if I try to iterate map using forin loop
// it will print nothing as map are not iteratable using forin
for (const key in map) {
    console.log(key);
}