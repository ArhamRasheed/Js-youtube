const myNumers = [1,2,3]

// const Total = myNumers.reduce(function (acc, curval){
//     console.log(`acc: ${acc} and currval: ${curval}`)
//     return acc + curval;
// }, 0)
const Total = myNumers.reduce( (acc, curr) => acc+curr, 0)

console.log(Total);

const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Mobile dev course",
        price: 8000
    },
    {
        itemName: "Data Science",
        price: 12000
    }
]

const priceTopay = shoppingCart.reduce((acc, item)=> acc+item.price,0)

console.log(priceTopay);

