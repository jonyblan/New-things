const NOTHING_CODE = 0, PLAYER_ONE_CODE = 1, PLAYER_TWO_CODE = 2, WIN_CODE = 3, DRAW_CODE = 4;
const AI_CODE = 7, PLAYER_CODE = 11;

class Board{
	constructor(cantSquaresX, cantSquaresY, players){
		this.cantSquaresX = cantSquaresX;
		this.cantSquaresY = cantSquaresY;

		this.playerTurn = PLAYER_ONE_CODE;

		this.positions = this.iniPositions(cantSquaresX, cantSquaresY);

		this.lastMove = [];

		this.players = players;
	}

	// initialices all the squares in the board to be nothing
	iniPositions(cantSquaresX, cantSquaresY) {
		let positions = [];
		for(let i = 0; i < cantSquaresX; i++){
			positions[i] = [];
			for(let j = 0; j < cantSquaresY; j++){
				positions[i][j] = NOTHING_CODE;
			}
		}

		return positions;
	}

	// changes to the next player
	nextPlayer(){
		if(this.playerTurn == PLAYER_ONE_CODE){
			this.playerTurn = PLAYER_TWO_CODE;
			return ;
		}
		this.playerTurn = PLAYER_ONE_CODE;
	}

	// returns true if the position is full
	invalidPosition(col, row){
		if(this.positions[col][row] != 0){
			return true;
		}
		return false;
	}

	// returns true if the column is full
	invalidColumn(col){	
		return this.invalidPosition(col, 0);
	}

	// generates a new move
	newMove(col, player){
		if(this.invalidColumn(col)){
			return 0;
		}
		
		for(let i = this.cantSquaresY - 1; i > 0; i--){
			if(this.invalidPosition(col, i)){
				continue;
			}

			this.positions[col][i] = player;
			this.lastMove[0] = col, this.lastMove[1] = i - 1;
			this.nextPlayer();
			return 1;
		}
		this.positions[col][0] = player;
		this.lastMove[0] = col, this.lastMove[1] = 0;
		this.nextPlayer();
		return 1;
	}

	otherPlayer(playerCode){
		if(playerCode == PLAYER_ONE_CODE){
			return PLAYER_TWO_CODE;
		}
		return PLAYER_ONE_CODE;
	}

	// returns true if its a player's turn
	isPlayerTurn(){
		return !this.isAiTurn();
	}

	// generates a new move where the mouse was pressed (if valid)
	mousePressed(){
		if(!this.isPlayerTurn()){
			return ;
		}
		let col = Math.floor(this.cantSquaresX * (mouseX / width));
		
		this.newMove(col, this.playerTurn);
	}

	showBoard(i, j, squareSize){
		fill(123);
		noStroke();
		rect(i * squareSize, j * squareSize, squareSize - 1, squareSize - 1);
	}

	showPieces(i, j, squareSize, colorPlayer1, colorPlayer2){
		if(this.positions[i][j] == NOTHING_CODE){
			fill(0);
		}
		else if(this.positions[i][j] == PLAYER_ONE_CODE){
			fill(colorPlayer1[0], colorPlayer1[1], colorPlayer1[2]);
		}
		else if(this.positions[i][j] == PLAYER_TWO_CODE){
			fill(colorPlayer2[0], colorPlayer2[1], colorPlayer2[2]);
		}
		else{
			fill(255, 0, 0);
		}
		ellipseMode(CORNER);
		ellipse(i * squareSize + squareSize * 0.1, j * squareSize + squareSize * 0.1, squareSize * 0.8, squareSize * 0.8);
	}

	show(squareSize, colorPlayer1, colorPlayer2){
		for(let i = 0; i < this.cantSquaresX; i++){
			for(let j = 0; j < this.cantSquaresY; j++){
				this.showBoard(i, j, squareSize);
				this.showPieces(i, j, squareSize, colorPlayer1, colorPlayer2);
			}
		}
	}

	checkRight(i, j, code){
		for(let m = i + 1; m < i + 4; m++){
			if(this.positions[m][j] != code){
				return 0;
			}
		}
		this.nextPlayer();
		return 1;
	}

	checkDiagonalDown(i, j, code){
		for(let m = i + 1; m < i + 4; m++){
			for(let n = j + 1; n < j + 4; n++){
				if(this.positions[m][n] != code){
					return 0;
				}
			}
		}
		this.nextPlayer();
		return 1;
	}

