var checkClicked = true; //sets a base variable so that it doesn't popup for everytime we click something.
function getPlayerPosition() {
  $( "div" ).click(function() {
    if (checkClicked === true && $(this).hasClass("clicked")) {
      alert("Please select a blank square"); //sets alert if something ALREADY has the class clicked
    }
    $(this).addClass("clicked"); //adds the clicked class to the div that is marked an x
    var position = $(this).position(); //gets position
    var playerLeftMin = position.left-8; //gets left position minus padding
    var playerTopMin = position.top-8; //gets top position minus padding
    var playerRightMax = playerLeftMin + 200; //gets right position by adding the width to the left position;
    var playerBottomMax = playerTopMin + 200; //gets bottom position by adding the width to the top position;
    var playerDimensions = [playerLeftMin, playerRightMax, playerTopMin, playerBottomMax];
    return playerDimensions; //outputs an array so we can use this data
  });
}

var playerPosition = getPlayerPosition(); //gets the data so we can use it in other functions



function computerTurn(){
  var randomLeft = Math.floor(Math.random() * 600); //gets a random left position
  var randomTop = Math.floor(Math.random() * 600); //gets a random top position
  var randomPosition = [randomLeft, randomTop];
  return randomPosition; //outputs an array so we can compare this data
}

var computerPosition = computerTurn();

function testPosition() {
  var x = computerPosition[0];
  var y = computerPosition[1];
  while (x < playerDimensions[0] && x > playerDimensions[1] && y < playerDimensions[2] && y > playerDimensions[3]) {
    computerTurn();
  }
}
testPosition();
