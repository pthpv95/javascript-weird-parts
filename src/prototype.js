var firstname = "Hien",
  lastname = "pham";

var basePeople = {
  getFullName: function(title) {
    title = title || "";
    return "Hola " + title + this.firstname + " " + this.lastname;
  }
};

john = {
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

People.prototype.greet = function() {
  console.log("Hello!!" + this.fullname);
};

people1 = new People("kim", "park");

people2 = new People("Hien", "Pham");

people2.greet();
// console.log(people1.color);
// console.log(people1);

// Built in function constructors

var myName = new String("John");

var number = new Number(1);
