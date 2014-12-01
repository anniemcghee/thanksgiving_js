// ##isPrime(number)
// Return `true` or `false` if a number is a prime number

var isPrime = function(num) {
	if ((num %2 === 0) && (num !== 2) || (num !== 3) && (num%3 === 0) || (num%5===0) || (num%7===0)) { //if num is NOT two and is even, it's not a prime number
		return false
	}
	else if ((Math.sqrt(num))%1 === 0) {
		return false
	}
	else {
		return true
	}
};

console.log(isPrime(838041647));

// (num !==1) && 