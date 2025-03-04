// Primitives(call by value => changes copy mn hoty h) ==> 7 categories 
// : String, Number, Boolearn, null, undefined, Symbol(value ko unique bna ne k lye)
// and BigInt


const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id == anotherId);

//usually to store big number javascript use bigint behind the scene to store the value, we can also use n in the end to use bigint
const bigNumber = 356445666621314891664


// Call by reference (Non Primitive)
//: Array, Objects, Functions

const heros = ["Shaktiman", "Ainak wala jin", "Doga"]//in sb ka reference hota h
//curly k andr key value pairs
/*

The entire `myObj` is an object. Inside it, `name` and `age` are **properties (or attributes)** of this object, not separate objects themselves. Each property consists of a **key-value pair**, where `"name"` is the key, and `"hitesh"` is the value. Similarly, `"age"` is the key, and `"22"` is the value. 

So, `myObj` is the **whole object**, and `name` & `age` are its **properties**.

*/
//data types in key-value pair can be anything
let myObj = {
    name: "hitesh",
    age: "22",   
}

//Datatypes summary skipped to stack & heap

//Stack(Primitive) and heap(Non-Primitive)

let myYoutubename = "Arhamrasheed.com"

let anothername = myYoutubename

console.log(anothername)
anothername = "chaiaurcode"
console.log(anothername)
console.log(myYoutubename)


let userOne = {
    //ye sb(non-primitive) direct heap mn jyega
    email: "arham20@gmail.com",
    upi: "user@ybl"
}

let usertwo = userOne

usertwo.email = "Arham220@gmail.com"

//since reference jata h tu duno jaga change ayega
console.log(userOne.email)
console.log(usertwo.email)