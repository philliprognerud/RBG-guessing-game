var numSquares = 6;
var colors = [];
var pickedColor

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupSquares(){
  squares.forEach(function(square, i){
    square.addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;

      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  });
}

function setupModeButtons(){
  modeButtons.forEach(function(btn, i){
    btn.addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  });
}

function reset(){
  colors = generateColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";

  colors.forEach(function(color, i){
    if(colors.length === 6){
      squares[i].style.backgroundColor = color;
      squares[i].style.display = "block";
    } else {
      squares[i].style.backgroundColor = color;
      squares[i+3].style.display = "none";
    }
  });
}

resetButton.addEventListener("click", function(){
  reset();
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
  for(var i = 0; i < n; i++){
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
