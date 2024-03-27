class Paddle {
	constructor() {
		this.x = winWidth/2;
		this.y = winHeight*0.9;
		this.width = 80;
		this.height = 10;
		this.speed = 5;
		this.color = [255, 255, 255];
	}

	update() {
		if (keyIsDown(LEFT_ARROW)) {
			this.x -= this.speed;
		}
		if (keyIsDown(RIGHT_ARROW)) {
			this.x += this.speed;
		}
	}

	show() {
		rectMode(CENTER);
		fill(this.color[0], this.color[1], this.color[2]);
		rect(this.x, this.y, this.width, this.height);
	}
}

class Block {
	constructor(x, y, width, height, r, g, b){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = [r, g, b];
		this.alive = true;
	}

	show(){
		rectMode(CORNER);
		fill(this.color[0], this.color[1], this.color[2]);
		rect(this.x, this.y, this.width, this.height);
	}
}

class Ball{
	constructor(paddle){
		this.radius = 10;
		this.x = paddle.x;
		this.y = paddle.y-this.radius;
		this.speedX = -3;
		this.baseSpeedX = 3;
		this.maxSpeedX = 10;
		this.speedY = -3;
		this.baseSpeedY = 3;
		this.maxSpeedY = 5;
		this.framesFromCollition = 0;
		this.color = [255, 255, 255];
	}

	update(){
		if(this.x + this.radius >= winWidth){
			this.speedX *= -1;
		}
		if(this.x - this.radius <= 0){
			this.speedX *= -1;
		}
		if(this.y + this.radius >= winHeight){
			this.color = [255, 0, 0];
			this.speedY *= -1;
		}
		if(this.y - this.radius <= 0){
			this.speedY *= -1;
		}
		this.x += this.speedX;
		this.y += this.speedY;
		this.framesFromCollition++;
	}

	show(){
		fill(this.color[0], this.color[1], this.color[2]);
		ellipse(this.x, this.y, this.radius);
	}
}

function checkCollisions(paddle, ball, blocks){
	collitionPaddleBall(paddle, ball);
	collitionBlockBall(blocks, ball);
}

function collitionPaddleBall(paddle, ball){
	if(ball.framesFromCollition < 10){
		return false;
	}
	let ballRadius = ball.radius;
	let halfPaddleWidth = paddle.width / 2;
	let halfPaddleHeight = paddle.height / 2;
	
	// Calculate the distance between the ball and the paddle
	let dx = ball.x - max(paddle.x - halfPaddleWidth, min(ball.x, paddle.x + halfPaddleWidth));
	let dy = ball.y - max(paddle.y - halfPaddleHeight, min(ball.y, paddle.y + halfPaddleHeight));
	let distance = sqrt(dx * dx + dy * dy);
	
	// If the distance is less than the ball's radius, a collision occurs
	if (distance < ballRadius) {
        let relativeY = abs(ball.y - paddle.y);
		let relativeX = abs(ball.x - paddle.x);
        let scaleFactor = map(relativeY, 0.2, halfPaddleWidth, ball.baseSpeedY, ball.maxSpeedY); // Adjust the scale factor as needed
        if(ball.speedY > 0){
			ball.speedY = -scaleFactor * ball.baseSpeedY * 0.5 - ball.speedY * 0.5; // Invert direction and scale speedX
			if(ball.speedY > -ball.baseSpeedY){
				ball.speedY = -ball.baseSpeedY;
			}
		}
		else{
			ball.speedY = scaleFactor * ball.baseSpeedY * 0.5 - ball.speedY * 0.5; // Invert direction and scale speedX
			if(ball.speedY < ball.baseSpeedY){
				ball.speedY = ball.baseSpeedY;
			}
		}
		ball.speedX = map(relativeX, 0, halfPaddleWidth, ball.baseSpeedX, ball.maxSpeedX);
		if(ball.x - paddle.x < 0){
			ball.speedX = -abs(ball.speedX);
		}
		ball.framesFromCollition = 0;
        return true;
    } else {
        return false;
    }
}

function collitionBlockBall(blocks, ball){
	for(let i = 0; i < blocks.lenght(); i++){
		
	}
}