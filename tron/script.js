let cell = 40;
let columns, rows;
let gameOver = false;
let playerX = 40;
let playerY = 40;
let nextDirection = "right";

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    background(0);
    columns = floor(windowWidth / cell);
    rows = floor(windowHeight / cell);
    makeGrid();
}

function draw() {
    noStroke();
    fill(255,255, 0);
    circle(playerX, playerY,8);
  
    start();
    fill(255);
    circle(playerX, playerY, 10);
}

function makeGrid() {
    stroke(60);
    strokeWeight(1);
    for(let x = 0; x <= columns; x++) {
        line(x * cell, 0, x * cell, windowHeight);
    }

    for(let y = 0;y <= rows; y++) {
        line(0, y * cell, windowWidth, y * cell);
    }
}

function start() {
  if (nextDirection == "left") {
    playerX -= 2;
  } else if (nextDirection == "up") {
    playerY -= 2;
  } else if (nextDirection == "down") {
    playerY += 2;
  } else {
    playerX += 2;
  }
}

function keyPressed() {
  if (key === 'w') {
    nextDirection = 'up';
  } else if (key === 's') {
    nextDirection = 'down';
  } else if (key === 'd') {
    nextDirection = 'right';
  } else if (key === 'a') {
    nextDirection = 'left';
  }
}
