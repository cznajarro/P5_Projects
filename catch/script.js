let circleX;
let circleY;
let score;
let speed;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  score = 0;
  circleX = random(width);
  circleY=0;
  speed = random(2,5);
}

function draw() {
  background(220);
  square(mouseX, 740,50 );
  circle(circleX, circleY, 10);
  circleY+=speed;
  if (circleX < mouseX +20 && circleX > mouseX - 20 && circleY < 780 && circleY > 730) {
    score +=1
    circleY=0;
    circleX = random(width);
    speed = random(2,5);
  }
  if (circleY >= 820) {
    score = 0;
    circleY=0;
    circleX = random(width);
    speed = random(2,5);
  }
  print(score);
}