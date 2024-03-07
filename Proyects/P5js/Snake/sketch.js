let cantSquaresX = 30;
let cantSquaresY = 30;
let squareSize = 25;
let board;
let frames = 60;

function setup(){
	createCanvas(cantSquaresX * squareSize, cantSquaresY * squareSize);
	board = new Board(cantSquaresX, cantSquaresY, squareSize);
	frameRate(frames);
}

function draw(){
	background(0);
	board.show();
	if (board.update() & 1) {
		console.log("Game Over");
		noLoop(); // game over
	}

}