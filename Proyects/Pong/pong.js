// Define Pong related classes and functions here

class Paddle {
	constructor(x, y, w, h) { // Adjust the constructor parameters to include width and height
		this.x = x;
		this.y = y;
		this.width = w; // Corrected: width property
		this.height = h; // Corrected: height property
		this.speed = 2;
	}

	update(index) {
		// Example interaction: move paddle with arrow keys
		if(index == 1){
			if (keyIsDown(UP_ARROW)) {
				this.y -= this.speed;
			}
			if (keyIsDown(DOWN_ARROW)) {
				this.y += this.speed;
			}
		}
		if(index == 0){
			if (keyIsDown(87)) {
				this.y -= this.speed;
			}
			if (keyIsDown(83)) {
				this.y += this.speed;
			}
		}
	}

	display() {
		fill(255);
		rectMode(CENTER);
		rect(this.x, this.y, this.width, this.height);
	}
}

class Ball {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;
		this.radius = 10; // Adjust ball radius
		this.baseSpeedX = 3; // Adjust initial ball speed
		this.speedX = 2;
		this.speedY = Math.random() * 4 - 2;
		this.maxSpeedX = 5;
		this.maxSpeedY = 5;
		this.framesFromCollition = 0;
		this.color = [255, 255, 255];
	}

	start(direction){
		this.x = width / 2;
		this.y = height / 2;
		this.speedX = this.baseSpeedX * direction;
		this.speedY = Math.random() * 4 - 2;
	}

	update(){
		this.x += this.speedX;
		this.y += this.speedY;

		this.framesFromCollition++;

		// Bounce off walls
		if (this.x - this.radius < 0 || this.x + this.radius > width) {
			this.speedX *= -1;
			return true;
		}

		if (this.y - this.radius < 0 || this.y + this.radius > height) {
			this.speedY *= -1;
		}
		return false;
	}

	display() {
		fill(this.color[0], this.color[1], this.color[2]);
		ellipse(this.x, this.y, this.radius * 2);
	}
}

// Function to check collision between ball and paddle and handle bouncing
function checkCollision(ball, paddle) {
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
        let scaleFactor = map(relativeY, 0.2, halfPaddleHeight, ball.baseSpeedX, ball.maxSpeedX); // Adjust the scale factor as needed
        if(ball.speedX > 0){
			ball.speedX = -scaleFactor * ball.baseSpeedX * 0.5 - ball.speedX * 0.5; // Invert direction and scale speedX
			if(ball.speedX > -ball.baseSpeedX){
				ball.speedX = -ball.baseSpeedX;
			}
			ball.framesFromCollition = 0;
		}
		else{
			ball.speedX = scaleFactor * ball.baseSpeedX * 0.5 - ball.speedX * 0.5; // Invert direction and scale speedX
			if(ball.speedX < ball.baseSpeedX){
				ball.speedX = ball.baseSpeedX;
			}
			ball.framesFromCollition = 0;
		}
        return true;
    } else {
        return false;
    }
}
