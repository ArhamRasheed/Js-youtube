// Immediately Invoked Function Expressions (IIFE)

//global scope k pollution is bachne k lye humne IIFE ka use kia

(function chai(){
    // name IIFE
    console.log(`DB Connected`)
})();//ye execution call => ; dalna lazmi

// ()() => phele parenthesis k andr function definition, dusre se execution 

//unname IFFE => arrow fuinction
((name)=>{
    console.log(`DB Connected two ${name}`)
})(`Arham`);//perameter de dia



