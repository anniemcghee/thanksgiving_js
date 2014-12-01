$(function(){
var ball = $('.ball')

ball.on('click', function () {
	
    $(this).fadeOut(500, function() {
    	$(this).css({ //still need to not let the ball go right to the edge of stage - hard to click
    			marginLeft:(Math.floor(Math.random() * ($('.stage').width()-$('.shape').width()))),
    			marginTop:(Math.floor(Math.random() * ($('.stage').height()-$('.shape').height())))
    			}).fadeIn(500)
    	})
    })
});	


//GRAVEYARD OF EVERYTHING THAT DIDN'T WORK FOR A RANDOM LOCATION
// / var randomSpot = function(){
// //     //loop through each shape (this is jQuery's each not to be confused with Array.forEach())
//     $('.ball').each(function(){
//         //find a valid random position within the bounds of the stage
//         var newLeft = Math.floor(Math.random() * ($('.stage').width()-$(this).width()));
//         var newTop = Math.floor(Math.random() * ($('.stage').height()-$(this).height()))
//         //update the items to their new positions
//         return $(this).position({left:newLeft+'px',top:newTop+'px'},1000);
//     });
// var randomSpot = function () {
// 	return Math.floor(Math.random()*100)
// }
// var randomSpot = function(){
//     	$('.ball').each(function(){

//         var newLeft = Math.floor(Math.random() * ($('.stage').width()-$('.shape').width()));
//         var newTop = Math.floor(Math.random() * ($('.stage').height()-$('.shape').height()))
       
//         return $(this).position({left:newLeft+'px',top:newTop+'px'});
//     	});
		// $('.shape').css({"position": "relative"}) 
	
		// // .position(randomSpot(), randomSpot())
		// // how the fuck do I change the position of the ball when it fades in
		// .position({
		// 	'marginLeft':'+=(Math.floor(Math.random()*100)px',
		// 	'marginTop':'+=(Math.floor(Math.random()*100)px',
		// })
		 //loop through each shape (this is jQuery's each not to be confused with Array.forEach())
         //find a valid random position within the bounds of the stage
        //update the items to their new positions


// //<div class="wrapper">
//             <h3>Beam me up scotty!</h3>
//             <p>
//                 When the ball is clicked it should fade out, move to a new random location, and then fade back in. The new location must be within the .stage div.
//                 <br><br>
//                 <b>Concepts used:</b> Math.random(), $.on(), $.fadeOut(), $.fadeIn(), $.width(), $.height(), $.css(), $.position()
//             </p>
//             <div class="stage">
//                 <div class="shape ball"></div>
//             </div>

// var clearBoardButton = $('#refresh');
// 	var allButtons = $('.btn-md');
// 	var turnCounter = 0;

// 	allButtons.on('click', function () {
// 		$(this)
// 			.animate({
// 				width:"110px",
// 				height:"110px",
// 				}, 200)
// 			.animate({
// 				width:"100px",
// 				height:"100px",
// 			}, 200, function(){
// 			checkForWinner();
// 			});
// 		//animation complete
// 		turnCounter++;
// 		if (turnCounter %2 === 1) {
// 		$(this).text("X"); 
// 		}
// 		else {
// 		$(this).text("O");
// 		}
// 		$(this).attr('disabled', true);
// 	});

// 	clearBoardButton.on('click', function() {
// 		$(this)
// 			.animate({
// 				width:"60px",
// 				height:"55px",
// 				}, 200)
// 			.animate({
// 				width:"50px",
// 				height:"45px",
// 			}, 200)
// 		$(allButtons).text('-');
// 		$(allButtons).attr('disabled', false);
// 	});