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
const movements = [1000, 3000, -4000, 2000, -5000];
const usdToNaira = 860
const movementsInDollar = []
for(const x of movements){
  movementsInDollar.push(x/usdToNaira)
}
console.log(movementsInDollar);