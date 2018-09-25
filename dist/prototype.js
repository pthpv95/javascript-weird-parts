"use strict";

var firstname = "Hien",
    lastname = "pham";

var basePeople = {
  getFullName: function (title) {
    title = title || "";
    return "Hola " + title + this.firstname + " " + this.lastname;
  }
};

var john = {
  firstname: "firstname",
  lastname: "lastname"
};

_.extend(john, basePeople);

console.log(john.getFullName());

console.log(basePeople.getFullName.call(this, "Mr"));

// Function constructor used for constructing objects
// Always make first capital letter of the name when creating function constructor
function People(firstname, lastname) {
  console.log(this);

  this.fullname = firstname + lastname;
}

People.prototype.color = "Red";

People.prototype.greet = function () {
  console.log("Hello!!" + this.fullname);
};

// people1 = new People("kim", "park");

// people2 = new People("Hien", "Pham");

// people2.greet();
// console.log(people1.color);
// console.log(people1);

// Built in function constructors

var myName = new String("John");

var number = new Number(1);

let f = function () {
  this.a = 1;
  this.b = 2;
};

let o = new f();

f.prototype.b = 3;
f.prototype.c = 4;

var car = function (model) {
  model = model || "";
  this.model = model;
};

var carProto = Object.create(o);

car.prototype = carProto;
var carObj = new car();

console.log(carObj.hasOwnProperty("a"));

// Init object
function foo() {}

foo.prototype = {
  foo_prop: "foo val"
};

function bar() {}

var proto = Object.create(foo.prototype, {
  bar_prop: {
    value: "bar prop"
  }
});

bar.prototype.dance = function () {
  console.log("Let dance!");
};
bar.prototype = proto;

var newBar = new bar();

function doSomeThing() {
  this.things = "doSomeThing val";
}

var dostintance = new doSomeThing();

var childOfDoSomeThing = Object.create(dostintance);

function Animal(name) {
  this.name = "name";
}
// using prototype to share the getName function.
// All the object points to the same to object prototype
Animal.prototype.getName = function () {
  return this.name;
};

function Dog(age) {
  // Animal.call(this, name);

  this.age;
}

Dog.prototype = new Animal();

Dog.prototype.getSubAge = function () {
  return this.age;
};

var dogObj = new Dog(20);

console.log("sdsdsd");