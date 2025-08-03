w = 1200
h = 800

function setup() {
  createCanvas(w, h);
  background(0);
}

function draw() {
  let i = random(50,255);
  let x = random(50,255);
  let g = random(50, 255);
  let c = color(i,x,g);
  let a = random(0,w);
  let b = random(0,h);
  noStroke();
  fill(c);
  circle(a, b, 20);
}