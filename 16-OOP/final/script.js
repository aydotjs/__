'use strict';
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const ayo = new Person('Ayo', 1805);
// const tayo = new Person('tAyo', 1805);
// const sayo = new Person('sAyo', 1805);

// Person.prototype.calcAge = function () {
//   console.log(`Hello ${this.firstName}`);
// };
// console.log(Person.prototype);
// ayo.calcAge()
// tayo.calcAge()
// //thos is the prototype of tayo
// console.log(tayo.__proto__ === Person.prototype);
// console.log(Person.prototype__ === Person.prototype);
// console.log(tayo.hasOwnProperty("firstName"));
// console.log(tayo.hasOwnProperty("calcAGe"));
// console.log(Person.prototype.constructor);
// console.log(ayo.__proto__.__proto__.constructor);
// const hi = new Object({firstName: "Tayo"})
// console.log(hi);
//  Person.prototype.calcAge = function(){
//   console.log(2037 - this.birthYear);
//  }
//  Person.prototype.greeter = function(){
//   console.log(`hey, ${this.firstName}`);
//  }
//  ayo.calcAge()
//  tayo.greeter()
//  sayo.greeter()
//  console.log(ayo.__proto__);
// /*()
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//never do this
//   this.calcAge = function () {
//     console.log(2022 - this.birthYear);
//   };
// };

// console.log(ciroma);
// console.log(dumebi);
// console.log(adekunle);
/*
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
// console.log(Person.prototype);
// console.log(Person.prototype.isPrototypeOf())
const ciroma = new Person('Ciroma', 2002);
const dumebi = new Person('dumebi', 1995);
const adekunle = new Person('Adekunle', 2005);
// console.log(Person.prototype.constructor)
const Car = function(make, speed){
this.speed = speed
this.make = make
}
Car.prototype.accelerate = function(){
  this.speed += 10
  console.log(this.speed)
}
Car.prototype.brake = function(){
  this.speed -= 5
  console.log(this.speed)
}
const bmw = new Car("BMW", 120)
const mercedes = new Car("Mercedes", 95)

bmw.accelerate()
bmw.brake()

class PersonCl {
constructor(firstName, birthYear){
this.firstName = firstName
this.birthYear = birthYear
}
//method will be added to the prototype property of the class
calcAge(){
console.log(2022 - this.birthYear)
}
greet (){
  console.log(`Hey ${this.firstName}`)
}
}
// PersonCl.prototype.greet = function(){
//   console.log("Hello my people")
// }

const bolanle = new PersonCl("bolanle", 1996)

bolanle.calcAge()
bolanle.greet()



// Setters and getters
const account = {
  owner : "Ayo", 
  movements : [200, 500, 6000],

  get latest(){
    return this.movements.at(-1)
  },
  set latest(mov){
    this.movements.push(mov)
  }

}
console.log(account.latest)
account.latest = 50
console.log(account.movements)
*/
/*
const Car = function(speed, make){
this.speed = speed;
this.make = make;
}
Car.prototype.accelerate = function(){
  this.speed += 10;
  console.log(`The speed of ${this.make} just got increased to ${this.speed}`);
}
Car.prototype.brake = function(){
  this.speed -= 10;
  console.log(this.speed);
}

const bmw = new Car(120, "BMW");
const mercedes = new Car(95, "Mercedes");
bmw.accelerate()
*/
//class declaration
// class PersonDecl {

// }
// console.log(PersonDecl);
//class expression
/*
const PersonExp = class {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    2023 - this.birthYear;
  }
};
const caro = new PersonExp('Caro', 1996);
console.log(caro);

const PersonProto = {
  calcAge : function(birthYear){
    return 2020 - birthYear
  }
}

const stevo = Object.create(PersonProto)
console.log(stevo);
*/
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(`I am ${2023 - this.birthYear} years old`);
// };

// const Student = function (firstName, birthYear, faculty, department) {
//   Person.call(this,firstName, birthYear)
//   this.faculty = faculty;
//   this.department = department;
// };
// Student.prototype = Object.create(Person.prototype)

// Student.prototype.logger = function () {
//   console.log(
//     `I am in the faculty of ${this.faculty} and department of ${this.department}`
//   );
// };
// const ayo = new Person('Ayo', 1990);
// const kate = new Student("Kate", 2003, 'BMS', 'BMLS');
// kate.logger()
// kate.calcAge()

class PersonCl {
  firstName = firstName;
  birthYear = birthYear;
  calcAge = () => {
    return 2022 - this.birthYear;
  };
}

class StudentCl extends PersonCl {
  department = depaartment;
  faculty = faculty;
  introduce = () => {
    console.log(
      `my name is ${
        this.firstName
      }, and ${this.calcAge()}  years  old. My department is ${
        this.depaartment
      } and faculty is ${this.faculty}`
    );
  };
}

const student = new StudentCl('Ayo', 2000, 'BMLS', 'BMS');
console.log(student);