	checkDown(i, j, code){
		for(let m = j + 1; m < j + 4; m++){
			if(this.positions[i][m] != code){
				return 0;
			}
		}
		this.nextPlayer();
		return 1;
	}

	// checks if one square is the beggining of a win
	checkWinByCode(i, j){
		if(this.positions[i][j] == NOTHING_CODE){
			return 0;
		}

		if(i < this.cantSquaresX - 3){
			if(this.checkRight(i, j, this.positions[i][j])){
				return 1;
			}
		}

		if(j < this.cantSquaresY - 3){
			if(this.checkDown(i, j, this.positions[i][j])){
				return 1;
			}
		}

		if(i < this.cantSquaresX - 3 && j < this.cantSquaresY - 3){
			if(this.checkDiagonalDown(i, j, this.positions[i][j])){
				return 1;
			};
		}
	}

	checkWins(){
		for(let i = 0; i < this.cantSquaresX; i++){
			for(let j = 0; j < this.cantSquaresY; j++){
				if(this.checkWinByCode(i, j)){
					return 1;
				}
			}
		}
		return 0;
	}

	checkDraw(){
		for(let i = 0; i < this.cantSquaresX; i++){
			if(this.positions[i][0] == NOTHING_CODE){
				return 0;
			}
		}
		return 1;
	}

	// returns true if its ai to move
	isAiTurn(){
		if(this.playerTurn == PLAYER_ONE_CODE){
			if(this.players[0] == AI_CODE){
				return true;
			}
		}
		else if(this.players[1] == AI_CODE){
			return true;
		}
		return false;
	}

	// makes a move
	aiMove(){
		if(!this.isAiTurn()){
			return ;
		}
		let col = findBestMove(this, 4, this.playerTurn);
		this.newMove(col, this.playerTurn);
		return ;
	}

	update(doOrDont){
		if(doOrDont){
			this.aiMove();
		}
		else{
			console.log("not this");
		}
		if(this.checkWins()){
			return WIN_CODE;
		}
		if(this.checkDraw()){
			return DRAW_CODE;
		}
		return 0;
	}
}

function copyBoard(board) {
    const copiedBoard = new Board(board.cantSquaresX, board.cantSquaresY, board.players);
    copiedBoard.playerTurn = board.playerTurn;
    copiedBoard.lastMove = board.lastMove.slice(); // Assuming lastMove is an array
    copiedBoard.positions = [];

    for (let i = 0; i < board.positions.length; i++) {
        copiedBoard.positions[i] = board.positions[i].slice();
    }

    return copiedBoard;
}

function makeMove(board, col, playerCode){
	let newBoard = copyBoard(board);
	newBoard.newMove(col, playerCode);
	return newBoard;
}

function minimax(board, depth, maximizingPlayer, playerCode) {
	if (depth === 0 || board.checkWins() == 1) {
		if(board.checkWins() == 1){
			console.log("panic eval");
		}
		return evaluate(board, maximizingPlayer);
	}
	
	if (maximizingPlayer == playerCode) {
		let maxEval = -Infinity;
		for (let col = 0; col < board.cantSquaresX; col++) {
			if (!board.invalidColumn(col)) {
				const newBoard = makeMove(board, col, playerCode);
				const eval = minimax(newBoard, depth - 1, maximizingPlayer, board.otherPlayer(playerCode));
				maxEval = Math.max(maxEval, eval);
			}
		}
		return maxEval;
	} else {
		let minEval = Infinity;
		for (let col = 0; col < board.cantSquaresX; col++) {
			if (!board.invalidColumn(col)) {
				const newBoard = makeMove(board, col, playerCode);
				const eval = minimax(newBoard, depth - 1, maximizingPlayer, board.otherPlayer(playerCode));
				minEval = Math.min(minEval, eval);
			}
		}
		return minEval;
	}
}

function findBestMove(board, depth, maximizingPlayer) {
	let auxBoard = copyBoard(board);
	let bestMove = 0;
	let bestEval = -Infinity;
	for (let col = 0; col < auxBoard.cantSquaresX; col++) {
		if (!auxBoard.invalidColumn(col)) {
			const newBoard = makeMove(auxBoard, col, maximizingPlayer);
			const eval = minimax(newBoard, depth - 1, maximizingPlayer, board.otherPlayer());
			if (eval > bestEval) {
				bestEval = eval;
				bestMove = col;
			}
		}
	}
	console.log("best move: ", bestMove, " eval: ", bestEval);
	return bestMove;
}