//let score = "33abc"
// let score = null
// let score = undefined
// let score = true

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNUmber = Number(score)
// console.log(valueInNUmber); // output: NaN not a number
// console.log(typeof (valueInNUmber));

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isloggedIn = 1 => true
// let isloggedIn = "" => false
// let isloggedIn = "Arham" => true
let isloggedIn = -25
let booleanIsloggedIn = Boolean(isloggedIn)
//console.log(booleanIsloggedIn)


let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log( typeof stringNumber)

// Browser zda tar string values deta h, apko int, boolean, array, and objects mn conver krna porta h 

// *******************  Operations ***********************

let value = 3
let Negvalue = -value
// console.log(Negvalue)

let str1 = "Hello"
let str2 = "Arham"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2);// output:12
// console.log("1" + 2 + 2);// output:122
// console.log(1 + "2");// output:12
// console.log(1 + 2 + "2");// output:32
// explanation : https://tc39.es/ecma262/#sec-toprimitive
// further explanation is at chai aur cod eng channel

console.log(+true);
console.log(+"");//

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gamecounter = 100
gamecounter++
console.log(gamecounter)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment