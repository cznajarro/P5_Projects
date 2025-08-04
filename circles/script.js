
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  let i = random(50,255);
  let x = random(50,255);
  let g = random(50, 255);
  let c = color(i,x,g);
  let a = random(0,windowWidth);
  let b = random(0,windowHeight);
  noStroke();
  fill(c);
  circle(a, b, 20);
}