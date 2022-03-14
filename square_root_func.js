// take the input from the user
const number = prompt('Enter the number: ');

const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);


//Alternate

function squareRoot(number){
    var square = 1,i=0;
    while(true)
    {
    i = i + 1;
    square = (number / square + square) / 2;
    if (i == number + 1) { break; }
    }
    return square;
    }

    //alternate

    function squareroot(number) {
        var lo = 0, hi = number;
        while(lo <= hi) {
             var mid = Math.floor((lo + hi) / 2);
             if(mid * mid > number) hi = mid - 1;
             else lo = mid + 1;
        }
        return hi;
    }

    o(log(n))

    //Alternate

    function squareroot(number) {
        for (var i = 0; i * i <= number; i++) {
            if (i * i === number)
                return i;
       }
       return number; // don't know if you should have this line in case nothing found
    }

o(n)