const promiseOne = new Promise(function(resolve, reject){
    //Do a async tack
    // DB call,s cryptography, network
    setTimeout(function () {
        console.log('Async Task is complete');
        resolve()
    }, 1000)
})
// promise creattion done here

//Promise consumption
promiseOne.then(function(){
    console.log("Promise Consumed!");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");  
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "arhamrasheed20@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: "Arham", password: "123"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },2000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username;
    // ye phele .then ki value chain k dusre .then mn ayegi
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },2000)

});

//exactly .then type hii h, thura wait krta h kam kr krne ka
async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


async function getAlluser(){
    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // const data = response.json()
    // console.log(data);
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //console.log(response);
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

//getAlluser()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))