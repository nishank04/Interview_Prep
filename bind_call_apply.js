// bind()
// The official docs say: The bind() method creates a new function that, when called, 
// has its this keyword set to the provided value. (It actually talks about even more stuff, 
// but we’ll leave that for another time :) )
// This is extremely powerful. It let’s us explicitly define the value of this when calling a function. 
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function() {
    console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!'

// Let’s break it down. When we use the bind() method:
// the JS engine is creating a new pokemonName instance and binding pokemon as 
// its this variable. It is important to understand that it copies the pokemonName function.
// After creating a copy of the pokemonName function it is able to call logPokemon(), 
// although it wasn’t on the pokemon object initially. 
// It will now recognizes its properties (Pika and Chu) and its methods.
// And the cool thing is, after we bind() a value we can use the function 
// just like it was any other normal function. We could even update the 
// function to accept parameters, and pass them like so:

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms


// call(), apply()
// The official docs for call() say: The call() method calls a function 
// with a given this value and arguments provided individually.
// What that means, is that we can call any function, and explicitly specify 
// what this should reference within the calling function. Really similar to the bind() method! 
// This can definitely save us from writing hacky code (even though we are all still hackerzzz).
// The main differences between bind() and call() is that the call() method:
// Accepts additional parameters as well
// Executes the function it was called upon right away.
// The call() method does not make a copy of the function it is being called on.
// call() and apply() serve the exact same purpose. The only difference between how 
// they work is that call() expects all parameters to be passed in individually, 
// whereas apply() expects an array of all of our parameters. Example:

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms

//Difference b/w call and apply

//The only difference is call() method takes the arguments separated by comma while apply() method takes the array of arguments.

function fun() {
    let p = {
        fullName: function(addr1, addr2) {
            return this.fName + " " + this.lName 
                + ", " + addr1 + ", " + addr2;
        }
    }
    
    let p1 = {
        fName:"GFGfName",
        lName: "GFGlName",
    }
    
    let x = p.fullName.call(p1, "India", "USA"); 
    document.getElementById("GFG").innerHTML = x;
}

            function fun() {
                let p = {
                fullName: function(addr1, addr2) {
                    return this.fName + " " + this.lName
                            + ", " + addr1 + ", " + addr2;
                }
            }
            let p1 = {
                fName:"GFGfName",
                lName: "GFGlName",
            }
                let x = p.fullName.apply(p1, ["India", "USA"]); 
                document.getElementById("GFG").innerHTML = x;
            }

        