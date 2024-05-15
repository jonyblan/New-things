// the lazy optimized bot is the same as the lazy bot, but it cuts unnecesary travel time
// by cutting horizontally the screen to go to the next food.
// this isnt always optimal, as a short term gain can be a long term loss
// so worthSaving functions are implemented to see when its better to
// save time, and when not
// Another important thing about this bot, is that it's not perfect.
// Sometimes it could do some things faster, but it would
// defeat the purpose of this bot which is to be the first one optimized.
// This code is easy to read, easy to understand, etc. Later ones,
// will have its main focus on being better

function moveUp(){
	return [0, -1];
}

function moveDown(){
	return [0, 1];
}

function moveLeft(){
	return [-1, 0];
}

function moveRight(){
	return [1, 0];
}

// If you're in the top right corner, go left
function checkTopRightCorner(headPos, cantSquaresX){
	let newInstructions = [];
	
	if(headPos[0] == cantSquaresX - 1 && headPos[1] == 0){
		newInstructions[0] = moveLeft();
	}

	return newInstructions;
}

// If you're in the top left corner, go down
function checkTopLeftCorner(headPos){
	let newInstructions = [];

	if(headPos[0] == 0 && headPos[1] == 0){
		newInstructions[0] = moveDown();
	}

	return newInstructions;
}

// If you're in the right wall (not the top one) go up and then left
function checkRightWall(headPos, cantSquaresX){
	let newInstructions = [];

	if(headPos[0] == cantSquaresX - 1){
		newInstructions[0] = moveUp();
		newInstructions[1] = moveLeft();
	}

	return newInstructions;
}

// If you're almost in the left wall (not in the top lane)
// save space for going down later by going up and then right
function checkAlmostLeftWall(headPos){
	let newInstructions = [];

	if(headPos[0] == 1 && headPos[1] != 0){
		newInstructions[0] = moveUp();
		newInstructions[1] = moveRight();
	}

	return newInstructions;
}

// if you're in the bottom left wall, go right
// (2 times to prevent the checkAlmostLeftWall() function
// from activating in the next frame)
function checkBottomLeftCorner(headPos, cantSquaresY){
	let newInstructions = [];

	if(headPos[0] == 0 && headPos[1] == cantSquaresY - 1){
		newInstructions[0] = moveRight();
		newInstructions[1] = moveRight();
	}

	return newInstructions;
}

function areInstructionsClear(newInstructions, currentInstructions){
	return(	
			(newInstructions === undefined ||
			newInstructions.length == 0) && 
			(currentInstructions === undefined || 
				currentInstructions.length == 0));
}

// returns true if the benefit of saving space
// is greater than its cost
function worthSavingUpGoUp(boardValues, headPos, cantSquaresY){
	return true;
}

// returns true if the benefit of saving space
// is greater than its cost
function worthSavingUpGoDown(boardValues, headPos, cantSquaresY){
	return true;
}

// returns true if the benefit of saving space
// is greater than its cost
function worthSavingDown(boardValues, headPos, cantSquaresY){
	let lastBody = 0;
	for(let i = 0; i < cantSquaresY; i++){
		if(boardValues[1][i] != 0){
			lastBody = i;
		}
	}

	if((cantSquaresY - lastBody / 2) > (cantSquaresY - headPos[1])){
		return true;
	}
	return false;
}

function saveSpaceUpGoUp(boardValues, headPos, foodPos, cantSquaresX){
	let newInstructions = [];

	// if there's a body blocking the way
	for(let i = foodPos[1]; i < headPos[1]; i++){
		if(boardValues[cantSquaresX - 1][i]){
			return;
		}
	}

	let pseudoFoodY = foodPos[1], i;

	if(foodPos[1] % 2 == 0){
		pseudoFoodY = foodPos[1] - 1;
	}

	let dif = headPos[1] - pseudoFoodY;	

	// go up until you get to the food's line
	for(i = 0; i < dif - 1; i++){
		newInstructions[i] = moveUp();
	}
	// and then turn left
	newInstructions[i] = moveLeft();

	return newInstructions;
}

