//Evan Soucy Assignment 2.3
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke("darkslategray");
  strokeWeight(5); //I want a nice outline so it is easy to see while making my shape


evanShape(50,10,1.5);

}
  function evanShape (x,y,size) {
  push();
  translate(x, y);
  scale(size);
  beginShape(); //trying to make a nonperfect octogon, I dont want all the side to be the same length
  fill("dodgerblue");
    translate (-100,-50)//without this translation the shape won't be in the top left corner when the x and y is set to (0,0)
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
  pop();
}
