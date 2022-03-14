// Prototypes are the mechanism by which JavaScript objects inherit features from one another

const myObject = {
  city: 'Madrid',
  greet() {
    console.log(`Greetings from ${this.city}`);
  }
}

myObject.greet(); // Greetings from Madrid

// This is an object with one data property, city, and one method, greet(). 
//If you type the object's name followed by a period into the console, like myObject., 
//then the console will pop up a list of all the properties available to this object. 
//You'll see that as well as city and greet, there are lots of other properties!

// __defineGetter__
// __defineSetter__
// __lookupGetter__
// __lookupSetter__
// __proto__
// city
// constructor
// greet
// hasOwnProperty
// isPrototypeOf
// propertyIsEnumerable
// toLocaleString
// toString
// toValueOf


// Try accessing one of them:

// myObject.toString(); // "[object Object]"
// Copy to Clipboard
// It works (even if it's not obvious what toString() does).

// What are these extra properties, and where do they come from?

// Every object in JavaScript has a built-in property, which is called its prototype. 

// The prototype is itself an object, so the prototype will have its own prototype, 
// making what's called a prototype chain. The chain ends when we reach a prototype 
// that has null for its own prototype.

// Note: The property of an object that points to its prototype is not called prototype. 
// Its name is not standard, but in practice all browsers use __proto__. 
// The standard way to access an object's prototype is the Object.getPrototypeOf() method.

// When you try to access a property of an object: if the property can't 
// be found in the object itself, the prototype is searched for the property. 
// If the property still can't be found, then the prototype's prototype is searched, 
// and so on until either the property is found, or the end of the 
//chain is reached, in which case undefined is returned.

// So when we call myObject.toString(), the browser:

// looks for toString in myObject
// can't find it there, so looks in the prototype object of myObject for toString
// finds it there, and calls it.
// What is the prototype for myObject? To find out, we can use the function Object.getPrototypeOf():

// Object.getPrototypeOf(myObject); // Object {...}
// Copy to Clipboard
// This is an object called Object.prototype, and it is the most basic prototype, 
// that all objects have by default. The prototype of Object.prototype is
// null, so it's at the end of the prototype chain:


// Setting a prototype
// There are various ways of setting an object's prototype in JavaScript, 
//and here we'll describe two: Object.create() and constructors.



// Using Object.create
// The Object.create() method creates a new object and allows you to specify an object 
//that will be used as the new object's prototype.

// Here's an example:

const personPrototype = {
    greet() {
      console.log('hello!');
    }
  }
  
  const carl = Object.create(personPrototype);
  carl.greet();  // hello!

//   Here we create an object personPrototype, which has a greet() method. 
//   We then use Object.create() to create a new object with personPrototype as its prototype. 
//   Now we can call greet() on the new object, and the prototype provides its implementation.




// Using a constructor

// In JavaScript, all functions have a property named prototype. When you call a 
// function as a constructor, this property is set as the prototype of the newly constructed 
// object (by convention, in the property named __proto__).

// So if we set the prototype of a constructor, we can ensure that all objects 
// created with that constructor are given that prototype:

const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    }
  }
  
  function Person(name) {
    this.name = name;
  }
  
  Person.prototype = personPrototype;
  Person.prototype.constructor = Person;


//   Here we create:

//   an object personPrototype, which has a greet() method
//   a Person() constructor function which initializes the name of the person to create.
//   We then set the Person function's prototype property to point to personPrototype.
  
//   The last line (Person.prototype.constructor = Person;) sets the 
//   prototype's constructor property to the function used to create Person objects. 
//   This is required because after setting Person.prototype = personPrototype; 
//   the property points to the constructor for the personPrototype, which is 
//   Object rather than Person (because personPrototype was constructed as an object literal).
  
//   After this code, objects created using Person() will get personPrototype as their prototype.


const reuben = new Person('Reuben');
reuben.greet(); // hello, my name is Reuben!




// Own properties

// The objects we create using the Person constructor above have two properties:
// a name property, which is set in the constructor, so it appears directly on Person objects
// a greet() method, which is set in the prototype.
// It's common to see this pattern, in which methods are defined on the prototype, 
// but data properties are defined in the constructor. That's because methods are usually the same 
// for every object we create, while we often want each object to have its own value for its data 
// properties (just as here where every person has a different name).

// Properties that are defined directly in the object, like name here, are called own properties, 
// and you can check whether a property is an own property using the static Object.hasOwn() method:

const irma = new Person('Irma');

console.log(Object.hasOwn(irma, 'name')); // true
console.log(Object.hasOwn(irma, 'greet')); // false

// Note: You can also use the non-static Object.hasOwnProperty() method here, but we 
// recommend that you use Object.hasOwn() if you can.



// Prototypes and inheritance


// Prototypes are a powerful and very flexible feature of JavaScript, 
// making it possible to reuse code and combine objects.

// In particular they support a version of inheritance. Inheritance is a feature of 
// object-oriented programming languages that lets programmers express the idea that some 
// objects in a system are more specialized versions of other objects.

// For example, if we're modeling a school, we might have professors and students: they are 
// both people, so have some features in common (for example, they both have names), 
// but each might add extra features (for example, professors have a subject that they teach), 
// or might implement the same feature in different ways. In an OOP system we might say that
//  professors and students both inherit from people.

// You can see how in JavaScript, if Professor and Student objects can have Person prototypes, 
// then they can inherit the common properties, while adding and redefining those properties which need to differ.

// In the next article we'll discuss inheritance along with the other main features of 
// object-oriented programming languages, and see how JavaScript supports them.