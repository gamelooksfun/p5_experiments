// My version
// Setup global variables
var noiseResolution = .005;
var noiseGrid = 1;

// Setup colors object
const colors = {
col0 : [255, 229, 236],
col1 : [7, 190, 184],
col2 : [70, 18, 32],
col3 : [242, 92, 84],
col4 : [175, 43, 191],
col5 : [255, 247, 94],
col6 : [5, 74, 41],
col7 : [6, 26, 64],
col8 : [181, 150, 229],
col9 : [89, 89, 89],
}

// Setup canvases
function setup() {
    // Constant seed creates a consistent Perlin noise and random number sequence
    seed = 60;
    noiseSeed(seed);
    randomSeed(seed);
    // Create initial canvas, noise buffer and object buffer
    createCanvas(400, 400);
    cnv1 = createGraphics(400, 400);
    cnv1.noStroke();
    cnv2 = createGraphics(400, 400);
    cnv2.noStroke();
    // Hoist (?) drawing functions
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
            n = (noise(i * noiseResolution, j * noiseResolution)) * 3;
            // Draw a rectangle at this point with a fill value of n*255 and alpha of 100
            cnv1.fill(n * 255);
            cnv1.rect(i, j, noiseGrid);
        }
    }
}

// Object buffer creates a series of 5 circles with random size and position
function objectCanvas() {
    cnv2.background(255);
    for (i = 0; i < 10; i++) {
      x = random(width);
      y = random(height);
      size = random(100,200);
      currentFill = Object.values(colors)[i];
      cnv2.fill(currentFill);
      cnv2.circle(x, y, size);
    }
  }

function finalDrawing() {
    background(255);
    strokeWeight(1);
    colVary = 15;
    for (i = 0; i < width; i += noiseGrid) {
      for (j = 0; j < height; j += noiseGrid) {
            angCol = cnv1.get(i, j);
            ang = angCol[0] / 255 * PI * 2;
            col = cnv2.get(i, j);
            //stroke(col,250);
            stroke(col[0]+random(-colVary,colVary),
                col[1]+random(-colVary,colVary),
                col[2]+random(-colVary,colVary),
                255);
            push();
            translate(0, 0);
            rotate(ang);
            ellipse(i,j,.1);
            pop();
        }
    }
}

// TO DO
// Expand color palette
// Convert to HSV
// Correlate size to # of mints