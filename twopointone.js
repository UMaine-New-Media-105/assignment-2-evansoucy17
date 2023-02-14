function setup() {
  createCanvas(400, 400);
  
}

let down=0 //down =0 becuase that point will not change 
function draw() {
  background(255);
  stroke ("white");
  strokeWeight (1);
  
  drawRow(0)
  drawRow(80)
  drawRow(160)
  drawRow(240)
  drawRow(320)
  
  
  
  
  fill ("BLACK"); //These will make up the E for my initials. I am keeping the size the same while changing the x and y to create each row to fill in the e
  square(0,down,80);
  square (80,down,80);
  square (160,down,80);
  square (240,down,80);
  square (0,80,80);
  square (0,160,80);
  square (80,160,80);
  square (160,160,80)
  square (80,160,80);
  square (0,240,80);
  square (0,320,80);
  square (80,320,80);
  square (160,320,80);
  square (240,320,80);
  


  
}

function drawRow(down) { 
  fill ('red') //the background of the drawing
  square(0,down,80);
  square (80,down,80);
  square (160,down,80);
  square (240,down,80);
  square (320,down,80);
  
}

