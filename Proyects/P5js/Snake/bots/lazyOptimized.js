// the lazy optimized bot is the same as the lazy bot, but it cuts unnecesary travel time
// by cutting horizontally the screen to go to the next food.

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

function checkTopRightCorner(headPos, cantSquaresX){
	let newInstructions = [];
	
	if(headPos[0] == cantSquaresX - 1 && headPos[1] == 0){
		newInstructions[0] = moveLeft();
	}

	return newInstructions;
}

function checkTopLeftCorner(headPos){
	let newInstructions = [];

	if(headPos[0] == 0 && headPos[1] == 0){
		newInstructions[0] = moveDown();
	}

	return newInstructions;
}

function checkRightWall(headPos, cantSquaresX){
	let newInstructions = [];

	if(headPos[0] == cantSquaresX - 1){
		newInstructions[0] = moveUp();
		newInstructions[1] = moveLeft();
	}

	return newInstructions;
}

function checkAlmostLeftWall(headPos){
	let newInstructions = [];

	if(headPos[0] == 1 && headPos[1] != 0){
		newInstructions[0] = moveUp();
		newInstructions[1] = moveRight();
	}

	return newInstructions;
}

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

function saveSpaceUp(boardValues, headPos, foodPos, cantSquaresX){
	let newInstructions = [];
	
	if(headPos[0] == cantSquaresX - 1){
		if(headPos[1] < foodPos[1]){
			if(boardValues[0][headPos[1]] == 0){
				let i;
				newInstructions[0] = moveUp();
				for(i = 0; i < cantSquaresX - 1; i++){
					newInstructions[i + 1] = moveLeft();
				}
				newInstructions[i + 1] = moveDown();
			}
		}
		else if(headPos[1] > foodPos[1]){
			let sum = 0;
			for(let i = 0; i < headPos[1]; i++){
				sum += boardValues[cantSquaresX - 1][i];
			}
			if(sum){
				return;
			}
			console.log("Save up 2: ", boardValues);
			let pseudoFoodY, i, notCrash = true;
			if(foodPos[1] % 2 == 0){
				pseudoFoodY = foodPos[1] - 1;
			}
			else{
				pseudoFoodY = foodPos[1];
			}
			let dif = headPos[1] - pseudoFoodY;	
			for(i = 0; i < dif - 1 && notCrash; i++){
				newInstructions[i] = moveUp();
			}
			newInstructions[i] = moveLeft();
		}
	}

	return newInstructions;
}

function saveSpaceDown(boardValues, headPos, foodPos, cantSquaresX){
	let newInstructions = [];
	if(headPos[0] == 0){
		if(headPos[1] >= foodPos[1]){
			if(headPos[1] % 2 == 1){
				if(boardValues[1][headPos[1]] == 0 && boardValues[cantSquaresX - 1][headPos[1]] == 0){
					newInstructions[0] = moveRight();
					newInstructions[1] = moveRight();
				}
			}
		}
	}
	
	return newInstructions;
}

function botTurnLazyOptimized(currentInstructions, boardValues){
	let headPos = [], foodPos = [];
	let cantSquaresX = boardValues.length, cantSquaresY = boardValues[0].length;
	let newInstructions = [];

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
		}
	}
	newInstructions = checkTopRightCorner(headPos, cantSquaresX);

	if(areInstructionsClear(newInstructions, currentInstructions)){
		newInstructions = checkTopLeftCorner(headPos);
	}

	if(areInstructionsClear(newInstructions, currentInstructions)){
		newInstructions = saveSpaceUp(boardValues, headPos, foodPos, cantSquaresX);
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

	if(areInstructionsClear(newInstructions, currentInstructions)){
		newInstructions = saveSpaceDown(boardValues, headPos, foodPos, cantSquaresX);
	}

	return newInstructions;
}