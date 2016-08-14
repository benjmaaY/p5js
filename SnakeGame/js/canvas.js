var snakeObj;
var snakeThickness = 10, food;
var startFrameRate = 10;
var dynamicFrameRate = startFrameRate;
function setup() {
    createCanvas(600,600);
    snakeObj = new Snake();
    frameRate(dynamicFrameRate);
    createFoodAtRandomLoc();
}
function draw() {
    background(80);    
    if(snakeObj.eat(food)) {
        createFoodAtRandomLoc();
    }
    snakeObj.kill();
    snakeObj.update();
    snakeObj.show();
    fill(255,69,0);
    rect(food.x,food.y, snakeThickness,snakeThickness);
}
function keyPressed() {
    if (keyCode === UP_ARROW) snakeObj.direction(0,-1);
    else if (keyCode === DOWN_ARROW) snakeObj.direction(0,1);
    else if (keyCode === LEFT_ARROW) snakeObj.direction(-1,0);
    else if (keyCode === RIGHT_ARROW) snakeObj.direction(1,0);
}
function createFoodAtRandomLoc () {
    food = createVector(floor(random(floor(width/snakeThickness))),floor(random(floor(height/snakeThickness))));
    food.mult(snakeThickness);
}
