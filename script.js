var checkClicked = true;
$( "div" ).click(function() {
  if (checkClicked === true && $(this).hasClass("clicked")) {
    alert("Please select a blank square");
  }
  $(this).addClass("clicked");
  var position = $(this).position();
  console.log((position.left)-8 + 'px');
  console.log((position.top)-8 + 'px');
});

function computerTurn(){
  var randomLeft = Math.floor(Math.random() * 600);
  var randomTop = Math.floor(Math.random() * 600);
  console.log(randomLeft);
  console.log(randomTop);
}

computerTurn();
