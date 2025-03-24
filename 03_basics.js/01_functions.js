

function sayMyname(){
    console.log("Hi!");
    
}

//sayMyname()

function addTwoNumbers(num1, num2){
        //console.log(num1+num2);
        return num1+num2
}

const result = addTwoNumbers(3,4)
//console.log("Sum: ",result);

function loginUserMessage(username = "Sam"){//default value if you dont pass anything
    if (!username ) {//undefined = false
        console.log("please etner username!");
        return 
    }
    return`${username} just logged in`
}


//console.log(loginUserMessage())

// Situation => kitne argument anay walay h pta hii nh h
// ... rest operator
function calculateCartPrice(val1, val2,...num1){
    return num1
}

//console.log(calculateCartPrice(2,3,5,8,8));


const user = {
    username: "Arham",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// //handleObject({
//     username: "Arham",
//     price: 450,
// })


const myArray = [200,400,500,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray))