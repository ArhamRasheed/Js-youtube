// arrow function k andr this nh hota

const user = {
    username: "Arham",
    price: 999,
    welcomeMessage: function(){//this => current context
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

//console.log(this); // current context is empty 
//Q k hum node environment k andr h, tu this h woh empty object ko refer kr rha h 
/*
Javascript ko run krne ka engine browser k andr, waha pr sb se zda global object h woh Window object h => Whereas in node empty object h 
*/

// function chai(){
//     // let username = "Arham"
//     // console.log(this.chai);//sirf object mn hota h function mn nh 
//     console.log(this);
    
// }

// chai()

// output => undefined
// const chai = function(){
//     let username = "Arham"
//     console.log(this.username);
// }

// chai()

//output => {}
// const chai = () => {
//     let username = "Arham"
//     console.log(this);
// }

// chai()

// -------------   Arrow function ---------

//explicit return
// const addtow = (num1, num2) => {
//     return num1+num2;
// }
// console.log(addtow(3,5));

// implicit return 
// const addtow = (num1, num2) => num1+num2;

// const addtow = (num1, num2) => (num1+num2);
// NOTE: curly braces use hows tu return likhna parega & parenthesis use kiya tu nh liikhna 

const addtow = (num1, num2) => ({username: "Arham"});//object return krne k lye parenthesis dalna h 
console.log(addtow(3,5));

 //const myArray = [2,5,3,6,7]
//myArray.forEach(() => {})//is method k andr function dalty h => can pass in any format
//myArray.forEach(() => ())