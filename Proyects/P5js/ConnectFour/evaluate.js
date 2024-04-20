const values = [0, 10, 20, 70, 1000000000];

function cantPieces(board, maximizingPlayer, direction, row, col){
	let count = 0;
	while(board.positions[row][col] == maximizingPlayer){
		count++;
		if(row >= board.cantSquaresX || col >= board.cantSquaresY){
			return 0;
		}
		row += direction[0];
		col += direction[1];
		if(count == 4){
			return count;
		}
	}
	return count;
}

function evalPlayer(board, maximizingPlayer){
	let eval = 0;
	for(let i = 0; i < board.cantSquaresX; i++){
		for(let j = 0; j < board.cantSquaresY; j++){
			if(i < board.cantSquaresX - 3){
				eval += values[cantPieces(board, maximizingPlayer, [1, 0], i, j)];
			}
	
			if(j < board.cantSquaresY - 3){
				eval += values[cantPieces(board, maximizingPlayer, [0, 1], i, j)];
			}
	
			if(i < board.cantSquaresX - 3 && j < board.cantSquaresY - 3){
				eval += values[cantPieces(board, maximizingPlayer, [1, 1], i, j)];
			}
		}
	}
	return eval;
}

function evaluate(board, maximizingPlayer){
	if(board.checkDraw() == DRAW_CODE){
		return 0;
	}
	let eval = 0;
	eval -= evalPlayer(board, board.otherPlayer(maximizingPlayer));
	eval += evalPlayer(board, maximizingPlayer);
	return eval;
}