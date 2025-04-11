// Also called logic flow

// If statement

// if ( 2 == "2") {
//     console.log(exe);
    
// }

// to check for array
const userEmail = []

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// 

const emptyobj = {}

//object.keys() => returns array of keys
if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}

/* pta hona chaye
false == 0 => true
false == '' => true
0 == '' => true
*/

// Nullish Coalescing Operator (??): null undefined
// for null and undefined k lye bna h 
let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 // jo bhi first value milgai assign hojati h 


//console.log(val1);

// Terniary Operator 

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");


