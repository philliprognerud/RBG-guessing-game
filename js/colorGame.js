var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");

colorDisplay.textContent = pickedColor;

squares.forEach(function(square, i){
  square.style.backgroundColor = colors[i];
  square.addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor){
      alert("correct");
    } else {
      alert("wrong");
    }
  });
});
