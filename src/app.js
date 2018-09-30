// import {
//   doSomething
// } from './promise';

var myObj = {},
  version = "1.0.0";

myObj.fn = myObj.prototype = {
  myobj: version
};

var yeze = Object.create(myObj);

yeze.prototype.hula = function () {
  return "ula";
};

console.log(myObj.fn.myobj);

function Person(name) {
  this.name = name;

  console.log(name);
}

Person.prototype.greet = function () {
  return "Hello " + this.name;
};

var alex = new Person("alex");

// Check the object whether has refers to its prototype
console.log(Object.getPrototypeOf(alex) === Person.prototype);

console.log(Object.getPrototypeOf(Person) === Function.prototype);

Person.call(this, "abccd");

function isNumeric() {
  // return jQuery.isArray();
}


// doSomething(200).then(() => console.log('Done!!'));