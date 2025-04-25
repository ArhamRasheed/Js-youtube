// Apna college = > Lecture 12 : Callbacks << Promises << Async Await

// Callback hell

// function getData(dataID, getNextData){
//     //2s
//     setTimeout(() => {
//         console.log("Data", dataID);
//         if (getNextData) {
//             getNextData()
//         }
//     },2000)
// }

// //callback hell => nested callbacks
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4)
//         });
//     });
// });

// Promises => solves callback hell 






// --------------------------------------------

//        Async-Await 

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data");
//             resolve(200);
//         }, 2000)
//     });
// }

// async function getWeatherData() {
//     await api();//1st
//     await api();//2nd
// }

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("success");
        },2000);
    });
}

async function getAlldata() {
    console.log("getting data 1.......")
    await getData(1);
    console.log("getting data ۔......")
    await getData(2);
    console.log("getting data 3.......")
    await getData(3);
}

(async function getAlldata() {
    console.log("getting data 1.......")
    await getData(1);
    console.log("getting data 2۔......")
    await getData(2);
    console.log("getting data 3.......")
    await getData(3);
})()