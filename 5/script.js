//#1
const getFibonacci = numbers => {
	let fib1 = 0;
	let fib2 = 1;
	let fib3;
	let fibSeq = '';
	for (let i = 0; i < numbers; i++) {
		if (i === 0) fibSeq += '0';
		else if (i === 1) fibSeq += ', 1';
		else {
			fib3 = fib1 + fib2;
			fib1 = fib2;
			fib2 = fib3;
			fibSeq += (`, ${fib3}`);
		}
	}
	return fibSeq;
}

console.log(getFibonacci(10));

//#2.1
const countBs = input => {
	let count = 0;
	for(let i = 0; i < input.length; i++){
		if(input[i] === 'B') count++;
	}
	return count;
}

console.log(countBs("BBC"));

//#2.2
const countChar = (input, char) => {
	let count = 0;
	for(let i = 0; i < input.length; i++){
		if(input[i] === char) count++;
	}
	return count;
}

console.log(countChar("kakkerlak", "k"));