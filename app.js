console.log('Project Euler Practice Problems')
console.log('-----------------------------------------')


// PROBLEM ONE 
console.log("Problem 1: Find the sum of all the multiples of 3 or 5 below 1000.")

var total = 0;

for(let i = 0; i < 1000; i++){
	if(i % 3 == 0 || i % 5 == 0){
		total += i;
	}
}

console.log('Problem 1: ' + total)
console.log('-----------------------------------------')

// PROBLEM TWO

console.log("Problem 2: By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.")

var fibNums = [];
var fibEvens = [];
var fibAdd = 0;
var a = 0;
var b = 1;
var temp;

while (a < 4000000){
	// placeholder for first number (a)
	temp = a;
	// calculate the next number by adding the first number (a) to the second number (b)
	// a is now the second number
	a = a + b;
	// reset the placeholder/first number with the second number (b)
	b = temp;

	// Add fibonacci number to the array
	fibNums.push(b)

	// If the number in the sequence is even
	if (b % 2 == 0){
		// Add it to the even number array
		fibEvens.push(b);
		// Add it to the sum of the even fibonacci numbers
		fibAdd += b;

	}
}

console.log("Problem 2: The Fibonacci Sequence is " + fibNums)
console.log("Problem 2: The even numbers in this sequence are " + fibEvens)
console.log("Problem 2: The sum of these even numbers is " + fibAdd)
console.log('-----------------------------------------')
