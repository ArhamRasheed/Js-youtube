const coding = ["Js", "ruby", "java", "python", "cpp"]

// arrays have inbuilt methods for iteration
// We use forEach() => it takes callbackfunc as a parameter and for each iteration it takes the value as a parameter in the callbackfunc(function has no name)
// coding.forEach( function (val){
//     console.log(val);
// })

// can use arrow function as well for callbackfunc
// coding.forEach((value) => {
//     console.log(value);
// })

// 3
// function ko kahi aur define kr k bhi pass kr skty h 
// function printMe(item){console.log(item);
// }
// coding.forEach(printMe);//function ka reference dena h execute nh krna h 


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        langName: "Javascript",
        Lang_File: "js"
    },
    {
        langName: "Python",
        Lang_File: "py"
    },
    {
        langName: "C++",
        Lang_File: "cpp"
    },
]

myCoding.forEach((item)=>{
    console.log(item.langName);
})