console.log('-----------Learn apply, bind, call----------');

var Animal = function (name, weight) {
  this.name = name;
  this.weight = weight;
  this.introduce = function () {
    console.log("My name is " + this.name + "I'm " + this.weight + "kg");
  };
};

var animal = new Animal("Jiji", 15);
// console.log(animal);
animal.introduce();

var Dog = function (name) {
  this.name = name;
};

function bark(nationality) {
  console.log(nationality);
  console.log(this.name + " is barking go go!!!");
}

// borrowing function
bark.apply(Dog("Kitty"), ["es", "en", "pq"]);

var people = {
  firstname: "Hien",
  lastname: "pham",
  getFullName: function () {
    console.log(this.firstname + this.lastname);
  }
};

// currying function
function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2);

var result = multipleByTwo(5);
console.log(result);

console.log('-----------End here----------')