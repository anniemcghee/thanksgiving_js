// ##pair(obj)
// Construct array pairs from Objects.

// You can grab all keys using `Object.keys(obj)` and iterate over it like any other array.

// Input

// ```
var obj = {
    "Anil": "Bridgpal",
    "Sarah": "Hanley",
    "Lenny": "Urbanowski",
}


// ```
// Output

// ```
// [ [ 'Anil', 'Bridgpal' ],
//   [ 'Sarah', 'Hanley' ],
//   [ 'Lenny', 'Urbanowski' ] ]
// ```

var pair = function (object) {
	var arrayOfKeys = Object.keys(object);
	var result = arrayOfKeys.map(function (element,index){
		return [element, object[element]];
	})
	return result;
}
	// 	return arrayOfObject;
	// });
	// return result;
	// };
console.log(pair(obj))

// 	console.log(makePairs(obj))
	// var pairedUp = [arrayOfPairs,arrayOfPairs.value];
	
// console.log(makePairs(obj))