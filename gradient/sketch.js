var stepX;
var stepY;

function setup() {
  createCanvas(360,360);
  noStroke();
  colorMode(HSB, 360, 100, 100);

}

function draw() {
  stepX = 1;
  stepY = 1;

  for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY);
    }
  }
}
