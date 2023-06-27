// My version
// Setup global variables
var noiseResolution = 0.003;
var noiseGrid = 1;
// Setup canvases
function setup() {
    // Constant seed creates a consistent Perlin noise and random number sequence
    seed = 1000;
    noiseSeed(seed);
    randomSeed(seed);
    // Create initial canvas, noise buffer and object buffer
    createCanvas(400, 400);
    cnv1 = createGraphics(400, 400);
    cnv1.noStroke();
    cnv2 = createGraphics(400, 400);
    cnv2.noStroke();
    // Hoist drawing functions
    noiseCanvas();
    objectCanvas();
    // finalDrawing();
    // Test image
    image(cnv2, 0, 0);
}

// Noise buffer creates a grayscale noise field across the entire 400px cnv1
function noiseCanvas() {
    for (i = 0; i < width; i += noiseGrid) {
        for (j = 0; j < height; j += noiseGrid) {
            // Noise value
            n = noise(i * noiseResolution, j * noiseResolution);
            // Draw a rectangle at this point with a fill value of n*255 and alpha of 100
            cnv1.fill(n * 255);
            cnv1.rect(i, j, noiseGrid);
        }
    }
}

// Object buffer creates a series of 5 circles with random size and position
// Also determines color, but want to separate this into a new canvas
function objectCanvas() {
    cnv2.colorMode(HSB,360,120,100,255);
    cnv2.background(random(90,240),40,random(40,80));
    // cnv2.noStroke();
    for (i = 0; i < 10; i++) {
      x = random(width);
      y = random(height);
      size = random(100,200);
      cnv2.fill(random(90,240), random(70,90),random(55,85),250);
      cnv2.circle(x, y, size);
    //   cnv1.fill(random(255),120);
    //   cnv1.circle(x,y,size);
    }
  }