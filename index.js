//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .

var buttonColours=["red", "blue" , "green" , "yellow"];
var gamePattern=[];     //5. At the top of the game.js file, create a new empty array called gamePattern.
var userClickedPattern=[]; //3. At the top of the game.js file, create a new empty array with the name userClickedPattern.

var started=false //u'll need a way to keep track whether id the game has started or not,sp you only call nextSequence on the first keypress
var level=0;  //create a new varible called level starts at 0

  

$(document).keypress (function() {
 
 if(!started){
  $("#game-title").text("Lavel"+level);
  nextSequence();
  started=true;
 }
});

$(".btn").click ( function() {
    var userChosenColour=$(this).attr("id");  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
     userClickedPattern.push(userChosenColour);   //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
      playSound(userChosenColour);
      animatePress(userChosenColour);
     checkAnswer(userClickedPattern.length-1);  //8.2 Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
});

//8.1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("Success!");
  
    if(userClickedPattern.length===gamePattern.length){      //8.4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      setTimeout(function(){
        nextSequence();                //8.5. Call nextSequence() after a 1000 millisecond delay.
      },1000);
    }
  
  }
  
  else{
    console.log("Wrong!");
    playSound("wrong"); //9.1 in the sound folder there is a sound called wrong,this play,if user got wrong 
    
    $("body").addClass("gameOver"); //9.2 add the gameOver class of css,in the body of the weebsite when user gets wrong answer thern remove it after 200ms

   setTimeout(function(){

    $("body").removeClass("gameOver");
    },200);

    $("#game-title").text("Game Over, Press any key to Restart");  //9. //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
  
    startOver(); //10.2. Call startOver() if the user gets the sequence wrong.


  }
}


function nextSequence(){  //1.inside the top of the index.js file ,create a new function called nextSequence()
 
  userClickedPattern=[]; //8.6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.

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

function startOver(){   //10.3. create a fun Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level=0;
  gamePattern=[];
  started=false;
}

  


