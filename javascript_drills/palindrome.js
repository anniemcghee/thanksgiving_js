// ##isPalindrome(string)
// Create a method called `is_palindrome` to check if a string is a palindrome. 
// Do not use any reverse method.

var myString = "abaaba"

var myString2 = "racecar"

var myString3 = "gorillas"


var is_palindrome = function (string){
	var length = string.length;
	for (var i = 0; i <=Math.round(length/2); i++) { //i did this to account for even and odd numbers.
		if (string.charAt(i) === string.charAt(length-1-i)) { //i did this to compare R to L and L to R!
			return true
		}
		else {
			return false
		}
	}
}

console.log(is_palindrome(myString2));


	
//this is the graveyard of the billions of things I tried

		//string.length into its own variable - then compare string[i] === string(var-1)-i
		//count matches to count iterations

		//////
		// 	if (string.charAt(i) === string.charAt(j)) {
		// 		return true;
		// 	}
		// 	else if (string.length%2 = 1) { //if it's an odd numbered string
		// 		string.charAt(Math.round(i/2))

		// 	} &&  
		// }
		// // if (string.charAt(i) === string(i))
		// // if (string.charAt(i) === string.charAt(i+1) {


// 	if ((forward ===) && (string.length%2 = 0)) {
// 		console.log("Your string is a palindrome")
// 	}
// 	else {
// 		console.log("Your string is not a palindrome")
// 	}
// };

