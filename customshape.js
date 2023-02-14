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
  //point 1
  vertex(100, 100);
   //point 2
  vertex(100, 200);
   //point 3
  vertex(150, 300);
   //point 4
  vertex(250, 300);
   //point 5
  vertex(300, 200);
   //point 6
  vertex(300, 100);
   //point 7
  vertex(250, 50);
   //point 8
  vertex(150, 50);
   //point 9
  vertex(100, 100);
  endShape(close); 
}
