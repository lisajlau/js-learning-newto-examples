function Person(first, last, age, gender, interests) {
    this.name = {
        first,last
    };
    this.age = age;
    this.gender = gender;
    this.interest = interests;
    this.anything = "anything";
}

Person.prototype.greeting = function() {
    alert("hi! " + this.name.first);
}

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.contrusctor = Teacher;

function Employee(name, dept) {
    this.name = name || "";
    this.dept = dept || "engineering";
}

function WorkerBee(projects) {
    Employee.call(this);
    this.projects = projects || [];
}

WorkerBee.prototype = Object.create(Employee.prototype);
WorkerBee.prototype.constructor = Employee;

function Engineer(name, dept) {
    WorkerBee.call(this);
    this.dept = dept;
}

Engineer.prototype = Object.create(WorkerBee.prototype);
Engineer.prototype.constructor = WorkerBee;

var jane = new Engineer("belau", "mecheng");

// Our base "class" Animal
function Animal(name) {  
    this.me = name;
}
// Some base "class" methods
Animal.prototype.who = function() {  
    return "I am " + this.me;
};
Animal.prototype.speak = function() {  
    // What should this do? I dunno...
    console.log("(Animal) speak!");
}

// A child "class" that "inherits" from Animal
function Dog(name) {  
    Animal.call(this, name);
}
// Ensure we properly inherit from our base class
Dog.prototype = Object.create( Animal.prototype );  
Dog.prototype.constructor = Dog;

// Add our own 'speak' method and call our base class 'speak' as well
Dog.prototype.speak = function() {  
    Animal.prototype.speak.call(this); 
    console.log("Hello, " + this.who() + "." );
};

// Puppies! Awwwww
var fluffy = new Dog( "Fluffy" );  
var spot = new Dog( "Spot" );  


/******* Functional inheritance ********/

// Base object constructor function
function base(spec) {
    var that = {}; // Create an empty object
    that.name = spec.name; // Add it a "name" property
    return that; // Return the object
}

// Construct a child object, inheriting from "base"
function child(spec) {
    var that = base(spec); // Create the object through the "base" constructor
    that.sayHello = function() { // Augment that object
        return 'Hello, I\'m ' + that.name;
    };
    return that; // Return it
}

// Usage
var object = child({ name: 'a functional object' });
result.textContent = object.sayHello();



/******* prototypal inheritance ********/

// Function wiring prototypes to achieve inheritance
function inherits(Parent, Child) {
    function F() {}
    F.prototype = Parent;
    Child.prototype = new F();
}

// Base class
function Base(spec) {
    this.name = spec.name; // Define the "name" property
}

// Child class
function Child(spec) {
    Base.call(this, spec); // Call the base class constructor
}
inherits(Base, Child); // Wire prototypes
Child.prototype.sayHello = function () { // Define the "sayHello" method
    return 'Hello, I\'m ' + this.name;
};

// Usage
var object = new Child({ name: 'a prototypal object' });
result.textContent = object.sayHello();