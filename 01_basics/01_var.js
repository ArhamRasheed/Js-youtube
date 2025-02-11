const accountId = 144553

// two ways to declare variables 
// 1) let 2) var

/*
Prefer not to use var:
b/c of issue in block scope and functional scope
*/ 

let accountEmail = "arhamrasheed20@gmail.com" 
var accountPassword = "12345"// bhool jao old h, maslay h is mn
accountCity = "Karachi"
let accountstate;

accountEmail = "a#.com"
accountPassword = "5555"
accountCity = "Lahore"
//ccountId = 2

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])