// ##fib(n)

// Write a method to return the Nth number of Fibonacci sequence.

// `http://en.wikipedia.org/wiki/Fibonacci_number`

// The next number is found by adding up the two numbers before it.

// The 2 is found by adding the two numbers before it (1+1)
// Similarly, the 3 is found by adding the two numbers before it (1+2),
// And the 5 is (2+3),

// If 

// var fibonacciNumber = function(num) {
// 	var fibArray = [0,1]
// 	fibArray.reduce(function(prev, current) {
// 		var nextNum = ((prev + current)*num)
// 		return nextNum
// 	})
// };

// console.log(fibonacciNumber(34))
var fibArray = [0,1];
var n = 34;

var fibonacciNumber = function(num) {

for (var i = 2; i < num; i++) {
	fibArray[i] = fibArray[i-1] + fibArray[i-2];
	}
	return fibArray;
};

fibonacciNumber(n);

var fibPopped = fibArray.pop(n);

console.log(fibPopped);


// 	fibArray.reduce(function(prev, current) {
// 		var nextNum = ((prev + current)*num)
// 		return nextNum
// 	})
// 	counter( , )*num
// };

