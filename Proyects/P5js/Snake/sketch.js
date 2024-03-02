/*
var food;

function setup() {
    // Set up the canvas
    createCanvas(windowWidth-100, windowHeight-100);
    background(0);
    // Create a new Snake object
    s = new Snake();
    frameRate(10);
    // Place the initial food
    pickLocation();
}

function pickLocation() {
    // Randomly pick a location for the food
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function mousePressed() {
    // Increment the snake's length when mouse is pressed
    s.total++;
}

function draw() {
    // Refresh the canvas
    background(0);

    // Check if the snake has eaten the food
    if (s.eat(food)) {
        // Pick a new location for the food
        pickLocation();
		s.createPath();
    }
    // Check for game over
    s.death();
    // Update and display the snake
    s.update();
    s.show();

    // Draw the food
    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}
*/

let cantSquares = 30;
let snake;
let food;
let board = [];
let frames = 10;

function setup(){
	createCanvas(cantSquares * 20, cantSquares * 20);
	snake = new Snake(width / cantSquares, cantSquares);
	for (let i = 0; i < cantSquares; i++) {
		board[i] = [];
		for (let j = 0; j < cantSquares; j++) {
			board[i][j] = 0;
		}
	}
	frameRate(frames);
}

function draw(){
	background(0);
	snake.show(board);
	if (snake.update(board) < 0) {
		console.log("Game Over");
		noLoop(); // game over
	}

}