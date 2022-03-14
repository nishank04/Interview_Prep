// Clearing all timeouts can be useful for testing or debugging. 
// Firstly, clearing timeouts is simple when you have their ids:

const timeoutId = setTimeout(() => {
  console.log('Should never show');
}, 500);

clearTimeout(timeoutId);
console.log('(Nothing should appear)');

//Though when their ids are not present (e.g. the setTimeout was part of a complex library), 
// more complex tactics need to be used. The most obvious strategy is to override setTimeout 
// to store each timeoutId before any code, including library code runs:

let globalObject;
if (typeof window === 'undefined') {
  globalObject = global;
} else {
  globalObject = window;
}

let allTimeoutIds = [];
const originalTimeout = setTimeout;
// Use a function instead of () => to ensure this can be overridden.
globalObject.setTimeout = function(callback, timeInMS) {
  const timeoutId = originalTimeout(callback, timeInMS);
  allTimeoutIds.push(timeoutId);
};

const originalClearTimeout = clearTimeout;
globalObject.clearTimeout = function(timeoutId) {
  allTimeoutIds = allTimeoutIds.filter((id) => id !== timeoutId);
  originalClearTimeout(timeoutId);
};

// Somewhere much later in code...

setTimeout(() => {
  console.log('Should never show 2');
}, 300);

setTimeout(() => {
  console.log('Should never show 3');
}, 400);

for (const id of allTimeoutIds) {
  clearTimeout(id);
}
console.log(allTimeoutIds)
// []

//Although this approach is easy to extend, it is getting pretty complex and introduces 
// overhead to every setTimeout and clearTimeout call. A better alternative is to use the 
// natural order of timeout ids though this only works with browser code and not Node.js unlike the above:

function createClearAllTimeouts() {
  const noop = () => {};
  let firstId = setTimeout(noop, 0);

  return () => {
    const lastId = setTimeout(noop, 0);
    while (firstId !== lastId) {
      firstId += 1;
      clearTimeout(firstId);
    }
  };
};
const clearAllTimeouts = createClearAllTimeouts();

setTimeout(() => {
  console.log('Should never show 4');
}, 300);

setTimeout(() => {
  console.log('Should never show 5');
}, 400);

clearAllTimeouts();