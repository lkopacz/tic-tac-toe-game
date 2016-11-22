function computerTurn(){
  var randomLeft = Math.floor(Math.random() * 600); //gets a random left position
  var randomTop = Math.floor(Math.random() * 600); //gets a random top position
  var randomPosition = [randomLeft, randomTop];
  return randomPosition; //outputs an array so we can compare this data
}

var computerPosition = computerTurn();

var x = computerPosition[0];
var y = computerPosition[1];

function getPlayerPosition() {
  $( "div" ).on('click', function() {
    if ($(this).hasClass("clicked")) {
      alert("Please select a blank square"); //sets alert if something ALREADY has the class clicked
    }
    $(this).addClass("clicked x"); //adds the clicked class to the div that is marked an x
    var position = $(this).position(); //gets position
    var playerLeftMin = position.left-8; //gets left position minus padding
    var playerTopMin = position.top-8; //gets top position minus padding
    var playerRightMax = playerLeftMin + 200; //gets right position by adding the width to the left position;
    var playerBottomMax = playerTopMin + 200; //gets bottom position by adding the width to the top position;
    var playerDimensions = [playerLeftMin, playerRightMax, playerTopMin, playerBottomMax];
    while (x > playerLeftMin && x < playerRightMax && y > playerTopMin && y < playerBottomMax) {
      computerTurn();
    }
    if (x < 200 && y < 200) {
      $(".box-1").addClass("clicked o");
    } else if (x < 400 && y < 200) {
      $(".box-2").addClass("clicked o");
    } else if (x < 600 && y < 200) {
      $(".box-3").addClass("clicked o");
    } else if (x < 200 && y < 400) {
      $(".box-4").addClass("clicked o");
    } else if (x < 400 && y < 400) {
      $(".box-5").addClass("clicked o");
    } else if (x < 600 && y < 400) {
      $(".box-6").addClass("clicked o");
    } else if (x < 200 && y < 600) {
      $(".box-7").addClass("clicked o");
    } else if (x < 400 && y < 600) {
      $(".box-8").addClass("clicked o");
    } else if (x < 600 && y < 600) {
      $(".box-9").addClass("clicked o");
    }
  });
}
getPlayerPosition();
