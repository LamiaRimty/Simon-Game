//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .

var buttonColours=["red","blue","green","yellow"];

//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern=[];

//1.inside the top of the index.js file ,create a new function called nextSequence()
function nextSequence(){

var randomNumber=Math.floor(Math.random()*4); //2.inside the func generate a random number between 0-3,store it in variable called randomnumber
console.log(randomNumber);
}
nextSequence();

var randomChosenColour=buttonColours[randomNumber];


// 6.Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
gamePattern.push(randomChosenColour);


// $("#green").ready(() => {
//     setInterval(() => {
//         $('p').fadeToggle();
     
//     }, 500);
// });