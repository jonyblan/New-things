let blocks = [];
let paddle;
let ball;
let blockCount = [40, 20]; // [blocks/row, rows/game]
let winHeight = 600;
let winWidth = 1300;
let spacing = 5;
let brightness = 50;

function setup() {
	createCanvas(winWidth, winHeight); // Adjust canvas size as needed
	paddle = new Paddle();
	ball = new Ball(paddle);
	let r, g, b;
	let w = (winWidth-spacing*4)/blockCount[0] - spacing; 
	let h = (winHeight/2-spacing*4)/blockCount[1] - spacing; 
	for(let i = 0; i < (blockCount[0] * blockCount[1]); i++){
		if(i%blockCount[0] == 0){
			r = Math.random() * (255-brightness) + brightness;
			g = Math.random() * (255-brightness) + brightness;
			b = Math.random() * (255-brightness) + brightness;
		}
		blocks[i] = new Block(getX(i), getY(i), w, h, r, g, b);
	}
}

function draw() {
	background(0);
	paddle.update();
	ball.update();
	paddle.show();
	ball.show();
	checkCollisions(paddle, ball, blocks);
	for(let i = 0; i < (blockCount[0] * blockCount[1]); i++){
		if(blocks[i].alive){
			blocks[i].show();
		}
	}
}

function getX(i){
	return (winWidth/blockCount[0]) * Math.floor(((i)%blockCount[0])) + spacing;
}

function getY(i){
	return ((winHeight/2)/blockCount[1]) * Math.floor(((i)/blockCount[0])) + spacing;
}