const HEAD_CODE = 1, BODY_CODE = 2, FOOD_CODE = 4, NOTHING_CODE = 0;

// The snake is made up of STATIC tails (they dont move, each appears)
// and disappears according to the logic
// tail[length - 1] = head, tail[0] = tail
class Tail{
	constructor(x, y, index){
		this.x = x;
		this.y = y;
		this.index = index;
	}
}

class Food{
	constructor(){
		this.x;
		this.y;
	}

	// returns a whole random number [0 - maxNum)
	getRandomNum(maxNum){
		return Math.floor(Math.random() * maxNum);
	}

	// Returns true if the food and the snake's head are colliding
	checkSnakeFoodCollition(snake){
		if(snake.tail[snake.length - 1].x == this.x && snake.tail[snake.length - 1].y == this.y){
			return true;
		}
		return false;
	}

	// returns an array {xPos, yPos}
	getRandomPositions(cantSquaresX, cantSquaresY){
		let positions = [];
		positions[0] = this.getRandomNum(cantSquaresX);
		positions[1] = this.getRandomNum(cantSquaresY);

		return positions;
	}

	// returns true if there's a collition between the snake's body
	// and the food
	// Useful when creating a new food and having to check if it
	// was created in a valid or not position
	checkSnakeBodyFoodCollition(snake){
		let len = snake.tail.length;
		for(let i = 0; i < len; i++){
			if(snake.tail[i].x == this.x && snake.tail[i].y == this.y){
				return true;
			}
		}
		return false;
	}

	// Moves the food to a random valid square
	moveFoodToRandom(cantSquaresX, cantSquaresY, snake){
		let positions = [];
		let continueTrying = true;

		// checks that the position is not inside the snake
		while(continueTrying){
			positions = this.getRandomPositions(cantSquaresX - 1, cantSquaresY - 1);
			this.x = positions[0];
			this.y = positions[1];
			continueTrying = this.checkSnakeBodyFoodCollition(snake);
		}
	}

	// shows the food
	show(squareSize){
		fill(255, 0, 0);
		ellipse(this.x * squareSize + squareSize / 2, this.y * squareSize + squareSize / 2, squareSize * 0.9);
	}
}

class Snake{
	constructor(cantSquaresX, cantSquaresY){
		this.length = 3;
		this.speed = [1, 0];

		// declare the starting body of the snake
		// the tail array will contain all of the snake's body parts
		// and the index would go from 0 to its lenght - 1,
		// also, its first index would have its tail, and its last would
		// have the head for easy use

		let xHead = this.length - 1;
		let yHead = cantSquaresY - 1;
		this.tail = [];

		let lastStart = new Tail(xHead - 2, yHead, this.length - 3);
		let middleStart = new Tail(xHead - 1, yHead, this.length - 2);
		let firstStart = new Tail(xHead, yHead, this.length - 1);

		this.tail.push(lastStart);
		this.tail.push(middleStart);
		this.tail.push(firstStart);
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

	// shows the snake
	show(squareSize){
		let len = this.length;
		for(let i = 0; i < len - 1; i++){
			fill(255);
			rect(this.tail[i].x * squareSize, this.tail[i].y * squareSize, squareSize - 1, squareSize - 1);
		}
		fill(0, 255, 0);
		rect(this.tail[len - 1].x * squareSize, this.tail[len - 1].y * squareSize, squareSize - 1, squareSize - 1);
	}

	// moves the head by the speed vector
	// and creates a new tail in the new position
	moveHead(){
		let newX = this.tail[this.length - 1].x + this.speed[0];
		let newY = this.tail[this.length - 1].y + this.speed[1];
		let newBody = new Tail(newX, newY, this.length);
		this.tail.push(newBody);
	}

	// deletes the last tail in the snake.tail vector
	moveTail(){
		this.tail.splice(0, 1);
	}

	// moves the snake
	update(moveTail){
		this.moveHead();

		if(moveTail){
			this.moveTail();
		} 
		// if the tail didn't move it's because a new food was eaten
		else{
			this.length++;
		}
	}

	// checks if the snake's head has crashed with the border
	checkSnakeBorderCollition(cantSquaresX, cantSquaresY){
		let x = this.tail[this.length - 1].x, y = this.tail[this.length - 1].y;

		if(	x < 0 ||
			x > cantSquaresX - 1 ||
			y < 0 ||
			y > cantSquaresY - 1)
			{
				console.log("Snake crashed with the border");
				return true; // head is outside of the board, game over
			}

		return false;
	}

	// check if the snake has crashed with it's body
	checkSnakeSnakeCollition(){
		let len = this.length;
		for(let i = 0; i < len - 1; i++){
			if(this.tail[i].x == this.tail[len - 1].x && this.tail[i].y == this.tail[len - 1].y){
				console.log("Snake crashed with itself");
				return true;
			}
		}
		return false;
	}
}


class Board{
	constructor(cantSquaresX, cantSquaresY, squareSize){
		// the board contains a snake and a food object, and some control variables.
		// The flow of the program is that the board contains broad methods that call
		// snake and food methods, which do the logic
		this.snake = new Snake(cantSquaresX, cantSquaresY);
		this.food = new Food();
		
		// save some variables here to not evaluate them again later
		this.cantSquaresX = cantSquaresX;
		this.cantSquaresY = cantSquaresY;
		this.squareSize = squareSize;

		// create a 2d array with positions for future use
		this.positions = [];
		for (let i = 0; i < cantSquaresX; i++) {
			this.positions[i] = [];
			for(let j = 0; j < cantSquaresY; j++){
				this.positions[i][j] = 0;
			}
		}

		// initialize the food
		this.food.moveFoodToRandom(cantSquaresX, cantSquaresY, this.snake);

		// this is the brain of the snake. As soon as the snake reaches a certain point
		// (could be eating food, getting out of instructions, detecting something on the
		// enviroment, etc), new instructions will be given to it. Instructions will
		// be in the format of [,], meaning the speed (direction) it should
		// take in this move and future moves. It can be abandoned, changes in between, etc.
		// I'll make a bunch of bots but all they're gonna know is:
		// 1) Current instructions. 2) 2d array with
		// all the information of the board (nothing, snake body, snake head or food).
		// Using these elements, the bot will send back a list of instructions, until
		// it dies
		this.instructions = [];
	}

