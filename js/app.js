//Prevent spoilers
//Solution : Hide spoilers and reveal through user interaction

//Steps
//1. Hide spoiler
 $(".spoiler span").hide();

//2. Add button
$(".spoiler").append("<button>Reveal Spoiler!</button>");

$("button").click(function(){
   //3.show spoiler next to the button clicked 
 $(this).prev().show();
//4. Get rid of the button
 $(this).remove();
});

