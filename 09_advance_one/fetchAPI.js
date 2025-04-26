// API -> Application Programming Interface

const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
    let promise = fetch(URL);
    console.log(promise)
}