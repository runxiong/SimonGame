var userPattern = [];
var gamePattern = [];
var level = 0;
var start = false;

$(document).keydown(event, function(){
  if(!start){
    start = true;
    levelSound();
  }
});

$(".btn").click(function(){
  var userPress = $(this).attr("id");
  makeSound(userPress);
  animatePress(userPress);
  userPattern.push(userPress);
  checkCorrectness();
});

function levelSound(){
  level++;
  $("h1").text("Level "+level);
  var sound = Math.floor(Math.random() * 4);
  var button = getColor(sound);
  makeSound(button);
  animatePress(button);
  gamePattern.push(button);
}

function getColor(sound){
  switch(sound){
    case 0:
      return "blue";
    case 1:
      return "red";
    case 2:
      return "green";
    case 3:
    return "yellow";
  }
}

function checkCorrectness(){
  var cur = userPattern.length-1;
  if (userPattern[cur] === gamePattern[cur]){
    if (userPattern.length == gamePattern.length){
      // alert('hello');
      setTimeout(levelSound, 1000);
      userPattern = [];
    }
  }
  else{
    makeSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOvert();
  }
}

function animatePress(button){
  $("#"+button).addClass("pressed");
  setTimeout(function (){$("#"+button).removeClass("pressed");}, 100);
}

function makeSound(sound){
  var audio = new Audio("sounds/" + sound + ".mp3");
  audio.play();
}

function startOvert(){
  userPattern = [];
  gamePattern = [];
  level = 0;
  start = false;
}
