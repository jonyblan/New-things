// Declare any global variables here
let paddles = [];
let ball;
let winHeight = 400;
let winWidth = 800;
let score = [0, 0]; // Initialize score variable

function setup() {
	createCanvas(winWidth, winHeight); // Adjust canvas size as needed
	paddles.push(new Paddle(winWidth*0.1, winHeight*0.5, 10, 80));
	paddles.push(new Paddle(winWidth*0.9, winHeight*0.5, 10, 80));
	ball = new Ball();
}

function draw() {
	background(0); // Adjust background color as needed
	if(ball.update()){
		if(ball.speedX > 0){
			score[1] ++;
			ball.start(-1);
		}
		else{
			score[0] ++;
			ball.start(1);
		}
	}
	ball.display();
	for (let i = 0; i < paddles.length; i++) {
		paddles[i].update(i);
		paddles[i].display();
		checkCollision(ball, paddles[i]);
	}

	// Draw score at the center top of the screen
	textSize(32); // Adjust font size as needed
	fill(255); // Adjust text color as needed
	textAlign(CENTER, TOP);
	text(score[0] + " - " + score[1], width/2, 10); // Adjust position as needed
}
