//Evan Soucy Assignment 2.1
function setup() {
  createCanvas(400, 400);
  
}

let down=0 //down =0 becuase that point will not change 
function draw() {
  background(255);
  stroke ("white");//want a small white stroke to see the difference in each square to make it easier to keep track of
  strokeWeight (1);
  //row 1
  drawRow(0)
  //row 1
  drawRow(80)
  //row 3
  drawRow(160)
   //row 4
  drawRow(240)
   //row 5
  drawRow(320)
  
  
  
  
  fill ("BLACK"); //These will make up the E for my initials. I am keeping the size the same while changing the x and y to create each row to fill in the e
   //row 1
  square(0,down,80);
  square (80,down,80);
  square (160,down,80);
  square (240,down,80);
   //row 2
  square (0,80,80);
   //row 3
  square (0,160,80);
  square (80,160,80);
  square (160,160,80)
  square (80,160,80);
   //row 4
  square (0,240,80);
   //row 4
  square (0,320,80);
  square (80,320,80);
  square (160,320,80);
  square (240,320,80);
  


  
}

function drawRow(down) { 
  fill ('red') //the background of the drawing
   //row 1
  square(0,down,80);
   //row 2
  square (80,down,80);
   //row 3
  square (160,down,80);
   //row 4
  square (240,down,80);
   //row 5
  square (320,down,80);
  
}

