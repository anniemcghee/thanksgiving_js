$(function(){

var box = $('.shape')


$(document).on('keyup', function(event){
var key = event.which
		//shake
		if (key === 83) {
			box.effect("shake")
		} 
		//right
		else if (key === 39) {
			box.animate({
				'marginLeft':'+=30px'
			})
		}
		//left
		else if (key === 37) {
			box.animate({
				'marginLeft':'-=30px'
			})	
		}
		//up
		else if (key === 38) {
			box.animate({
				'marginTop':'-=30px'
			})
		}
		//down
		else if (key === 40) {
			box.animate({
				'marginTop':'+=30px'
			})
		}
	})
})

    // console.log(alert('The dom is ready! (drill 2)'));

    // $(document).on('keyup',function(event){
    //     //output to console which key was pressed
    //     console.log(alert('The user pressed key: ',event.which));
    // });

// });

// <div class="wrapper">
//             <h3>Shaker and Mover</h3>
//             <p>
//                 When the user presses the arrow keys (up, down, left, right) the ball should move in that direction. If the ball hits the edge of the div.stage it should stop moving (it shouldn't go off the edge of the stage). If the user presses the "s" key the ball should shake.
//                 <br><br>
//                 <b>Concepts used:</b> $.on(), $.animate(), $.width(), $.height(), $.css(), $.position()
//             </p>
//             <div class="stage">
//                 <div class="shape"></div>
//             </div>

// left arrow	37
// up arrow	38
// right arrow	39
// down arrow	40