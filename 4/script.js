
for (let i = 1; i <= 100; i++) {
	if (i % 3 == 0 & i % 5 == 0) {
		console.log('FizzBuzz');
	} else if (i % 3 == 0) {
		console.log('Fizz');
	} else if (i % 5 == 0) {
		console.log('Buzz');
	} else {
		console.log(i);
	}

}

let bindingSize = 8;
let printSymbol;
let outcome = '';
for (let i = 0; i < bindingSize; i++) {
	for (let j = 0; j < bindingSize; j++) {
		if ((i + j) % 2 == 0) {
			outcome += ' ';
		}
		else {
			outcome += '#';
		}

		if (j + 1 == bindingSize) outcome += '\n'
	}
}
console.log(outcome);