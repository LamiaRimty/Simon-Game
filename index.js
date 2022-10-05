//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .

var buttonColours=["red", "blue" , "green" , "yellow"];
var gamePattern=[];     //5. At the top of the game.js file, create a new empty array called gamePattern.
var userClickedPattern=[]; //3. At the top of the game.js file, create a new empty array with the name userClickedPattern.

var started=false //u'll need a way to keep track whether id the game has started or not,sp you only call nextSequence on the first keypress
var level=0;  //create a new varible called level starts at 0

  

$(document).keypress (function() {
 
 if(!started){
  nextSequence();
  started=true;
 }
});

$(".btn").click ( function() {
    var userChosenColour=$(this).attr("id");  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
     userClickedPattern.push(userChosenColour);   //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
      playSound(userChosenColour);
      animatePress(userChosenColour);
});


function nextSequence(){  //1.inside the top of the index.js file ,create a new function called nextSequence()
 
  level++;     //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  $("#game-title").text("Lavel"+level);   //5. Inside nextSequence(), update the h1 with this change in the value of level.

  var randomNumber=Math.floor(Math.random()*4); //2.inside the func generate a random number between 0-3,store it in variable called randomnumber
   var randomChosenColour=buttonColours[randomNumber];  // 6.Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColour);

   $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);  //1. Use jQuery to select the button with the same id as the randomChosenColour                                                            
    playSound(randomChosenColour);  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
                                    //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
                           
}
     
function playSound(name){         //2. Create a new function called playSound() that takes a single input parameter called name.
    var audio= new Audio("sounds/"+ name + ".mp3");   //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
    audio.play();
}

function animatePress(currentColour){   //1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
   $("#"+currentColour).addClass("pressed");   //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
   setTimeout( function(){                        //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
     $("#"+currentColour).removeClass("pressed");
   },100);
}




// //Detecting keyboard press
// document.addEventListener("keypress",function(event){
//   makeSound(event.key);
//   buttonAnimation(event.key);
  
//  });