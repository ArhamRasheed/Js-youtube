//shuru ka commit krna bhool gya

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = {5: "a", 6: "b"}

// {}=> is the target object
// sary object target object mn combine ho kr target return horha h 
//const obj4 = Object.assign({},obj1,obj2,obj3)
// const obj4 = Object.assign(obj1,obj2,obj3);
// console.log(obj4);
// console.log(obj4 === obj1);

const obj3 = {...obj1, ...obj2}//spread operator
//console.log(obj3);

// database se jb users ayenge tu array of objects ayenge

const users = [
    {
        id: 1,
        email: "arham@gmail.com"
    },
    {
        id: 2,
        email: "rasheed@gmail.com"
    }
]

users[1].email
//console.log(tinder);

// De structuring of Object

// const course = {
//     coursename: "Js in urdu",
//     price: "999",
//     courseInstrcutor: "Arham"
// }

//course.courseInstrcutor

const {courseInstrcutor: instructor} = course
//console.log(courseInstrcutor);
console.log(instructor);

// API
// backend se Json mn values ati h => object hi h , Array bhi hoskta h 

//ye object h but koi nam nh h 
// {
//     "name": "Arham",
//     "coursename": "Js in urdu",
//     "price": "Free"
// }







