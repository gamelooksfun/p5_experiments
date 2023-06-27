// Not actually a buffer canvas exercise, but likeed this approach to creating a curve

const width = 400;
const height = 400;
function setup() {
  createCanvas(width, height);
}

function draw() {
  background(220);
  noStroke();
  const totalPoints = height * 2;
  for (let i = 0; i < totalPoints; i ++) {
    fill(getColor(i / totalPoints))
    circle(width * (0.5 + 0.3 * Math.sin(i/50)), i/2, 200);
  }
  noLoop()
}

function getColor(value) {
  const palette = [
    color("#000000"),
    color("#000000"),
    color("#ff0000"),
    color("#fcab29"),
    color("#fd9c8a"),
    color("#f541db"),
    color("#6075fe"),
    color("#02f3ff"),
    color("#ffffff")
  ];
  const idx = (palette.length - 1) * value;
  const idxFrom = Math.floor(idx);
  const from = palette[idxFrom];
  const idxTo = Math.ceil(idx);
  const to = palette[idxTo];
  const relativeValue = (idx - idxFrom);
  return lerpColor(from, to, relativeValue);
}