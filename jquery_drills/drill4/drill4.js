$(function(){
var firstDiv = $('#first')
var secondDiv = $('#second')
var firstListFirstDiv = $('#first .first') //this still includes the first item of second list of first div**
var firstListSecondDiv = $('#second .first .first')
var thirdItemThirdList = $('#second .first .third')
var firstItemFirstListFirstDiv = $('#first .first .first')
var secondListFirstDiv = $('#first .seconds') 
var firstItemEveryList = $('.first .first')
var firstItemSecondList = $('.seconds .first')
var appendExample = $('#first ul') //this appends to both lists in first div
var appendExample2 = $('.second ul')//this appends an li to the second list of second div
var appendExample3 = $('.third ul')//this appends an li to the third list of second div
var appendExample4 = $('#first .second ul')//this SHOULD work to add an li to second list of first div BUT IT DOESNT
var appendExample5 = $('ul')//includes all uls, including subitems. How to add without adding sub uls?
var allElements = $('*')
var specificElements = $()
// Hide the first div
// firstDiv.hide("slow").show("slow")

// Hide the first list in the first div //**
// firstListFirstDiv.hide("slow").show("slow")

// Hide the first list in the second div
// firstListSecondDiv.hide("slow").show("slow")

// Hide the second div
// secondDiv.hide("slow").show("slow")

// Hide the third item of the third list
// thirdItemThirdList.hide("slow").show("slow")

// Hide the first item of the first list in the first div
// firstItemFirstListFirstDiv.hide("slow").show("slow")

// Set a red background on the first div
// firstDiv.css({backgroundColor: "red"})

// Set a red background on the second list in the first div //***
// secondListFirstDiv.css({backgroundColor: "red"})

// Fade out the second div after 5 seconds
// secondDiv.delay(5000).fadeOut(1000)

// Remove the first item of every list from the DOM (no hiding)
// firstItemEveryList.delay(2000).fadeOut(100)
// firstItemSecondList.delay(2000).fadeOut(100)

// Add a fourth item to the second list in the first div //need to specify second list first div only
// appendExample.append("<li>Second Fourth Item</li>")

// // Add a fourth item to all three lists (with one function call)
// appendExample5.append("<li>Fourth Item</li>")

// Remove the second list from the first div and add it back to the second div
// secondListFirstDiv.appendTo('#second')

// Remove any element that is clicked on //how can this be more specific? n or parent?
// $('.first, .seconds, .second, .third').on('click', function(){
// 	$(this).hide()
// })

// Remove any element in the first div that is clicked on //how can this be more specific?
// firstDiv.on('click', function(){
// 	$(this).hide()
// })

// Fade out any element that is clicked, after 3 seconds //how can this be more specific?
// $('.first, .seconds, .second, .third').on('click', function(){
// 	$(this).delay(3000).fadeOut("slow")
// })


});

       // <p>
       //          Lets try something a little more practical. Try to do the following on this page.<br>
       //          <ul class="task-list">
       //              <li>Hide the first div</li>
       //              <li>Hide the first list in the first div</li>
       //              <li>Hide the first list in the second div</li>
       //              <li>Hide the second div</li>
       //              <li>Hide the third item of the third list</li>
       //              <li>Hide the first item of the first list in the first div</li>
       //              <li>Set a red background on the first div</li>
       //              <li>Set a red background on the second list in the first div</li>
       //              <li>Set a red background on the second item of every list</li>
       //              <li>Fade out the second div after 5 seconds</li>
       //              <li>Remove the first item of every list from the DOM (no hiding)</li>
       //              <li>Add a fourth item to the second list in the first div</li>
       //              <li>Add a fourth item to all three lists (with one function call)</li>
       //              <li>Remove the second list from the first div and add it back to the second div</li>
       //              <li>Remove any element that is clicked on</li>
       //              <li>Remove any element in the first div that is clicked on</li>
       //              <li>Fade out any element that is clicked, after 3 seconds</li>
       //              <li><b>Bonus</b> make the list in the right column behave like <a href="http://itslenny.github.io/jquery-quiccordion/">this</a>.</li>
       //          </ul>
       //      </p>