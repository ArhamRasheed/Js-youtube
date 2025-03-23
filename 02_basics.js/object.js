// objects ko declare krne k du tereke h 1) litreal 2) constructor ki tarh

//singleton => jb constructor k through bnate ho
// ye bs ek hi hota h 

// object literals => isse singleton nh bante

const mySym = Symbol("Key1")

Object.create //constructor method => issi mn singleton bnta h 
const Jsuser = {
    name: "Arham",//name ko woh as string hi leta h 
    "Full name": "Arham Rasheed", //isko . lga kr access nh krskty
    age: 20,
    location: "karachi",//bts name, age wagera sb string ki tarh treat horha 
    email: "arhamrasheed20@gmail.com",
    [mySym]: "mykey1",//use sq bracket to use as symbol, warna as string lega
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["Full name"]);
//console.log(Jsuser[mySym]);

//Object.freeze(Jsuser)//lock the object, no changes can be made
//console.log(Jsuser);

Jsuser.greeting = function()
{
    console.log("hello Js user");
}

console.log(Jsuser.greeting)//function ka reference ata h . use krne se => reference is return

Jsuser.greetingtwo = function(){
    console.log(`hello Js user, ${this.name}`);
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingtwo())