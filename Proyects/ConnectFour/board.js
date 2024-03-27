const NOTHING_CODE = 0, PLAYER_ONE_CODE = 1, PLAYER_TWO_CODE = 2;

class Board{
	constructor(cantSquaresX, cantSquaresY){
		this.cantSquaresX = cantSquaresX;
		this.cantSquaresY = cantSquaresY;

		this.playerTurn = PLAYER_ONE_CODE;

		this.positions = this.iniPositions(cantSquaresX, cantSquaresY);

		this.lastMove = [];
	}

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

	nextPlayer(){
		if(this.playerTurn == PLAYER_ONE_CODE){
			this.playerTurn = PLAYER_TWO_CODE;
			return ;
		}
		this.playerTurn = PLAYER_ONE_CODE;
	}

	newMove(col, player){		
		if(this.positions[col][0] != 0){
			return ;
		}

		for(let i = 1; i < this.cantSquaresY; i++){
			if(this.positions[col][i] == 0){
				continue;
			}
			this.positions[col][i - 1] = player;
			this.lastMove[0] = col, this.lastMove[1] = i - 1;
			this.nextPlayer();
			return ;
		}
		this.positions[col][this.cantSquaresY - 1] = player;
		this.lastMove[0] = col, this.lastMove[1] = this.cantSquaresY - 1;
		this.nextPlayer();
	}

	mousePressed(){
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

	checkWins(){

		for(let i = 0; i < this.cantSquaresX; i++){
			for(let j = 0; j < this.cantSquaresY; j++){
				if(this.positions[i][j] == NOTHING_CODE){
					continue;
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
		}

		return 0;
	}

	update(){
		return this.checkWins();
	}
}