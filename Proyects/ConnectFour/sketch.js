const cantSquaresX = 7;
const cantSquaresY = 6;

const squareSize = 80;

const colorPlayer1 = [0, 255, 0];
const colorPlayer2 = [0, 0, 255];

let board;

function mousePressed(){
	board.mousePressed();
}

function setup(){
	createCanvas(squareSize * cantSquaresX, squareSize * cantSquaresY);
	board = new Board(cantSquaresX, cantSquaresY, squareSize);
}

function draw(){
	background(255);
	if(board.update()){
		console.log("Player " + board.playerTurn + " wins!");
		noLoop();
	}
	board.show(squareSize, colorPlayer1, colorPlayer2);
}