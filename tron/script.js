let cell = 40;
let columns, rows;
let gameOver = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    background(0);
}

function draw() {
    columns = floor(windowWidth / cell);
    rows = floor(windowHeight / cell);
    background(10);
    makeGrid();
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

function makePlayer() {
    ellipse()
}