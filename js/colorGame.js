var colors = generateColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

squares.forEach(function(square, i){
  square.style.backgroundColor = colors[i];
  square.addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
});

function changeColors(color){
  squares.forEach(function(square){
    square.style.backgroundColor = color;
  });
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(n) {
  var arr = [];
  for(var i = 0; i < 5; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
