//ACTIVATING STRICT MODE
"use strict";
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
// const arr = [1,2,3,4]
// console.log(arr);
// const friend1 = {
//     firstName: "Ciroma",
//     lastName : "Adekunle",
//     birthYear : 2003,
//     complexion: "Fair skinned",
//     job: "Teacher",
//     calcAge : function(bulaba){
//         const age = 2023 - bulaba;
//         console.log(`ciroma's age is ${2023 - bulaba}`);
//         return age;
//     }
// }
// console.log(friend1.firstName);

// console.log(friend1.firstName);
// const result = friend1.calcAge(friend1.birthYear)
// console.log(result);

// DOT VS BRACKET NOTATION
// console.log(friend1.firstName);
// const x = lastName;
// console.log(friend1[x]);
// console.log(friend1.complexion);

// const interest = prompt(
//   "What are you interested in, firstName, lastName, birthYear, job, complexion"
// );
// if(friend1[interest]){
//   console.log(friend1.interest)
// }else{
//   console.log(`Wrong request,choose between  firstName, lastName, age, job, complexion `)
// }

// OBJECT METHODS
// const friend1 = {
//     firstName: "Ciroma",
//     lastName : "Adekunle",
//     birthYear : 2003,
//     complexion: "Fair skinned",
//     job: "Teacher",
//     calcAge(){
//         console.log(`ciroma's age is ${2023 - this.birthYear}`);
//     },
//     getSummary(){

//         console.log(`My name is ${this.firstName} ${this.lastName}, I was born in year ${this.birthYear} and I am a ${this.job} who is ${this.complexion}`);
//     }
// }
// friend1.calcAge()
// friend1.getSummary()

// const friend2 = {
//     firstName: "Kate",
//     lastName : "Dumebi",
//     birthYear : 2000,
//     complexion: "Chocolate",
//     job: "Teacher",
//     calcAge(birthYear){
//         console.log(`ciroma's age is ${2023 - birthYear}`);
//     },
//     getSummary(){
//         console.log(`My name is ${this.firstName} ${this.lastName}, I was born in year ${this.birthYear} and I am a ${this.job} who is ${this.complexion}`);
//     }
// }
// friend2.getSummary()
// const friend3 = {
//     firstName: "Mariam",
//     lastName : "Christian",
//     birthYear : 1999,
//     complexion: "Dark skinned",
//     job: "Programmer",
//     calcAge(birthYear){
//         console.log(`ciroma's age is ${2023 - birthYear}`);
//     },
//     getSummary(){
//         console.log(`My name is ${this.firstName} ${this.lastName}, I was born in year ${this.birthYear} and I am a ${this.job} who is ${this.complexion}`);
//     }
// }
// friend3.getSummary()

//loops
// const inputNumber = Number(prompt("Enter a number")) ;
// if(typeof inputNumber === "number" && inputNumber <= 10){
//   for (let i = 1; i <= 12; i++) {
//     // const product = 5 * i;
//     console.log(`${inputNumber} * ${i}  = ${inputNumber * i}`);
//   }
// }
// Generate Multiplication table 1 -5
// Multiplication table 1
// 1 * 1 = 1
// 1* 2 = 2
//1 * 12 = 12
// Multiplication table 2
// 2 * 1 = 2
// 2 * 2 = 4
//3 * 12 = 36

const friends = ["Ciroma", "Dumebi", "Kate", "Kelechi"];
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// for(let i = 0; i < friends.length; i++ ){
// console.log(friends[i]);
// }
//arr.length

// Looping backwards
// for(let i = 10; i >= 0; i--){
// console.log(i);
// }

// While loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
