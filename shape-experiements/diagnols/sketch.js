// variable to define the resolution of the grid
var graphPaper = 20;

// create canvas to draw on
function setup() {
  createCanvas(400, 400);
  // define diagnol lines to draw in each square
  for(var graphY = 0; graphY < graphPaper; graphY++) {
    for (var graphX = 0; graphX < graphPaper; graphX++) {
      var posX = graphX * (width / graphPaper);
      var posY = graphY * (height / graphPaper);
      // create a variable that randomly defines if line faces left or right
      var direction = int(random(0, 2));
        // conditional that defines if line faces left or right based on modulo of graphX
      if (direction == 0) {
        line(posX, posY, posX + (width / graphPaper), posY + (height / graphPaper)); 
      }
      else {
        line(posX + (width / graphPaper), posY, posX, posY + (height / graphPaper));
      }
    }
  }
}

/*function draw() {
  clear();
  // define diagnol lines to draw in each square
  for(var graphY = 0; graphY < graphPaper; graphY++) {
    for (var graphX = 0; graphX < graphPaper; graphX++) {
      var posX = graphX * (width / graphPaper);
      var posY = graphY * (height / graphPaper);
      // create a variable that randomly defines if line faces left or right
      var direction = int(random(0, 2));
      // conditional that defines if line faces left or right based on modulo of graphX
      if (direction == 0) {
        line(posX, posY, posX + (width / graphPaper), posY + (height / graphPaper)); 
      }
      else {
        line(posX + (width / graphPaper), posY, posX, posY + (height / graphPaper));
      }
    }
  }
}*/