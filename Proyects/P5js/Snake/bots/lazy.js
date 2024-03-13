// the logic of the lazy bot is simple. Just go around the screen in a defined path
// until you die. 
// It works, but it's slow. I'll do the calculations later
// when I have a bunch of bots set up

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

// return an array with [xHeadPos, yHeadPos]
function getHeadPos(boardValues, cantSquaresX, cantSquaresY){
	let headPos = [];

	for(let i = 0; i < cantSquaresX; i++){
		for(let j = 0; j < cantSquaresY; j++){
			if(boardValues[i][j] == HEAD_CODE){
				headPos[0] = i;
				headPos[1] = j;
			}
		}
	}

	return headPos;
}

function areInstructionsClear(newInstructions, currentInstructions){
	return(	
			(newInstructions === undefined ||
			newInstructions.length == 0) && 
			(currentInstructions === undefined || 
				currentInstructions.length == 0));
}

function botTurnLazy(currentInstructions, boardValues){
	let cantSquaresX = boardValues.length, cantSquaresY = boardValues[0].length;
	let headPos = getHeadPos(boardValues, cantSquaresX, cantSquaresY);
	let newInstructions = [];

	newInstructions = checkTopRightCorner(headPos, cantSquaresX);

	if(areInstructionsClear(newInstructions, currentInstructions)){
		newInstructions = checkTopLeftCorner(headPos);
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

	return newInstructions;
}