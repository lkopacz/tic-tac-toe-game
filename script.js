var checkClicked = false;
$( "div" ).click(function() {
  if (checkClicked === false && $(this).hasClass("clicked")) {
    alert("Please select a blank square");
  }
  $(this).addClass("clicked");
  var position = $(".clicked span").position();
  console.log(position.left);
});
