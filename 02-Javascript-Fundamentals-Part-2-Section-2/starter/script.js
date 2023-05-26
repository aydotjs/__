//ACTIVATING STRICT MODE
"use strict";
//FUNCTIONS
// const a = 20;
// function greeter (bunny, teddy){
//   console.log("hello");
// }
// greeter("Ay")

// function sum() {
//   console.log(a + x);
// }
// sum(5);

// function subtract(x, a) {
// const b = x - a;
// return b;
// }

// const x = subtract(20,5)
// console.log(x);
// FUNCTION DECLARATION AND FUNCTION EXPRESSION
// function sayHello(){
// console.log("say hello");
// }
// sayHello()

// calcAge(2004)
// // FUNCTION DECLARATION
// function calcAge(birthYear){
// const age = 2023 - birthYear;
// console.log(age);
// }

// const teddy = function(birthYear){
// const age =  2023 - birthYear;
// console.log(age);
// }
// teddy(2002);

//ARROW FUNCTION

// const calcAgeExp = function (birthYear) {
//   return 2023 - birthYear;
// };

// console.log(calcAgeExp(2002));

// *********************************
// const calcAgeArr = birthYear => 2023 - birthYear;
// console.log(calcAgeArr(2005));
//FUNCTIONS CALLING FUNCTIONS
// const firstFunction = function () {
//   secondFunction();
//   console.log("Heyy, I am in the first function");
// };
// firstFunction();
// function secondFunction() {
//   thirdFunction();
//   console.log("Heyy, I am in the second function");
// }
// function thirdFunction () {
//   console.log("Heyy, I am in the third function");
// };

//BASIC ARRAY OPERATIONS
// const friends = ['KB', 'Philips', 'Jazpal']
//ADDING ELEMENTS TO ARRAY
// friends.push("Adekunle")
// friends.push("Victor")
// friends.unshift("Bimbo")
//REMOVING ELEMENTS FROM AN ARRAY
// friends.pop();
// friends.shift();
// if(friends.includes("Jay")){
//     console.log("Hello Mr Jazpal");
// }

// console.log(friends.indexOf("Kelechi")); 

//JAVASCRIPT OBJECTS
const arr = [1,2,3,4]
console.log(arr);
const friend1 = {
    firstName: "Ciroma",
    lastName : "Adekunle",
    birthYear : 2003,
    calcAge : function(bulaba){
        const age = 2023 - bulaba;
        console.log(`ciroma's age is ${2023 - bulaba}`);
        return age;
    }
}
console.log(friend1.firstName);
const result = friend1.calcAge(friend1.birthYear)
console.log(result);




// const day = "friday";
// switch (day) {
//   case "monday": //day==="monday"
//     console.log("Going to the gym");
//     break;
//   case "tuesday":
//   case "wednesday":
//     console.log("Going to the spa");
//     break;
//   case "thursday":
//     console.log("Going to the clinic");
//     break;
//   case "friday":
//     console.log("Going to the club");
//     break;
//   default:
//     console.log("invalid");
// }

