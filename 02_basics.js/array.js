//array


//we can have diff types of elements => any type or object
const myArray = [0,1,2,3,4,5,true,"Arham"]

console.log(myArray[1]);
//zero based indexing

//javascript when coping=> shallow copy hoti h => same reference point share hota h
/* original mn change krne se copy mn bhi change hoga*/

// Array methods

// myArray.push(6)
// myArray.push(7)
// console.log(myArray);
// myArray.pop()
// console.log(myArray);

//myArray.unshift(9)//adds element to the first index and shifts other to right
//myArray.shift()//no parameter


//console.log(myArray.includes(9))
//console.log(myArray.indexOf(3))//gives -1 when value is not there in array
//console.log(myArray);

// const newArr = myArray.join()//join => changes to string
// console.log(myArray)
// console.log(typeof newArr)

// slice, splice 

console.log("A",myArray);

const mynew1 = myArray.slice(1,3)//does not change the original array

console.log(mynew1);
console.log("B",myArray);


const mynew2 = myArray.splice(1,3)//original array ko manipulate krta h 
console.log("C",myArray);
console.log(mynew2);
