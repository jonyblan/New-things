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

function heuristic(headPos, foodPos){

}

function makeAStarInstructions(boardValues, headPos, foodPos){
	let openSet = [];
	let closedSet = [];

	openSet.push(headPos);

	if(openSet.length > 0){
		
	}
}

function botTurnAStar(currentInstructions, boardValues){
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

	if(foodPos === undefined || foodPos.length == 0){
		newInstructions = makeAStarInstructions(boardValues, headPos, foodPos);
	}

	return newInstructions;
}