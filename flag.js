//Assignment 4.4 Flags
//Evan Soucy
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  backgroundRect(0, 0, "green");
  backgroundRect(0, 133, "yellow");
  backgroundRect(0, 266, "red");
  swissCross();
}

function backgroundRect(x, y, colorChange) {
  push();
  translate(x, y);
  fill(colorChange); //the color change was needed to make sure the background colors would be accurate to the Ethopian Flag
  rect(0, 0, 600, 133);
  pop(); //without this the translate effected the white cross
}

function swissCross(x, y) {
  translate(x, y);
  fill("white");
  noStroke(); //no stroke was important to make the flag accurate to the cross on the Swiss flag
  rect(250, 50, 100, 300);
  rect(150, 150, 300, 100);
}
