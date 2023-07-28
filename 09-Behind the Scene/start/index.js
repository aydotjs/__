"use strict";
/*
function greeter() {
  const lastName = "Dumebi";
  console.log(lastName);
  console.log(5 * 20);
}
greeter();


const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
};
calcAge(2000);

const person1 = {
  firstName: "Kate",
  output: function () {
    console.log(`My name is ${person1.firstName}`);
  },
};
person1.output();
*/
/*
const first = function () {
  console.log("I am in the first function");
  fifth();
};
const second = function () {
  console.log("I am in the second function");
};
const third = function () {
  console.log("I am in the third function");
  first();
};
const fourth = function () {
  console.log("I am in the fourth function");
  third();
};
function fifth() {
  console.log("I am in the fifth fuction");
}
fourth();
*/

// const firstName = "Dumebi";
// function sayHello (){
//     const lastName = "Kate";
//     console.log(`Hello ${lastName}`);
//     console.log(`Hello ${firstName}`);
// }
// sayHello()
// let a = 20;
// function outer() {
// //   let a = 20;
//   function inner() {
//     console.log(a);
//     function innerMost() {
//       console.log(a);
//     }
//     innerMost();
//   }
//   inner();
// }

// outer()

// arr = ["red","blue"]

// function sayHello(){
//   const greeting = "Hi"
// }
// const greet = "Hello"
// Global scope
// const greet = "Hello";
// function balablu() {
//   console.log(greet);
// }
// balablu();
// if (true) {
//   console.log(greet);
// }

// Function scope
// const greet = "Hello"
// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   function printAge() {
//     console.log(`My age is ${age}`);
//     console.log(greet);
//   }
//   printAge();
// }
// calcAge(2000);

// Block Scope
// if (true) {
//   var x = 5;
// }
// console.log(x);
// function random() {
//   var x = 5;
// }
// random();
// console.log(x);

// if (true) {
//   var a = 5;
// }
// console.log(a);
// SCOPE CHAIN
// const balablu = "hello";
// function calcAge() {
//   const age = 2022 - 2000;
//   function printAge() {
//     const x = 56;
//     console.log(`I am ${age} years old`);
//   }
//   printAge();
// }
// calcAge();
// const a = 5
// HOISTING AND TEMPORAL DEAD ZONE
// sayHello()
// function sayHello (){

// }
// console.log(birthYear);
// let birthYear =  2000;
// console.log("Hello world");

// let hello = 20;
// hello = 50;
// sayHello()
// var sayHello = function(){

// }

// function sayHello() {
//   const age = 20;
//   console.log(`My age is ${age} and I am a ${job}`);
//   const job = "Programmer";
// }
// sayHello();

// console.log(this);
// function hello() {
//   console.log(this);
// }
// hello();
// const obj = {
//   sayHello: function () {
//     console.log();
//   },
// };
// obj.sayHello()
// const button = document.querySelector("button")
// button.addEventListener("click", function(){

// })
// const person1 = {
//   firstName: "Ciroma",
//   lastName: "Adekunle",
//   birthYear: 2000,
//   calcAge: function () {
//     console.log(
//       `My name is ${this.firstName} and I am ${2023 - this.birthYear} years old`
//     );
//   },
// };
// person1.calcAge();
// const person2 = {
//   firstName: "Kate",
//   lastName: "Adeyemi",
//   birthYear: 2002,
//   calcAge: function () {
//     console.log(
//       `My name is ${this.firstName} and I am ${2023 - this.birthYear} years old`
//     );
//   },

// };
// console.log(arr);
// function regularFnDecl() {
//   console.log(this);
// }
// regularFnDecl();

// const regularFnExp = function () {
//   console.log(this);
// };
// regularFnExp();

// Arrow fns do not have  the this key word
const arrowFn = () => {
  console.log("Hello");
};
arrowFn()