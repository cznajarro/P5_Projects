let circleX;
let circleY;
let score;
let speed;
let b_chance;
let increase;
let paused = false;
let beforespeed;
increase = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noCursor();
  score = 0;
  circleX = random(width);
  circleY=0;
  speed = random(2,5);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  if (keyCode === 32 && !paused) {
    paused = true;
    beforespeed = speed;
    speed = 0;
  }
  else if (keyCode === 32) {
    speed = beforespeed;
    paused = false
  }
}

function draw() {
  background(220);
  square(mouseX, 740,50 );
  circle(circleX, circleY, 10);
  circleY+=speed;

  if (circleX < mouseX +20 && circleX > mouseX - 20 && circleY < 780 && circleY > 730) { //if the circle hits the mouse, increase the score
    score += increase;
    let b_chance = random(1,100);
    if (b_chance <= 25) {
      fill(0,0,255);
      increase = 3;
    }
    else {
      increase = 1;
      fill(255);
    }
    circleY=0;
    circleX = random(width);
    speed = random(2,5);
  }

  if (circleY >= 820) { //if it falls to the bottom, score is set to 0
    score = 0;
    circleY=0;
    circleX = random(width);
    speed = random(2,5);
    increase = 1;
  }
  text("Score: " + score,10, windowHeight - 20);
}