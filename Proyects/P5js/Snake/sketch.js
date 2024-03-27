let cantSquaresX = 30;
let cantSquaresY = 30;
let squareSize = 20;
let board;
let frames = 60;
let cantFramesTaken = 0;
let percentage = 25;

let cantFrames = {
	0: [],
	1: [],
	2: [],
	3: [],
	4: [],
	5: [],
	6: [],
	7: [],
	8: [],
	9: [],
	10: [],
	11: [],
	12: [],
	13: [],
	14: [],
	15: [],
	16: [],
	17: [],
	18: [],
	19: [],
	20: [],
	21: [],
	22: [],
	23: [],
	24: [],
	25: [],
	26: [],
	27: [],
	28: [],
	29: [],
	30: [],
	31: [],
	32: [],
	33: [],
	34: [],
	35: [],
	36: [],
	37: [],
	38: [],
	39: [],
	40: [],
	41: [],
	42: [],
	43: [],
	44: [],
	45: [],
	46: [],
	47: [],
	48: [],
	49: [],
	50: [117835],
	51: [],
	52: [],
	53: [],
	54: [],
	55: [],
	56: [],
	57: [],
	58: [],
	59: [],
	60: [],
	61: [],
	62: [],
	63: [],
	64: [],
	65: [],
	66: [],
	67: [],
	68: [],
	69: [],
	70: [],
	71: [],
	72: [],
	73: [],
	74: [],
	75: [],
	76: [],
	77: [],
	78: [],
	79: [],
	80: [],
	81: [],
	82: [],
	83: [],
	84: [],
	85: [],
	86: [],
	87: [],
	88: [],
	89: [],
	90: [],
	91: [],
	92: [],
	93: [],
	94: [],
	95: [],
	96: [],
	97: [],
	98: [],
	99: [],
	100: [169500, 174500, 161500, 173500, 170500, 167500, 169500, 173500],
}

function setup(){
	createCanvas(cantSquaresX * squareSize, cantSquaresY * squareSize);
	board = new Board(cantSquaresX, cantSquaresY, squareSize, percentage);
	frameRate(frames);
}

function draw(){
	background(0);
	board.show();
	cantFramesTaken++;
	if (board.update() & 1) {
		console.log("Game Over. Cant Frames: " + cantFramesTaken);
		cantFrames[percentage].push(cantFramesTaken);
		let sum = 0, len = cantFrames[percentage].length;
		for(let i = 0; i < len; i++){
			sum += cantFrames[percentage][i];
		}
		console.log("Current Average: " + sum / len);
		cantFramesTaken = 0;
		board = new Board(cantSquaresX, cantSquaresY, squareSize, percentage);
	}

}