	// returns a 2 bit number, the first bit indicates that the game is over, the second 
	// indicates that a food was eaten
	checkCollitions(cantSquaresX, cantSquaresY, snake){
		let answer = 0;
		
		// if one of this collitions is true, the game ends
		if(	this.snake.checkSnakeBorderCollition(cantSquaresX, cantSquaresY) ||
			this.snake.checkSnakeSnakeCollition()){
			answer++;
		}

		// if this collition is true, a food was eaten
		if(this.food.checkSnakeFoodCollition(snake)){
			this.food.moveFoodToRandom(cantSquaresX, cantSquaresY, snake);
			answer += 2;
		}

		return answer;
	}

	// Sets all the board to nothing (creating it)
	setNothingValues(){
		let boardValues = [];
		for(let i = 0; i < this.cantSquaresX; i++){
			boardValues[i] = [];
			for(let j = 0; j < this.cantSquaresY; j++){
				boardValues[i][j] = NOTHING_CODE;
			}
		}
		return boardValues;
	}

	// sets the food code to the board
	setFoodValue(boardValues){
		boardValues[this.food.x][this.food.y] = FOOD_CODE;
		return boardValues;
	}

	// sets the snake code to the board (head and tail)
	setSnakeValues(boardValues){
		let len = this.snake.tail.length;
		for(let i = 0; i < len - 1; i++){
			boardValues[this.snake.tail[i].x][this.snake.tail[i].y] = BODY_CODE;
		}

		let headX = this.snake.tail[len - 1].x;
		let headY = this.snake.tail[len - 1].y;

		boardValues[headX][headY] = HEAD_CODE;

		return boardValues;
	}

	// sets and returns the board values (nothing, head, body, food)
	setBoardValues(){
		let boardValues = [];

		boardValues = this.setNothingValues();
		boardValues = this.setFoodValue(boardValues);
		boardValues = this.setSnakeValues(boardValues);
		
		return boardValues;
	}
	
	// makes an instruction and then deletes it
	makeInstruction(){
		if(!(this.instructions === undefined)){
			if(this.instructions.length != 0){
				this.snake.speed[0] = this.instructions[0][0];
				this.snake.speed[1] = this.instructions[0][1];
				this.instructions.splice(this.instructions, 1);
			}
		}
	}

	update(){
		this.snake.analizeKeyPressed();
		let boardValues = this.setBoardValues();

		// uncomment this if is lazy or lazyOptimized is called
		// (must debug later but having the if inside lazyOptimized breaks it)
		if(this.instructions === undefined || this.instructions.length == 0){
			// asks the bot for instructions
			this.instructions = botTurnLazyOptimized(this.instructions, boardValues);
		}

		// makes the first instruction in this.instructions[]
		this.makeInstruction();

		// first bit indicates game's over, second one that food was eaten
		let answer = this.checkCollitions(this.cantSquaresX, this.cantSquaresY, this.snake);

		let moveTail = ((answer & 2) == 0); // is the second bit off?
		this.snake.update(moveTail);

		return answer;
	}

	// shows the snake and the food
	show(){
		this.snake.show(this.squareSize);
		this.food.show(this.squareSize);
	}
}