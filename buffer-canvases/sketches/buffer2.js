// Playing with Steve's first example of buffer canvases

function setup() {
    seed = 1000;
    randomSeed(seed);
    // noiseSeed(seed);
    // maxCanv = min(windowWidth, windowHeight);
    createCanvas(400,400);
    background(200);
    bufferCanv();
    // image(cnv,0,0);
    makeObjects();
  }
  
  function bufferCanv() {
    cnv = createGraphics(width, height);
    cnv.background(0);
    cnv.noStroke();
    for (i = 0; i < 15; i++) {
      x = random(width);
      y = random(height);
      size = random(100,200);
      if (random(2) < 1) {
        cnv.fill(100,0,150);
      } else {
        cnv.fill(200,0,0);
      }
      cnv.circle(x, y, size);
    }
  }
  
  function makeObjects() {
    for (i = 0; i < 100; i++) {
      x = random(width);
      y = random(height);
      size = random(20, 50);
      col = cnv.get(x, y);
      fill(col);
      if (col[0] == 0) {
        circle(x, y, size);
      } else if (col[0] == 100) {
        rect(x, y, size);
      } else if (col[0] == 200) {
        triangle(
          x - size / 2,
          y - size / 2,
          x - size / 2,
          y + size / 2,
          x + size / 2,
          y
        );
      }
    }
  }