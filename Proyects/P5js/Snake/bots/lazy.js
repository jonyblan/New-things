function checkTopRightCorner(headPos, cantSquaresX){
	let newInstructions = [];
	
	if(headPos[0] == cantSquaresX - 1 && headPos[1] == 0){
		newInstructions[0] = [-1, 0];
	}

	return newInstructions;
}

function checkTopLeftCorner(headPos){
	let newInstructions = [];

	if(headPos[0] == 0 && headPos[1] == 0){
		newInstructions[0] = [0, 1];
	}

	return newInstructions;
}

function checkRightWall(headPos, cantSquaresX){
	let newInstructions = [];

	if(headPos[0] == cantSquaresX - 1){
		newInstructions[0] = [0, -1];
		newInstructions[1] = [-1, 0];
	}

	return newInstructions;
}

function checkAlmostLeftWall(headPos){
	let newInstructions = [];

	if(headPos[0] == 1 && headPos[1] != 0){
		newInstructions[0] = [0, -1];
		newInstructions[1] = [1, 0];
	}

	return newInstructions;
}

function checkBottomLeftWall(headPos, cantSquaresY){
	let newInstructions = [];

	if(headPos[0] == 0 && headPos[1] == cantSquaresY - 1){
		newInstructions[0] = [1, 0];
		newInstructions[1] = [1, 0];
	}

	return newInstructions;
}

function botTurnLazy(currentInstructions, boardValues){
	let headPos = [];
	let cantSquaresX = boardValues.length, cantSquaresY = boardValues[0].length;
	let newInstructions = [];

	for(let i = 0; i < cantSquaresX; i++){
		for(let j = 0; j < cantSquaresY; j++){
			if(boardValues[i][j] == HEAD_CODE){
				headPos[0] = i;
				headPos[1] = j;
			}
		}
	}

	newInstructions = checkTopRightCorner(headPos, cantSquaresX);

	if(newInstructions.length == 0){
		newInstructions = checkTopLeftCorner(headPos);
	}
	if(newInstructions.length == 0 && (currentInstructions === undefined || currentInstructions.length == 0)){
		newInstructions = checkRightWall(headPos, cantSquaresX);
	}
	if(newInstructions.length == 0 && (currentInstructions === undefined || currentInstructions.length == 0)){
		newInstructions = checkAlmostLeftWall(headPos);
	}
	if(newInstructions.length == 0){
		newInstructions = checkBottomLeftWall(headPos, cantSquaresY);
	}

	return newInstructions;
}