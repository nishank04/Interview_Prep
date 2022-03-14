// What is a closure?
// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.
// The closure has three scope chains:
// it has access to its own scope — variables defined between its curly brackets
// it has access to the outer function’s variables
// it has access to the global variables

function parent() {
    var house = 'WhiteHouse';
   
    function child() {   
        var car = 'Tesla'; 
        console.log('I have:', house, car);
    }
   
    return child;
}
var legacy = parent();
console.log(typeof(legacy)); //legacy is of type function
legacy(); //I have: WhiteHouse Tesla

// Here we have two functions:
// an outer function parent which has a variable house, and returns the child function
// an inner function child which has its variable called car, and accesses a parent variable house, within its function body
// The scope of variable house is limited to the parent function, and the scope of variable car is limited to the child function.
// On invoking the parent() function, the result of the parent() function is stored in variable legacy which is of type function.
// So now let’s examine step-by-step what happens when legacy() function is invoked:
// Variable car is created, and its value is set to Tesla
// JavaScript now tries to execute console.log('I have: ', house, car) — Here is where things get interesting. 
// JavaScript knows that car exists since it just created it. However, variable house no longer exists. 
// Since house is part of the parent function, house would only exist while the parent() function is in execution*. 
// Since the parent() function finished execution long before we invoked legacy(), any variables 
// within the scope of the parent function cease to exist, and hence variable house no longer exists.
// *The variables inside the functions only come into existence when the function is running, 
// and cease to exist once the functions completes execution.
// How does JavaScript handle this?
// Closures
// The child function can access the variables of the enclosing function due to closures in JavaScript 
// — In other words, during the course of execution the parent function passes its scope chain 
// to the child function as legacy, and thus child function can access the preserved legacy variables.
// In our example, the child function had preserved the legacy variable house='WhiteHouse' 
// when the parent() function was executed, and continued to preserve (closure) it.
// On child() function execution, it now refers to its own scope chain and notices that 
// it does have the value of variable house within its scope chain, since it had preserved the 
// legacy variable house within a closure at the point when the parent function had executed.
// Thus, JavaScript knows car='Telsa' and house='WhiteHouse', and can execute console.log('I have: ', house, car);
// Closures store references to the outer function’s variables
// They do not store the actual value — so the value of the outer function’s variable 
// can be changed before the closure is called — this powerful feature can be harnessed in creative ways.
// Closures as Legacy
// To drive home the point of closures as legacy, let’s take an example of another nested functions:


function grandParent() {
    var house = 'GreenHouse';
   
    function parent() {   
        var car = 'Tesla';
        house = 'YellowHouse';
        function child() {   
            var scooter = 'Vespa';
            console.log('I have:', house, car, scooter);
        }
        
        return child;
    }
   
    return parent;
}
var legacyGenX = grandParent();
console.log(typeof(legacyGenX)); //legacyGenX is of type function
var legacyGenY = legacyGenX();
console.log(typeof(legacyGenY)); //legacyGenY is of type function
legacyGenY(); // I have: YellowHouse Tesla Vespa

// In the above example, we have three functions — grandParent() , parent() and child() nested 
// inside each other with variables home , car and scooter respectively.
// As per the concept of Closures in JavaScript, the inner most nested function preserves 
// the scope chain of enclosing functions, thus child() function will be able to access variables — house and car .
// Similarly, as per the concept of Legacy — grandParent() passes their house to parent() 
// who decides to change the color of the house from green to yellow and in-turn passes the house and car to their child():