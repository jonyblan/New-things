const cantSquaresX = 7;
const cantSquaresY = 6;

const squareSize = 80;

const colorPlayer1 = [0, 255, 0];
const colorPlayer2 = [0, 0, 255];

let board;

let players = [];
let frameCountsss = 0;
let aiTurn = false;

function mousePressed(){
	board.mousePressed();
}

function setup(){
	createCanvas(squareSize * cantSquaresX, squareSize * cantSquaresY);
	players = [PLAYER_CODE, AI_CODE];
	board = new Board(cantSquaresX, cantSquaresY, players);
	frameRate(10);
}

function draw(){
	background(255);
	frameCountsss++;
	if(frameCountsss >= 10){
		frameCountsss = 0;
		aiTurn = true;
	}
	else{
		aiTurn = false;
	}
	let ret = board.update(aiTurn);
	if(ret == WIN_CODE){
		console.log("Player " + board.playerTurn + " wins!");
		noLoop();
	}
	if(ret == DRAW_CODE){
		console.log("It's a draw");
		noLoop();
	}
	board.show(squareSize, colorPlayer1, colorPlayer2);
}