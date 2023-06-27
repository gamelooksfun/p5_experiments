// Playing with Steve's second example of buffer canvases

let gap = 4;

function setup() {
  seed = random(9999);
  randomSeed(seed);
  noiseSeed(seed);
  maxCanv = min(windowWidth, windowHeight);
  createCanvas(maxCanv,maxCanv);
  cnv1 = createGraphics(width, height);
  cnv1.noStroke();
  cnv2 = createGraphics(width, height);
  noiseCanvas();
  objectCanvas();
  //image(cnv1,0,0);
  finalDrawing();
}

function noiseCanvas(){ 
  rez = 0.003;
  for (i=0;i<width;i+=gap){
    for (j=0;j<height;j+=gap){
      n = (noise(i*rez,j*rez)-0.2)*1.5;
      cnv1.fill(n*255,100);
      cnv1.rect(i,j,gap*2);
    }
  }
  cnv1.filter(BLUR,3);
}

function objectCanvas() {
  cnv2.colorMode(HSB,360,120,100,255);
  cnv2.background(random(90,240),40,random(40,80));
  cnv2.noStroke();
  for (i = 0; i < 10; i++) {
    x = random(width);
    y = random(height);
    size = random(100,200);
    cnv2.fill(random(90,240), random(70,90),random(55,85),250);
    cnv2.circle(x, y, size);
    cnv1.fill(random(255),120);
    cnv1.circle(x,y,size);
  }
}

function finalDrawing() {
  background(255);
  strokeWeight(7);
  strokeCap(SQUARE);
  colVary = 15;
  for (i=0;i<width;i+=gap*2.5){
    for (j=0;j<height;j+=gap*2.5){
      angCol = cnv1.get(i,j);
      ang = angCol[0]/255*PI*2;
      col = cnv2.get(i,j);
      //stroke(col,250);
      stroke(col[0]+random(-colVary,colVary),
             col[1]+random(-colVary,colVary),
             col[2]+random(-colVary,colVary),
             250);
      push();
      translate(i,j);
      rotate(ang);
      line(0,0,gap*6,0);
      pop();
    }
  }
}