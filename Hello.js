// Q1: Convert the following function into an arrow function:
// function add(a, b) {
//     return a + b;
//   }

const add = (a,b) => {
    return  a + b;
}
console.log(add(1,2));

/*Q2: Use template literals to construct the following sentence:
"Hello, my name is John, and I am 25 years old." Where name and age are variables.*/

const pname = "John";
const age = 25;
console.log(`Hello, my name is ${pname}, and I am ${age} years old.`);

/*Q3: Create a function that calculates the area of a rectangle, where the height has a default value of 10 if not provided.*/

const calculateRectangleArea = (width, height = 10) => {
    return width * height;
}
console.log(calculateRectangleArea(5)); 

/*Q4: Given the object:
Extract the name and city properties using destructuring.*/
const user = { name: "Alice", age: 30, city: "New York" };

const { name, city } = user;
console.log(name);
console.log(city);

/*Q5: Write code that:
1. Combines two arrays [1, 2, 3] and [4, 5, 6] into one array using the spread operator.
2. Uses the rest operator to collect arguments passed to a function into an array.
*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1,...arr2];
console.log(combinedArray);

function collectArguments(...args) {
    console.log(args);
  }
  
  collectArguments(1, 2, 3, 4, 5);

/*Q6: Given the array:
const numbers = [1, 2, 3, 4, 5];
1. Use map to create a new array where each number is doubled.
2. Use filter to create a new array with only the even numbers.*/ 

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

/*Q7: Use a for...of loop to iterate over an array of fruits:
const fruits = ["apple", "banana", "cherry"]; Log each fruit to the console.
Q: Write code to:
1. Create a Set with unique values from an array [1, 2, 2, 3, 4, 4].
2. Create a Map that stores a fruit name as a key and its color as a value (e.g., apple -> red).*/

const fruits = [1, 2, 2, 3, 4, 4];
const uniqueFruits = [...new Set(fruits)];
console.log(uniqueFruits);

const fruitColors = new Map();

fruitColors.set("apple", "red");

fruitColors.set("banana", "yellow");

fruitColors.set("cherry", "red");

console.log(fruitColors);

/*Q8: What's the difference between let and const? Write code 
that demonstrates their behavior in a block scope.*/

let x = 10;
    x=40; // this will change the value of the let x variable
if (true) {
    let x = 20;
    console.log(x); // Output: 20
}

console.log(x); // Output: 40

const y = 30;
  //  y = 59; this will throw an error because we cant change value of const 
if (true) {
    const y = 40;
    console.log(y); // Output: 40
}

console.log(y); // Output: 30

