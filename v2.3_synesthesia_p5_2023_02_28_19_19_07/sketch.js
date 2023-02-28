//sound
let attackLevel = 0.5;
let releaseLevel = 0;
let attackTime = 0.001;
let decayTime = 0.2;
let susPercent = 0.2;
let releaseTime = 0.5;
let env, triOsc;
//viz
let particles = [];
const num = 1000;
const noiseScale = 0.01;

function playEnv() {
  triOsc.start();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.play();
}

function setup() {
  //sound
  attackTime = 0.5;
  decayTime = 4;
  releaseTime = 6;
  //cnv.mousePressed(playEnv,draw());
  env = new p5.Envelope();
  triOsc = new p5.Oscillator("triangle");
  triOsc.amp(env);
  triOsc.freq(220);
  playEnv();
  //viz
  let cnv = createCanvas(400, 400);
  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }
  strokeWeight(random([25], [50]));
  stroke(random([0], [255]), random([0], [255]), random([0], [255]));
}

function draw() {
  background(0, 5);
  for (let i = 0; i < num; i++) {
    let p = particles[i];
    rect(p.x, p.y, 1, 1);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    /*if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);*/
  }
}

/*function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}*/
