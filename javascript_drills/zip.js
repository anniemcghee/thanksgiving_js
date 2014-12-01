// ##zip(array, array2)
// Take two arrays, and combine them.

// Input

// ```
var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];
// ```

// Output

// ```
// [ [ 'Passion Pit', 'Gossamer' ],
//   [ 'Mumford and Sons', 'Sigh no more' ],
//   [ 'MGMT', 'Time to Pretend' ] ]
// ```

var zip = function (firstArray, secondArray){
	var result = firstArray.map(function(element, index){
		return [element, secondArray[index]]
	})
	return result;
};

	console.log(zip(artists,albums));

//////////// Another way to do it locally (if you're only working with arrays of three objects each) is: ////////////// 
// var zip = function (firstArray, secondArray){
// 	var finalArray = firstArray.concat(secondArray);
// 	return [[finalArray[0],finalArray[3]], [finalArray[1], finalArray[4]], [finalArray[2], finalArray[5]]]
// 	// });	
// console.log(zip(artists,albums));

