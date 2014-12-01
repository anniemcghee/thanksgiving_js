$(function(){

var ball = $('.ball')
    
ball.hover(
	function() {
		$(this).removeClass('ball');
		$(this).css({backgroundColor:'#fff786'});
	},	
	function() {
		$(this).addClass('ball');
		$(this).css({backgroundColor:'#4444cc'});
	});
});

// $( "td" ).hover(
//   function() {
//     $( this ).addClass( "hover" );
//   }, function() {
//     $( this ).removeClass( "hover" );
//   }
// );
// <div class="wrapper">
//             <h3>Transformers: More than meets the eye.</h3>
//             <p>
//                 When the user hovers the mouse over the ball it should transform in to a block 
// (remove the ball class) and transform back to a ball when they move the mouse away. 
// The ball/block should also change colors (set color with jquery) every time the user hovers over it.
// <br><br>
//                 Note: the transofmation (animation) is handled by css (see css/styles.css if you want to see how it works).
//                 <br><br>
//                 <b>Concepts used:</b> $.hover(), $.addClass(), $.removeClass(), $.css()
//             </p>
//             <div class="stage">
//                 <div class="shape ball"></div>
//             </div>
//         </div>