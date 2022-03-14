Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values. So what exactly is the difference between objects and arrays, when do you use which, and how to do work with each of them?
Objects
When to Use Objects
Objects are used to represent a “thing” in your code. That could be a person, a car, a building, a book, a character in a game — basically anything that is made up or can be defined by a set of characteristics. In objects, these characteristics are called properties that consist of a key and a value.
// Basic object syntax
var object = {
  key: 'value'
};
// Example 'person' object
var person = {
  name: 'Zac',
  age: 33,
  likesCoding: true
};
Access, Add, and Remove Items from Objects
Properties in objects can be accessed, added, changed, and removed by using either dot or bracket notation. To get the value of the age key in our personobject with both dot and bracket notation, we’d write:
// Dot notation
person.age // returns 33
// Bracket notation
person['age'] // returns 33
Say we wanted to change the value of likesCoding to false. We can do that with dot notation like this:
person.likesCoding = false;
And if we wanted to add a new property to our person object, we could accomplish that with dot notation as well:
person.hobbies = ['hiking', 'travel', 'reading'];
Finally, to remove a property from an object, we use the delete keyword like so:
delete person.age;
Check out this post on the difference between dot and bracket notation, and when to use each.
Iterating Through Objects
The most common way to loop through properties in an object is with a for…inloop:
for (var key in myObject) {
  console.log(key); // logs keys in myObject
  console.log(myObject[key]); // logs values in myObject
}
Another way to iterate through object properties is by appending the forEach()method to Object.keys():
Object.keys(myObject).forEach(function(key) {
  console.log(key); // logs keys in myObject
  console.log(myObject[key]); // logs values in myObject
});
Arrays
When to Use Arrays
We use arrays whenever we want to create and store a list of multiple items in a single variable. Arrays are especially useful when creating ordered collections where items in the collection can be accessed by their numerical position in the list. Just as object properties can store values of any primitive data type (as well as an array or another object), so too can arrays consist of strings, numbers, booleans, objects, or even other arrays.
Access, Add, and Remove Items from Arrays
Arrays use zero-based indexing, so the first item in an array has an index of 0, the second item an index of 1, and so on. For instance, let’s say we wanted to access the third item (‘Mexico City’) in the following array:
var vacationSpots = ['Tokyo', 'Bali', 'Mexico City', 'Vancouver'];
To do so, we’d write:
vacationSpots[2]; // returns 'Mexico City'
Items can be added and removed from the beginning or end of an array using the push(), pop(), unshift(), and shift() methods:
// push() - Adds item(s) to the end of an array
vacationSpots.push('Miami');
// pop() - Removes the last item from an array
vacationSpots.pop();
// unshift() - Adds item(s) to the beginning of an array
vacationSpots.unshift('Cape Town', 'Moscow');
// shift() - Removes the first item from an array
vacationSpots.shift();
Iterating Through Arrays
We can loop through items in an array in a few ways. First there’s the standard for loop:
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]); // logs items in myArray
}
There’s also the for…of loop:
for (var item of myArray) {
  console.log(item); // logs items in myArray
}
Or we can utilize the forEach() method:
myArray.forEach(item) {
  console.log(item); // logs items in myArray
});