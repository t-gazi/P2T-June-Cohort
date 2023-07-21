// let age2 = 27
// console.log(age)
// const name = "tasnia"

// age = 28;
// console.log(age)

// name = "zein"

// console.log(``)

const name = "tasnia"
let age = 27
const dob = 1995

console.log("my name is" , name, "I am years" , age , "old and I was born in" , dob);
console.log(`my bame is ${name} I am years ${age} old and I was born in ${dob}`)


//--------------

//string (anything in quotations)
//number
//boolean (true/false statement)
//null (empty)
//undefined (not set)
//object

//["",1,true,undefine,null,objects]

let array = ["bread", "milk", "cheese", "fruits"]
//position/index != number of items

//array.length
//array[n] - "something" will reassign item in that position
//array.push("item") - add item end of list
//array.pop() - remove item from end of list
//array.splice(index, number of items) - remove the item starting from that index and how many items you wnat to remove

array[3] = "juice"
array[4] = "pasta"

array.push(name)

array.splice(2,1)

console.log(array);