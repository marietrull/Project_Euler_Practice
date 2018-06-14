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

	let i = 2;

	while (i <= n){
		if (n % i == 0){
			n /= i;
		} else {
			i++;
		}
	}

	console.log("Problem 3: " + i)
}

findPrime(600851475143);


// let primeCheck = 13195;
// let aa = 13195;
// let bb = 2;
// let cc; 

// for (let i = 2; i < primeCheck; i++){
// 	if (primeCheck % i == 0){
// 		console.log("Prime found: " + i);
// 	}
// }

// function largestPrimeFactor(n){
// var i=2;
// while (i<=n){
//     if (n%i == 0){
//         n/=i;    
//     }else{
//         i++;
//     }
// }
// console.log(i);
// }

// var aa = 13195;
// largestPrimeFactor(aa);





























