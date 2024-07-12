var button_color = ["red" , "blue" , "yellow" , "green"] ;
var game_pattern= [] ;

// this will store all the clicked values which was choosen by the user .,.,.,

user_Clicked_Pattern = [] ;


// wheter the game is started or not 

var started = false ;

// initial level is 0 

var level = 0 ;


$(document).on("keypress" , function()
{
    if(!started)      // not false 
    {
        $("#level-title").text("Level" +"-" + level) ;
    next_sequence();
    started = true ;
    }
     
});


$(".btn").click(function() {

    var user_choose = $(this).attr("id");

    user_Clicked_Pattern.push(user_choose) ;
    play_sound(user_choose) ;
    animate_press(user_choose) ;
    check_answer(user_Clicked_Pattern.length-1) ;

 });


 // //1. Create a new function called check_answer(), it should take one input with the name currentLevel

 
 function check_answer(current_level)
 {

    if(game_pattern[current_level] == user_Clicked_Pattern[current_level])
    {
        console.log("success") ;
    
    if(user_Clicked_Pattern.length == game_pattern.length )
    {
        setTimeout(function () {
            next_sequence();
          }, 1000);
    }
 }
    else{

        console.log("wrong") ;

        // play the sound if the output is wrong 

        play_sound("wrong") ;

        // add the class and after 200 milisecond remove it 

        $("body").addClass("game-over") ;
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);

          // set the H1 tag to wrong answer 

          $("level-title").text("Wrong answer , Play Again !!!! ")
        

          startOver() ;
    }

 }


 // creating random number and pushing it inside the ARRAY


function next_sequence()
{
  
  
  
    //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  
    user_Clicked_Pattern = [] ;
    //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
 
    level++;

    $("#level-title").text("Level" + "-" +  level) ;

var num = Math.random() ;
num = Math.floor(num * 4)  ;


var color_choose = (button_color[num]) ;

game_pattern.push(color_choose) ;
$("#" + color_choose).fadeIn(100).fadeOut(100).fadeIn(100);
 
play_sound(color_choose) ;

}




// create for playing the sound 

function play_sound(key)
{
    var audio = new Audio("sounds/" + key + ".mp3");
      audio.play();
}


function animate_press(current_color)
{
    $("#" + current_color).addClass("pressed") ;
    setTimeout(function() {
        $("#" + current_color).removeClass("pressed") ;
    }, 100);
}


//1. Create a new function called startOver().
function startOver() {

    //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    game_pattern= [];
    started = false;
}