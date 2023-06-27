// My version
// Setup global variables
var noiseResolution = 0.003;
var noiseGrid = 1;
// Setup canvases
function setup() {
    // Constant seed
    seed = 1000;
    noiseSeed(seed);
    // Create initial canvas, noise buffer and object buffer
    createCanvas(400, 400);
    cnv1 = createGraphics(400, 400);
    cnv1.noStroke();
    // cnv2 = createGraphics(400, 400);
    // Hoist drawing functions
    noiseCanvas();
    // objectCanvas();
    // finalDrawing();
    // Test image
    image(cnv1, 0, 0);
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