// My version

// Setup global variables
var noiseResolution = 0.003;
var noiseGrid = 3;

// Setup colors object
const colors = {
col0 : [255, 255, 255],
col1 : [0, 0, 0],
col2 : [255, 0, 0],
col3 : [0, 255, 0],
col4 : [0, 0, 255],
col5 : [255, 255, 0],
col6 : [255, 0, 255],
col7 : [0, 255, 255],
col8 : [255, 255, 255],
col9 : [0, 0, 0],
}

// Setup canvases
function setup() {
    // Constant seed creates a consistent Perlin noise and random number sequence
    seed = 1234;
    noiseSeed(seed);
    randomSeed(seed);
    // Create initial canvas, noise buffer and object buffer
    createCanvas(400, 400);
    // background(255);
    cnv1 = createGraphics(400, 400);
    cnv1.noStroke();
    cnv2 = createGraphics(400, 400);
    cnv2.noStroke();
    // Hoist drawing functions
    noiseCanvas();
    objectCanvas();
    finalDrawing();
    // Test image
    // image(cnv2, 0, 0);
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
    cnv2.background(255);
    for (i = 0; i < 10; i++) {
      x = random(width);
      y = random(height);
      size = random(100,200);
      currentFill = Object.values(colors)[i];
      cnv2.fill(currentFill, 250);
      cnv2.circle(x, y, size);
    }
  }

function finalDrawing() {
    background(255);
    strokeWeight(7);
    colVary = 15;
    for (i = 0; i < width; i += noiseGrid * 2.5) {
      for (j = 0; j < height; j += noiseGrid * 2.5) {
        angCol = cnv1.get(i, j);
        ang = angCol[0] / 255 * PI * 2;
        col = cnv2.get(i, j);
        //stroke(col,250);
        stroke(col[0]+random(-colVary,colVary),
               col[1]+random(-colVary,colVary),
               col[2]+random(-colVary,colVary),
               250);
        push();
        translate(i, j);
        rotate(ang);
        line(0, 0, noiseGrid, 0);
        pop();
      }
    }
  }