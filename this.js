// The ‘this’ keyword refers to the current object/function/method that they are 
// working with and it’s not peculiar to Javascript, it’s also available in other 
// languages as well, but here in Javascript it behaves differently compared to 
// those languages. In Javascript, the context of ‘this’ differs based on how you 
// call, and whether it’s been executed in strict mode or non-strict mode.


// In the browser console if you type ‘this’ then it will print the window object 
// for you, and in node.js REPL if you type this it will print the globalThis.

// As already mentioned the ‘this’ keywords context differs based on where and how 
// it’s been called. When called in strict mode, the context of ‘this’ will be undefined. 
// But you can set the context for ‘this’ using either call() or apply() or bind() functions.


// In the above example, the function foo() uses strict mode, and thus the value of ‘this’ 
// becomes undefined and throws an error when we try to access a property from it. 
// But if we have tried the same function without the ‘use strict’ then ‘this’ would have 
// pointed to the global context and ‘this.name’ would have printed ‘Global name’.
// Also as you could see on the next line we have created an object(obj), and after that 
// when we did foo.call(obj) and foo.apply(obj) we got the output of ‘bar’, that is because 
// both the call() & apply() function sets the value of ‘this’ into whatever we pass as the first argument to them.
// The difference between the call() and apply() is that, call() expects the parameters 
// to passed as individual arguments, but in apply() the arguments are provided as an array.
// call:
// foo.call(obj, a, b);
// apply:
// foo.apply(obj, [a, b])
// There is one more way to achieve the same which is .bind() and the difference between bind()
//  and the other two is that when we use .bind() it returns a new function and does not execute 
//  the function right away like call() and apply().
// const bar = foo.bind(obj)
// bar();

// When a function is defined within the scope of an object or class then it is called as a method. 
// Though they may appear like there are only syntactical differences but, there are some behavioral 
// differences as well. One to start with is the behavior of ‘this’ inside a function and a method.

// Within a method: ‘this’ refers to the current object/owner the method belongs.

// Within a function: By default, the ‘this’ points to the global object. When invoked using the 
// call() or apply() or bind() function then it refers to whatever argument we have passes to them. 
// When a function is called as a constructor using the new, then the ‘this’ refers to the new instance.
// ‘this’ when used inside a function and method
// ‘this’ when used inside a function and method

// Method:
// As you could see in the first case greet() is a method inside the object, and when we call greet it 
// returns ‘I am a method’ because the ‘this’ inside greet(method) refers to the current object/owner which is here foo.

// Function:
// In the second case bar() is a function and the ‘this’ was not set while calling the function 
// so the ‘this’ inside it points to the global object, and since the constant message was set 
// in the global object, bar() prints ‘I am a function’.

// Arrow Function:
// Arrow function is the new addition to the Javascript family ever since the release of ES6, 
// and this made the traditional functions look more cleaner and easy to visualize, but unlike 
// a normal function the arrow function has a different behavior of ‘this’.
// The arrow functions have lexical scoping and thus the ‘this’ inside an arrow function 
// points to the closest function/method scope.
// ‘this’ behavior inside an arrow function
// ‘this’ behavior inside an arrow function
// Here foo is an object with a method named fooMethod() and another method named arrowFunc() 
// which uses the ES6 arrow functions. If you see the result of both the cases the ‘this.language’ rendered different results.
// In arrowFunc() ‘this.language’ returns undefined but in fooMethod(), it returned ‘JavaScript’.
// As mentioned earlier, arrow function has lexical scoping and ‘this’ points to the nearby 

// function scope, here foo is an object and not a function, and there are no other functions 
// wrapping foo so ‘this’ points to the global object and we haven’t set any key in the global 
// object as language. so the arrowFunc() printed undefined when we tried ‘this.language’.
// Whereas for fooMethod() the ‘this’ points to the current working object(foo) and thus it 
// prints ‘JavaScript’. Now let’s try the same example with an arrow function declared within a normal function.
// ‘this’ behavior inside an arrow function when it’s wrapped with a function
// ‘this’ behavior inside an arrow function when it’s wrapped with a function

// arrowFunc(): Here the ‘this’ points to the nearby function scope which is foo(), 
// which has a ‘this’ pointing to the global object and we have appended a key ‘language’ 
// to the ‘this’ of foo(). So when we try ‘this.language’ in the arrowFunc() it prints ‘JavaScript’ is simple.
// ‘this’ for a normal function is determined based on the below steps:
// If it was explicitly set using call(), apply() or bind() then the values set in the argument is used as ‘this’.
// If the function is called as a constructor then it points to the new instance values provided
// If there is no explicit value provided then it defaults to the global object