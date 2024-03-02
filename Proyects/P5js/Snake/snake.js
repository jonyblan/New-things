/*
// Variable to represent the snake
var s;
// Scale for the size of each "cell" in the grid
var scl = 20;

// Snake constructor function
class Snake{
	constructor(){
		// Initial position and speed of the snake
		this.x = 0;
		this.y = 0;
		this.xspeed = 1;
		this.yspeed = 0;
		// Total length of the snake
		this.total = 0;
		// Array to store the snake's tail segments
		this.tail = [];
	}

    // Method to check if the snake eats the food
    eat(pos) {
        // Calculate distance between snake head and food
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    // Method to change the snake's direction
    dir(x, y){
        this.xspeed = x;
        this.yspeed = y;
    }

    // Method to check for collision with itself
    death() {
        // Loop through each tail segment
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            // If the distance is less than 1, the snake collided with itself
            if (d < 1) {
                console.log('starting over');
                this.total = 0;
                this.tail = [];
            }
        }
    }

    // Method to update the snake's position
    update(){
        // Move the tail segments
        for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        // Add a new tail segment if the snake has eaten food
        if (this.total >= 1) {
            this.tail[this.total - 1] = createVector(this.x, this.y);
        }

        // Move the snake's head
        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        // Constrain the snake's position within the canvas boundaries
        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    // Method to display the snake
    show(){
        fill(255);
        // Draw each tail segment
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        // Draw the snake's head
        rect(this.x, this.y, scl, scl);
    }
}
*/

// they're declared in binary so its easy to check for collitions
const HEAD_CODE = 1, BODY_CODE = 2, TAIL_CODE = 4, FOOD_CODE = 8;

class Snake{
	constructor(cantSquares, squareSize){
		// board coordinates. This mostly saves on the snake's head and tail position is also
		// stored on the board, but having it here saves on time as it doesnt have to iterate
		// through all the board to find the head and the tail (which are the most used points)
		this.xHead = Math.floor(cantSquares / 2);
		this.yHead = Math.floor(cantSquares / 2);
		this.xTail = Math.floor(cantSquares / 2);
		this.yTail = Math.floor(cantSquares / 2) - 2;

		// again, cantSquares and squareSize can be passed or calculated with board.lenght
		// but having them here saves time
		this.cantSquares = cantSquares;
		this.squareSize = squareSize;

		this.framePassed = false;

		this.length = 3;
		this.speed = [1, 0];
	}

	showSnakePart(i, j){
		fill(255);
		rect(i * this.squareSize, j * this.squareSize, this.squareSize, this.squareSize);
	}

	showFood(i, j){
		fill(255, 0, 0);
		ellipseMode(CENTER);
		ellipse(i * this.squareSize, j * this.squareSize, this.squareSize / 2);
	}

	show(board){
		for (let i = 0; i < this.cantSquares; i++) {
			for (let j = 0; j < this.cantSquares; j++) {
				if (board[i][j] & HEAD_CODE || board[i][j] & BODY_CODE || board[i][j] & TAIL_CODE) { // snake
					this.showSnakePart(i, j);
				}
				if (board[i][j] == FOOD_CODE) {
					this.showFood(i, j);
				}
			}
		}
	}

	checkCollitions(board){
		if (board[this.xHead][this.yHead] == HEAD_CODE + BODY_CODE) { // collition between head and body
			return -2;
		}
		if (board[this.xHead][this.yHead] == HEAD_CODE + TAIL_CODE) { // collition between head and food
			return 1;
		}
		return 0; // no collition
	}

	// change the direction that the snake's head is moving
	analizeKeyPressed(){
		// the if inside other if checks that the snake wont do a 180 degree turn
		if (keyIsDown(UP_ARROW)) {
			if(this.speed[0] != 0 || this.speed[1] != 1) {
				this.speed = [0, -1];
			}
		}
		if (keyIsDown(DOWN_ARROW)) {
			if(this.speed[0] != 0 || this.speed[1] != -1) {
				this.speed = [0, 1];
			}
		}
		if (keyIsDown(RIGHT_ARROW)) {
			if(this.speed[0] != -1 || this.speed[1] != 0) {
				this.speed = [1, 0];
			}
		}
		if (keyIsDown(LEFT_ARROW)) {
			if(this.speed[0] != 1 || this.speed[1] != 0) {
				this.speed = [-1, 0];
			}
		}
		if (keyIsDown('80')) { // the letter P pauses the game
			this.speed = [0, 0];
		}
	}

	// checks that the new head's position is valid, and moves it
	checkBoundaries(){
		if(	this.xHead + this.speed[0] > this.cantSquares - 1 ||
			this.xHead + this.speed[0] < 0 ||
			this.yHead + this.speed[1] > this.cantSquares - 1 ||
			this.yHead + this.speed[1] < 0)
			{
				return 0; // head is outside of the board, game over
			}
		// move the head of the snake by the speed
		this.xHead += this.speed[0];
		this.yHead += this.speed[1]; 
		return 1;
	}

	moveHead(board){
		let returnValue = 1;
		board[this.xHead][this.yHead] = BODY_CODE; // where there was the head now its a body part
		if( this.checkBoundaries(board) == 0) {
			returnValue = -2;
		}
		board[this.xHead][this.yHead] += HEAD_CODE; // the position of the head was changed
		return returnValue;
	}

	moveTail(board, tailIsStill){
		if(tailIsStill == 1){
			return ;
		}
	}

	move(board, tailIsStill){ // if tailIsStill == 1, the tail doesnt move, and the snake gains 1 lenght
		let returnValue = this.moveHead(board);
		this.moveTail(board, tailIsStill);
		this.framePassed = true;
		return returnValue;
	}

	update(board){
		let returnValue = 1;
		this.analizeKeyPressed();
		if(this.speed[0] != 0 || this.speed[1] != 0){
			returnValue = this.checkCollitions(board);
			returnValue += this.move(board, returnValue);
		}
		return returnValue;
	}
}