function saveSpaceUpGoDown(boardValues, headPos, cantSquaresX){
	let newInstructions = [];

	if(boardValues[0][headPos[1]] != 0){
		return newInstructions;
	}
	let i;
	newInstructions[0] = moveUp();
	for(i = 0; i < cantSquaresX - 1; i++){
		newInstructions[i + 1] = moveLeft();
	}
	newInstructions[i + 1] = moveDown();

	return newInstructions;
}

function saveSpaceUp(boardValues, headPos, foodPos, cantSquaresX, cantSquaresY){
	let newInstructions = [];

	// if the head isnt in the right wall, dont do anything
	if(headPos[0] != cantSquaresX - 1){
		return newInstructions;
	}

	// if the food is down of the head
	if(headPos[1] < foodPos[1] && worthSavingUpGoDown(boardValues, headPos, cantSquaresY)){
		newInstructions = saveSpaceUpGoDown(boardValues, headPos, cantSquaresX);
	}
	// if the food is up from the head
	else if(headPos[1] > foodPos[1] && worthSavingUpGoUp(boardValues, headPos, cantSquaresY)){
		newInstructions = saveSpaceUpGoUp(boardValues, headPos, foodPos, cantSquaresX);
	}

	return newInstructions;
}

function saveSpaceDown(boardValues, headPos, foodPos, cantSquaresX, cantSquaresY){
	let newInstructions = [];

	if(headPos[0] == 0){
		if(headPos[1] >= foodPos[1]){
			if(headPos[1] % 2 == 1){
				if(boardValues[1][headPos[1]] == 0 && boardValues[cantSquaresX - 1][headPos[1]] == 0){
					if(worthSavingDown(boardValues, headPos, cantSquaresY)){
						newInstructions[0] = moveRight();
						newInstructions[1] = moveRight();
					}
				}
			}
		}
	}
	
	return newInstructions;
}

function botTurnLazyOptimized(currentInstructions, boardValues, maxCantPercentage){
	let headPos = [], foodPos = [];
	let cantSquaresX = boardValues.length, cantSquaresY = boardValues[0].length;
	let newInstructions = [];
	let cantBodies = 0;
	let optimize;

	for(let i = 0; i < cantSquaresX; i++){
		for(let j = 0; j < cantSquaresY; j++){
			if(boardValues[i][j] == HEAD_CODE){
				headPos[0] = i;
				headPos[1] = j;
			}
			if(boardValues[i][j] == FOOD_CODE){
				foodPos[0] = i;
				foodPos[1] = j;
			}
			if(boardValues[i][j] == BODY_CODE){
				cantBodies++;
			}
		}
	}

	if(cantBodies / (cantSquaresX * cantSquaresY) < maxCantPercentage){
		optimize = true;	
	}
	else{
		optimize = false;
	}

	newInstructions = checkTopRightCorner(headPos, cantSquaresX);

	if(areInstructionsClear(newInstructions, currentInstructions)){
		newInstructions = checkTopLeftCorner(headPos);
	}

	if(areInstructionsClear(newInstructions, currentInstructions) && optimize){
		newInstructions = saveSpaceUp(boardValues, headPos, foodPos, cantSquaresX, cantSquaresY);
	}

	if(areInstructionsClear(newInstructions, currentInstructions)){
		newInstructions = checkRightWall(headPos, cantSquaresX);
	}

	if(areInstructionsClear(newInstructions, currentInstructions)){
		newInstructions = checkAlmostLeftWall(headPos);
	}

	if(areInstructionsClear(newInstructions, currentInstructions)){
		newInstructions = checkBottomLeftCorner(headPos, cantSquaresY);
	}

	if(areInstructionsClear(newInstructions, currentInstructions) && optimize){
		newInstructions = saveSpaceDown(boardValues, headPos, foodPos, cantSquaresX, cantSquaresY);
	}

	return newInstructions;
}