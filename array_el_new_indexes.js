var arr = ["a","b","c","d","e","f"];
var indices = [2, 3, 4, 0, 5, 1];

arr = indices.map(function (item, index) {
return arr[indices.indexOf(index)];
});

//alternate
function reposition(arr, indices)
{
var newArr = []; // I'm not sure if extra space is allowed. If it is, the solution should be this simple.

for(var i = 0; i < arr.length; ++i)
{
var newIndex = indices[i];
newArr[newIndex] = arr[i];
}

return newArr;
}

var arr = ["a", "b", "c", "d", "e", "f"];
var indices = [2, 3, 4, 0, 5, 1];

reposition(arr, indices);
// returns: ["d", "f", "a", "b", "c", "e"]