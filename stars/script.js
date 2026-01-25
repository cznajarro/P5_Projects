let stars = [];
let speed = 12;

function setup() {
    createCanvas(windowWidth, windowHeight); //start the window

    for (let i = 0; i < 100; i++) {
        stars.push(new Star()); //creates a new Star object
    }
}

function draw() {
    background(0);//black background

    for (let star of stars){
    star.move();
    star.show();
    }
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

class Star {
    constructor() {
        this.start();
    }

    start() {
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(0, width);
    }

    move() {
        this.z -= speed;
        if (this.z < 1) { //once the star reaches the edge of the screen, restart it over again
            this.start();
            this.z = width;
        }
    }
    
    show() {
        let horizontalMove = width/2 + (this.x / this.z) * width/ 2; //width /2 is horizontal middle
        let verticalMove = height/2 + (this.y / this.z) * height / 2; //vertical middle
        let starSize = 4 * (1 - (this.z/width))//this part uses z to make stars that are "farther away" smaller than ones that are "close"
        fill(255); //star color
        noStroke();
        circle(horizontalMove, verticalMove, starSize);
    }
}