// create an object that holds genre names and their corresponding hue values
var genreHues = {"Hip-hop & Rap": 310, "Pop": 274, "Electronic":157}

// define genre variable that will be used to determine gradient
var selectedGenre;

// create an array of saturation values for selected hue
var tileSaturation = [];
for (var i = 0; i < 10; i+=1) {
  tileSaturation.push(i);
}

// setup canvas
function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

// draw a tile for each saturation value in tileSaturation array
function draw() {
  //random object value from genreHues object;
  selectedGenre = genreHues["Electronic"];
  // TODO selectedGenre = random(Object.keys(genreHues));
  // print selected genre to console
  console.log(selectedGenre);
  // draw and fill tiles, beginning with uppper left corner of canvas (0,0)
  var xVertex = 0;
    for (var i = 0; i < tileSaturation.length; i++) {
      // define saturation variable, which will take on values from tileSaturation array
      var saturation = tileSaturation[i];
      // define fill color to apply to tile
      fill(selectedGenre, saturation, 100);
      // draw tile (upper left xy coordinate, width of tile is number of saturation values, height of tile is height of canvas)
      rect(xVertex, 0, width/tileSaturation.length, height);
      // increment xVertex by width of tile
      xVertex += width/tileSaturation.length;
    }
  }

/* TODO
  
allow user to select genre from genreHues object

function keyPressed() {
  if (key == 1) {
    selectedGenre = "Hip-hop & Rap";
  }
  if (key == 2) {
    selectedGenre = "Pop";
  }
  if (key == 3) {
    selectedGenre = "Electronic";
  }
  return selectedGenre;
} */