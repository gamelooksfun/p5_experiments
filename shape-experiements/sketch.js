// variable to define the resolution of the grid
var graphPaper = 20;

// create canvas to draw on
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // define diagnol lines to draw in each square
  for(var graphY = 0; graphY < graphPaper; graphY++) {
    for (var graphX = 0; graphX < graphPaper; graphX++) {
      var posX = graphX * (width / graphPaper);
      var posY = graphY * (height / graphPaper);
      line(posX, posY, posX + (width / graphPaper), posY + (height / graphPaper));
}
}
}