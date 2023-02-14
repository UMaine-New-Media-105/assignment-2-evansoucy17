//Evan Soucy Assignment 2.2
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke("darkslategray");
  strokeWeight(5); //I want a nice outline so it is easy to see while making my shape

  beginShape(); //trying to make a nonperfect octogon, I dont want all the side to be the same length
  fill("dodgerblue");
  vertex(100, 100);
  vertex(100, 200);
  vertex(150, 300);
  vertex(250, 300);
  vertex(300, 200);
  vertex(300, 100);
  vertex(250, 50);
  vertex(150, 50);
  vertex(100, 100);
  endShape(close); 
}
