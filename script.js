var checkClicked = true;
function getPlayerPosition() {
  $( "div" ).click(function() {
    if (checkClicked === true && $(this).hasClass("clicked")) {
      alert("Please select a blank square");
    }
    $(this).addClass("clicked");
    var position = $(this).position();
    var playerLeftMin = position.left-8;
    var playerTopMin = position.top-8;
    //var playerRightMax = playerLeftMin + 200;
    //var playerBottomMax = playerTopMin + 200;
    var playerDimensions = [playerLeftMin, playerTopMin];
    return playerDimensions;
  });
}

var playerPosition = getPlayerPosition();



function computerTurn(){
  var randomLeft = Math.floor(Math.random() * 600);
  var randomTop = Math.floor(Math.random() * 600);
  var randomPosition = [randomLeft, randomTop];
  return randomPosition;
}

var computerPosition = computerTurn();

function testPostion() {
  if
}
