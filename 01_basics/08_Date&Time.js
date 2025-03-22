//Date object => represents single moment at any platform.
//moment is defined from 1st Jan 1970 => and mili secs mn hoti h 

let myDate = new Date() //date ka object => uska ek instance 

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23)//month zero se start hote h 
//let myCreatedDate1 = new Date(2023, 0, 23,5,3)
//let myCreatedDate2 = new Date("2023-01-14")//yaha pr month first se start hota h => YY/MM//DD
//console.log(myCreatedDate.toDateString());
let myDate3 = new Date("01-14-2023")//MM/DD/YY
//console.log(myCreatedDate2.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let  newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);//month zero se start hota h 
console.log(newDate.getDay());

//String interpolation
'${newDate.getDay()} and the time'

newDate.toLocaleString('default',{
    weekday:"short",
    //dateStyle:"short",
})//isk andr object define krty h 

console.log(newDate);
