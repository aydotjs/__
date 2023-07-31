'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Thrills Restaurant',
  location: 'Broad Street, Lagos Island, Lagos State',
  categories: ['Swallow', 'Vegetarian', 'Organic'],
  starterMenu: ['Cassava Flakes', 'Grocery', 'Floating Berries'],
  mainMenu: ['Crunchy Peas', 'Plantain'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const { thu: thursday, sat:saturday } = restaurant.openingHours;
// console.log(thursday);
// console.log(saturday);
// console.log(sat);
// 1)ARRAY DESTRUCTURING
// const friends = ['Kate', 'Ciroma', 'Dumebi'];
// const friend1 = friends[0]
// const friend2 = friends[1]
// const friend3 = friends[2]
// const [friend1="Olums", friend3] = friends;
// console.log(friend1);
// console.log(friend2);
// console.log(friend3);
// console.log(friends);
// const arr = ["x", "y", "z"]
// const [x,y,z] = arr
// const [category1 = 'Bread', category2, category3, category4 = 'Not Found'] =
//   restaurant.categories;
// console.log(category1);
// console.log(category3);
// console.log(category4);

// 2)OBJECT DESTRUCTURING
// const person1 = {
//   firstName: 'Jude',
//   age: 20,
// };
// const { firstName, age, complexion = 'Light Skinned' } = person1;
// console.log(firstName);
// console.log(age);
// console.log(complexion);
// const x = 10
// SPREAD OPERATOR
// const arr = [
//   { firstName: 'Ayo' },
//   { firstName: 'Philips' },
//   { firstName: 'Jazpal' },
// ];
// const newArr = [{ firstName: 'Olums' }, ...arr];
// console.log(newArr);
// const arr = [2,3,4]
// function sum(numbers){
// console.log(numbers);
// }
// sum(...arr)
// const letterArr = ["a"]
// letterArr.unshift("b")
// console.log(letterArr);
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// const person1 =
// const person2 =
// const persons = {
//   firstName: 'Ayo',
//   lastName: 'Olu',
// };

// console.log(..."persons");
// console.log("p","e",);
// REST PATTERN
// const arr = [1,2, ...[3,4]];
// const friends = ["Adekunle", "Dumebi", "Kate", "Tayo", "Dara"]
// const [...others] = friends;
// console.log(bf1);
// console.log(bf2);
// console.log(others);

// SHORT CIRCUITING (&& AND || )
// console.log(true || false);
// console.log("Hello" || "Ayo");
// 1)use any data type
// 2)can return any data type
// 3)short circuit
// console.log('' || true || 0 || 'Balablu');
// console.log(undefined || "" || NaN);
// console.log(undefined || 0 || 'Hello' || 20 || null);
// console.log(0 && "Ayo");
// function logger() {}
// console.log(logger() && '' && 'Hello' || 20 || 'Fuel');

// looping arrays with the for of loop

// for (let i = 0; i < movements.length; i++) {
//   console.log(movements[2]);
// }
// for of

// for (const movement of movements) {
//  console.log(movement);
// }
// console.log(movements.entries());
// for (const element of elements){}

// first class and higher order functions
// const button = "Button"
// button.addEventListener("click", function(){

// })
// data transformation methods
// for each method

// for (const x of movements) {
//   if (x > 0) {
//     console.log(`you deposited ${x} `);
//   } else {
//     console.log(`you withdrew ${-x} `);
//   }
// }

// movements.forEach((el, i, arr) => {
//   if (bunny> 0) {
//     console.log(`${fuel + 1} you deposited ${bunny} `);
//   } else {
//     console.log(`${fuel + 1} you withdrew ${-bunny} `);
//   }
//   console.log(arr);
// });

// map

const usdToNaira = 860;
// const movementsInUSD = [];
// for (const movement of movementsInNaira) {
//   movementsInUSD.push(Math.round(movement / usdToNaira));
// }
// console.log(movementsInUSD)

// map
// map method loops over the array
// const movementsInUSD = movementsInNaira.map(currentEl => currentEl / usdToNaira);
// console.log(movementsInUSD);

// filter method
// const deposits = [];
// for (const mvt of movementsInNaira){
//   if (mvt > 0){
//     deposits.push(mvt)
//   }
// }
// console.log(deposits);
// const deposits = movementsInNaira.filter(el => {
//   return el > 0;
// });
// console.log(deposits);

// reduce
// const movementsInNaira = [1000, 3000, -4000, 2000, -5000];
// method chaining
// const sumOfMovementsInUSD = movementsInNaira
//   .map(currentEl => currentEl / usdToNaira) //return array
//   .reduce((acc, el) => {
//     return acc + el;
//   }, 0);
// // 2nd example of method chaining
// const sumOfDeposits = movementsInNaira
//   .filter(el => el > 0)
//   .reduce((acc, el) => acc + el, 0);
// console.log(sumOfDeposits);
// const sumOfMovementsInUSD = movementsInUSD.reduce((acc, el)=>{
// return acc + el
// }, 0)
// console.log(sumOfMovementsInUSD);
// const sumOfMovementsInNaira = movementsInNaira.reduce((acc, el) => acc + el, 0);
// console.log(sumOfMovements);

// ==================CLASS WORK STARTS HERE==================================

/*
1)
You are given an array of numbers called numArray. Your task is to use the map method to create a new array called squaredArray, where each element is the square of the corresponding element in numArray. Implement the function squareArrayElements to achieve this.
*/
// const numArray = [1, 2, 3, 4, 5];
// function squareArrayElements(numArray) {
//   // Your code here
  // return numArray.map(el => {
  //   return el ** 2;
  // });
// }

// Test case

// const squaredArray = squareArrayElements(numArray);
// console.log(squaredArray); // Output should be: [1, 4, 9, 16, 25]

/*
2.
You are given an array of integers called numArray. Your task is to use the filter method to create a new array called evenNumbers, which only contains the even numbers from numArray. Implement the function filterEvenNumbers to achieve this. */
function filterEvenNumbers(numArray) {
  // Your code here
  return numArray.filter(el => el % 2 === 0);
}

// Test case
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); // Output should be: [2, 4, 6, 8, 10]
//=========================== Challenge 3 starts here=============================
/*
3
You are given an object representing a book. Your task is to use destructuring to extract specific properties from the object. Complete the function getBookInfo to achieve this.
*/

function getBookInfo(book) {
  // Your code here
}

// // Test case
// const bookInfo = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   year: 1925,
//   genre: 'Fiction',
//   pages: 180,
// };

// Destructure the 'bookInfo' object using the 'getBookInfo' function
// to extract 'title', 'author', and 'year' properties
const { title, author, year } = getBookInfo(bookInfo);
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);
console.log(`Year: ${year}`);

//=========================== Challenge 3 ends here=============================
/*
Write a function called mergeArrays that takes any number of arrays as arguments and returns a single array containing all the elements from each input array using the spread operator.
*/
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const arr3 = [6, 7, 8];

const mergedArray = mergeArrays(arr1, arr2, arr3);

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
/*
Challenge Requirements:

The mergeArrays function should take any number of arrays as arguments.
It should return a single array containing all the elements from the input arrays.
The original arrays should remain unchanged.

*/

/*
Hints:

1.Use the spread operator to concatenate the arrays.
2.The spread operator can be used in function arguments to represent an indefinite number of arguments as an array.
*/