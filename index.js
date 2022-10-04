//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .

var buttonColours=["red","blue","green","yellow"];

//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern=[];

//1.inside the top of the index.js file ,create a new function called nextSequence()
function nextSequence(){

var randomNumber=Math.floor(Math.random()*4); //2.inside the func generate a random number between 0-3,store it in variable called randomnumber
var randomChosenColour=buttonColours[randomNumber];  // 6.Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
gamePattern.push(randomChosenColour);

 //1. Use jQuery to select the button with the same id as the randomChosenColour
 //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.

 $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

//3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
var audio= new Audio("sounds/"+ randomChosenColour  +".mp3");
audio.play();

}
nextSequence();


var userClickedPattern=[]; //3. At the top of the game.js file, create a new empty array with the name userClickedPattern.


$("btn").click ( function() {
    var userChosenColour=$(this).attr("#btn");  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    
        userClickedPattern.push(userChosenColour);  
        //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    console.log(userClickedPattern);
});



// function buttonAnimation(currentKey){
//    var activeButton = document.querySelector("."+currentKey); //button active changes the style that defined in css file
//     activeButton.classList.toggle("pressed");
//     setTimeout( function(){
//         activeButton.classList.remove("pressed");
//     },100 );//0.1 sec
// }