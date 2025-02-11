// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1)
// console.log("02" > 1)

// {
// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)//yaha pr value conversion ka prblm ata h
// comparision converts null to a number, treating it as 0 that's why null >= 0 is true and null > 0 is false
// line 13 & 11 mn null is converted into zero , kabhi NaN mn bhi krta h 

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// } ye sary comparisoins humesha avoid krna h 

// in js equality check(==) and comparisions(<,>,>=,<=) are diff and works differently 

// === --> values ko strictly check krta h, meaning usk data types ko bhi check krta h 

// console.log("2" == 2) //idhr value check krta, conversion hoti h tu same answer ata h 

console.log("2" === 2)// idhr value and datatype both check krewga