
sayHello();
function sayHello() {
    alert('hello');
}


sayGoodbye();
const sayGoodbye = function() {
 alert('Goodbye!');   
}

function min1(x, y) {
    if (x > y) return y;
    else return x;
}

const min2 = function (x, y) {
    if (x > y) return y;
    else return x;
}

let min3 = (x, y) =>  x > y ? y : x


console.log(min1(10, 5));

console.log(min2(10, 5));

console.log(min3(10, 5));


function chicken() {
    return egg();
}

function egg() {
    return chicken();
}
console.log(chicken() + " came first.");


let isPrime = x => {
        for(let i = 2; i < x; i++){
            if(x % i == 0) return false;
        }
        return x !== 1;
}

console.log(isPrime(99));