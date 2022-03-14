//Sets -  They have unique value there no repeated values. 
//Different from arrays as they are unique and orders in them are irrelevent.
//Sets doesn't have indexes, and by no way u can can getvalues out of sets
orderSets = new Set([
    'pizza',
    'Nishank',
    'Saurabh',
    'pizza',
    'Nishank'
])

cosole.log(orderSets);

console.log('Nishank');

console.log(orderSets.size)

console.log(orderSets.has('pizza')) //has method is equivalent to includes ,ethod in arrays

console.log(orderSets.has('runish'))

orderSets.add('rice')

orderSets.delete('rice')

orderSets.clear()

for (const orders of orderSets) console.log(orders)

//... spread operators work in set to make it into an arrays
//Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Chef', 'Waiter']).size);
// console.log(new Set('Garima').size);


//Maps - Map is a collection of elements where each element is stored as a Key, value pair. 
//Map object can hold both objects and primitive values as either key or value. 
//When we iterate over the map object it returns the key, value pair in the same order as inserted.

///Map Fundamentals////
// const rest = new Map();
// rest.set('name', 'BBQ');
// rest.set(1, 'Firakha, Italian');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//     .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open')
//     .set(false, 'We are close');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);

// const arr = [1, 2]
// rest.set(arr, 'Test');
// console.log(rest);
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

const question = new Map([
    ['question', 'What is the best programming language'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try Again'],  
]);
console.log(question);

//Quiz
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your Answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//Convert Map to Array
console.log(...question);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);