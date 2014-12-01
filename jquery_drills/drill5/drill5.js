$(function(){


    //shuffle shapes on first load
    shuffleShapes();
    //shuffle shapes on click of shuffle button
    $('#shuffleThem').on('click',shuffleShapes);
    $('#doIt').on('click', )
});


//used to fade in shapes
var fadeShapesIn = function(){
    $(.shape).each(function(){
        $(this).fadeIn(2000)
    })
}
//used to fade out shapes
var fadeShapesOut = function(){
    $(.shape).each(function(){
        $(this).fadeOut(2000)
    })
}

//used to turn shapes into circles
var makeCircle = function(){
    $(.shape).each(function(){
        $(this).addClass('ball')
    })
}
//used to turn shapes into squares
var makeSquare = function(){
    $(.shape).each(function(){
        $(this).removeClass('ball')
    })
}
//used to make shapes yellow
var makeYellow = function(){
    $(.shape).each(function(){
        $(this).css({backgroundColor:'yellow'})
    })
}

//used to make shapes orange
var makeOrange = function(){
    $(.shape).each(function(){
        $(this).css({backgroundColor:'orange'})
    })
}

//used to make shapes purple
var makePurple = function(){
    $(.shape).each(function(){
        $(this).css({backgroundColor:'purple'})
    })
}

//used to make shapes red
var makeRed = function(){
    $(.shape).each(function(){
        $(this).css({backgroundColor:'red'})
    })
}
//used to make shapes blue
var makeBlue = function(){
    $(.shape).each(function(){
        $(this).css({backgroundColor:'blue'})
    })
}

//used to shuffle shapes
var shuffleShapes = function(){
    //loop through each shape (this is jQuery's each not to be confused with Array.forEach())
    $('.shape').each(function(idx){
        //find a valid random position within the bounds of the stage
        var newLeft = Math.floor(Math.random() * ($('.stage').width()-$(this).width()));
        var newTop = Math.floor(Math.random() * ($('.stage').height()-$(this).height()))
        //update the items to their new positions
        $(this).html(idx).animate({left:newLeft+'px',top:newTop+'px'},1000);
    });
}

 // <h3>CHANGE ALL THE THINGS!!!</h3>
 //            <p>
 //                The user should be able to select a type of object from the first dropdown 
 //                (below) and then select a way to modify all matching items from the second dropdown. 
 //                When they click the "Do it!" button the transformation should be performed. 
 //                The "shuffle shapes" button has already been completed for you.
 //                <br><br>
 //                <b>Concepts used:</b> $.on(), $.fadeOut(), $.fadeIn(), $.width(), $.height(), 
 //                $.css(), $.position(), $.addClass, $.removeClass, $.each(), 
 //                <a href="http://api.jquery.com/category/selectors/">:selectors</a>, 
 //                maybe some other stuff.
 //                <br><br>
 //                <b>Bonus:</b> add some more items to the lists and make them work.
 //            </p>
 //            <p>