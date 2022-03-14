function flatten(arr) {
  let flattenArr = [];
  arr.forEach(el => {
    if(Array.isArray(el)){
      const result = flatten(el);
      result.forEach(el => flattenArr.push(el));
    } else {
      flattenArr.push(el);
    }
  });
  return flattenArr;
}

const input = [1,2,3,[4,5,[6,7]],8,[9,[10,11]]];
const output = flatten(input);

console.log(output);
// We have used recursion to solve this problem

// Algorithm steps:

// First, we iterate through the given array.
// Then check each element:
// if it is not an array then push the elements in an updated array.
// if it is an array then again call the same function flatten() i.e. recursion. 
// Then we will combine our updated array and return values of flatten() 
// using the spread operator in ES6. This will keep flatting the updated array.


///Through JS Built in methods
const input = [1,2,3,[4,5,[6,7]],8,[9,[10,11]]]

let output = input.reduce((flattenArr, el)=>{
  if(Array.isArray(el)){
    flattenArr = flattenArr.concat(el.flat(2))
  }else{
    flattenArr.push(el)
  }
  return flattenArr
}, [])

console.log(output)