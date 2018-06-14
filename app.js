console.log('Project Euler Practice Problems')
console.log('-----------------------------------------')


// PROBLEM ONE 
console.log("Problem 1: Find the sum of all the multiples of 3 or 5 below 1000.")

let total = 0;

for(let i = 0; i < 1000; i++){
	if(i % 3 == 0 || i % 5 == 0){
		total += i;
	}
}

console.log('Problem 1: ' + total)
console.log('-----------------------------------------')

// PROBLEM TWO

console.log("Problem 2: By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.")

let fibNums = [];
let fibEvens = [];
let fibAdd = 0;
let a = 0;
let b = 1;
let temp;

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

// PROBLEM THREE

console.log("Problem 3: What is the largest prime factor of the number 600851475143 ?")

//The prime factors of 13195 are 5, 7, 13 and 29.

function findPrime(n){
	// set number for division
	let i = 2;

	// look at all numbers smaller than the actual number you're looking at. Run the loop until you get to the highest divisible number. 
	while (i <= n){
		// is our original number divisible by i? 
		if (n % i == 0){
			// quotient of n / i.
			n /= i;
		// if the number is not divisible by 2, add one and keep checking. 
		} else {
			i++;
		}
	}

	console.log("Problem 3: " + i)
}

findPrime(600851475143);





























