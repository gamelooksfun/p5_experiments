let x;
let y;
let size;
function setup() {
  createCanvas(400, 400);
  x = 250;
  y = 250;
  size = 50;
  background(220);
}

function draw() {
  stroke(0,100,100)
  ellipse(x, y, size,50)
  if (size < 300) {
   size += 1; 
  }
  x = x - 1;
  y = y - 1;
}

// wave frequency
// color palette
// frequency of color appearance
// wave shape
// color depth (tranparent or opaque)
// amplitude of wave