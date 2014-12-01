// ##compress(string)
// Use a pattern and consolidate the amount of characters into a simplified string

// ```
var input = "AAASSSDDDDRDDSASSDDDSSSAD"  
// output pattern = 3A3S4DR2DSA2S3D3SAD
// ```

// If a character is represented more than once, append the number of occurences in front of it.
// If a chracter is only represented once, just put that letter

var compress = function(string) {


	// var arrayOfString = string.split();
	// var outputArray = [];
	// var counter = 0

	// arrayOfString.reduce(function(prev, current)

var current = string.charAt(i)
var next = string.charAt(i+1)

	for (var i=0; i<=string.length; i++) {
		if (current === next) {
			console.log("Match!")
		}
		else {
			console.log("No")
		}
	}
		
			///count the number of times prev === current and return total in the array before moving on
			///use a tool like splice to remove all like elements and replace with the number before moving on
			
}


console.log(compress(input))

// var is_palindrome = function (string){
// 	var length = string.length;
// 	for (var i = 0; i <=Math.round(length/2); i++) { //i did this to account for even and odd numbers.
// 		if (string.charAt(i) === string.charAt(length-1-i)) { //i did this to compare R to L and L to R!
// 			return true
// 		}
// 		else {
// 			return false
// 		}
// 	}
// }