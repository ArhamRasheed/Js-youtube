// let c = 300
let a = 300

//scope
if (true) {
    let a = 10
    const b = 20
    // var c = 30 
}


//console.log(c); // 30 print outside scope bhi krdega
 //console.log(a);
//console.log(b);

// inspect kr k scope diff h and node k andr code mn scope diff h 

function one(){
    const username = "Arham"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

//one()

if (true) {
    const username = "Arham"
    if (username === "Arham") {
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);

// -----------------   Insteresting   -------------

console.console.log(addone(5))

function addone(num){
    return num+1;
}



// ye bhi function h, ye variable function hold krta h 
addtwo(5)// ye masla krega, qk function ko variable andr declare kiya h tu ye exe nh hoga
//yaha declaration se phele access nh kr skta
const addtwo = function(num){
    return num + 2;
}

