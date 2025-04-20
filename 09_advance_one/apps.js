// Apna college = > Lecture 12 : Callbacks, Promises & Async Await

// Callback hell

function getData(dataID, getNextData){
    //2s
    setTimeout(() => {
        console.log("Data", dataID);
        if (getNextData) {
            getNextData()
        }
    },2000)
}

//callback hell => nested callbacks
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4)
        });
    });
});

// Promises => solves callback hell 