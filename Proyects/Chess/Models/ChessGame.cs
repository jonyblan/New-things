using Chess.Utilities;
using Chess.Models;

namespace Chess.Models{
    public class ChessGame{
        public string[,] BoardImages { get; set; }
		public long[,] Board;
		public List<Move> moves {get; set;}
		public long flags;
		public bool whiteToMove;

		// TODO create a new type called piece

		public const long WHITE = Constants.WHITE;
		public const long BLACK = Constants.BLACK;
		public const long NOTHING = Constants.NOTHING;
		public const long PAWN = Constants.PAWN;
		public const long KNIGHT = Constants.KNIGHT;
		public const long BISHOP = Constants.BISHOP;
		public const long ROOK = Constants.ROOK;
		public const long QUEEN = Constants.QUEEN;
		public const long KING = Constants.KING;

        public ChessGame(){
            // Initialize the board and set up the game pieces
			flags = 0;
            BoardImages = new string[8, 8];
			Board = new long[8, 8];
			string initialFen = Constants.INITIAL_FEN_POSITION;
			whiteToMove = true;

			IniBoard();

			SetBoardByFen(initialFen);
			Board[2, 3] = WHITE|KNIGHT;

			moves = GenerateMoves();

			BoardToBoardImages();
        }

		public void ClearPiece(int row, int col) {
			Board[row, col] = NOTHING;
		}

		public void IniBoard(){
			for(int i = 0; i < 8; i++){
				for(int j = 0; j < 8; j++){
					Board[i, j] = NOTHING;
				}
			}
		}

		public int validSquare(int row, int col){
			// if the square doesnt exist
			int ret = 0;
			if(	row < 0 ||
				row > 7 ||
				col < 0 ||
				col > 7){
				ret = 1;
			}
			// TODO make a function for this, too ugly, too little understanding
			// if the square is occupied by a same colour piece
			else if	((this.whiteToMove && ((this.Board[row, col] & WHITE) != 0)) || 
				(!this.whiteToMove && ((this.Board[row, col] & BLACK) != 0))){
				ret = 2;
			}
			// if the square is occupied by a different colour piece
			else if	((this.whiteToMove && ((this.Board[row, col] & BLACK) != 0)) || 
				(!this.whiteToMove && ((this.Board[row, col] & WHITE) != 0))){
				ret = 3;
			}
			return ret;
		}

		public List<Move> generateKnightMoves(int row, int col){
			List<Move> auxMoves = new List<Move>();
			return auxMoves;
		}

		public List<Move> generatePawnMoves(int row, int col){
			List<Move> auxMoves = new List<Move>();

			int multiplier = ((this.Board[row, col] & WHITE) != 0) ? 1 : -1;

			if(validSquare(row, col + 1 * multiplier) == 0){
				auxMoves.Add(new Move(new int[] {row, col}, new int[] {row + 1 * multiplier, col}, this.Board[row, col]));
				
				if(validSquare(row, col + 2 * multiplier) == 0){
					auxMoves.Add(new Move(new int[] {row, col}, new int[] {row + 2 * multiplier, col}, this.Board[row, col]));
				}
			}

			return auxMoves;
		}

		public List<Move> generateSlidingMoves(int row, int col, int[] direction, int startingRow, int startingCol, long flags){
			List<Move> auxMoves = new List<Move>();
			row+=direction[0];
			col+=direction[1];
			int ret = validSquare(row, col);
			if(ret == 0){ // valid square
				auxMoves.Add(new Move(new int[] {startingRow, startingCol}, new int[] {row, col}, flags));
				auxMoves.AddRange(generateSlidingMoves(row, col, direction, startingRow, startingCol, flags));
				return auxMoves;
			}
			if(ret == 1){ // out of bounds square
				return auxMoves;
			}
			if(ret == 2){ // square is occupied by a same colour piece
				return auxMoves;
			}
			if(ret == 3){ // square is occupied by a different colour piece
				auxMoves.Add(new Move(new int[] {startingRow, startingCol}, new int[] {row, col}, flags));
				return auxMoves;
			}
			return auxMoves;
		}

		public List<Move> generateMoveBySquare(int row, int col){
			List<Move> auxMoves = new List<Move>();

			long pieceType = this.Board[row, col] & Constants.ANDPIECE;
			long colour = this.Board[row, col] & Constants.ANDCOLOUR;

			switch(pieceType){
				case PAWN:
					auxMoves = generatePawnMoves(row, col);
				break;
				case KNIGHT:
					auxMoves = generateKnightMoves(row, col);
				break;
				case BISHOP:
					auxMoves = generateSlidingMoves(row, col, new int[] {-1, -1}, row, col, this.Board[row, col]);
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {-1, 1}, row, col, this.Board[row, col]));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, -1}, row, col, this.Board[row, col]));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, 1}, row, col, this.Board[row, col]));
				break;
				case ROOK:
					flags = row*10;
					flags += col;
					auxMoves = generateSlidingMoves(row, col, new int[] {-1, 0}, row, col, this.Board[row, col]);
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, 0}, row, col, this.Board[row, col]));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {0, -1}, row, col, this.Board[row, col]));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {0, 1}, row, col, this.Board[row, col]));
				break;
				case QUEEN:
					auxMoves = generateSlidingMoves(row, col, new int[] {-1, 0}, row, col, this.Board[row, col]);
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, 0}, row, col, this.Board[row, col]));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {0, -1}, row, col, this.Board[row, col]));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {0, 1}, row, col, this.Board[row, col]));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {-1, -1}, row, col, this.Board[row, col]));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {-1, 1}, row, col, this.Board[row, col]));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, -1}, row, col, this.Board[row, col]));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, 1}, row, col, this.Board[row, col]));
				break;
			}
			return auxMoves;
		}

		public List<Move> GenerateMoves(){
			List<Move> auxMoves = new List<Move>();

			for(int i = 0; i < 8; i++){
				for(int j = 0; j < 8; j++){
					// No piece in that square
					if(Board[i, j] == NOTHING){
						continue;
					}
					// Black piece in that square when white to move
					if(this.whiteToMove && ((this.Board[i, j] & BLACK) != 0)){
						continue;
					}
					// White piece in that square when black to move
					if(!this.whiteToMove && ((this.Board[i, j] & WHITE) != 0)){
						continue;
					}
					auxMoves.AddRange(generateMoveBySquare(i, j));
				}
			}
			return auxMoves;
		}

		public void SetBoardByFen(string fen){
			int i = 0, row = 0, col = 7;

			while(fen[i] != ' '){
				switch(fen[i]){
					case 'P':
						Board[row, col] = WHITE|PAWN;
					break;
					case 'N':
						Board[row, col] = WHITE|KNIGHT;
					break;
					case 'B':
						Board[row, col] = WHITE|BISHOP;
					break;
					case 'R':
						Board[row, col] = WHITE|ROOK;
					break;
					case 'Q':
						Board[row, col] = WHITE|QUEEN;
					break;
					case 'K':
						Board[row, col] = WHITE|KING;
					break;
					case 'p':
						Board[row, col] = BLACK|PAWN;
					break;
					case 'n':
						Board[row, col] = BLACK|KNIGHT;
					break;
					case 'b':
						Board[row, col] = BLACK|BISHOP;
					break;
					case 'r':
						Board[row, col] = BLACK|ROOK;
					break;
					case 'q':
						Board[row, col] = BLACK|QUEEN;
					break;
					case 'k':
						Board[row, col] = BLACK|KING;
					break;
					case '/':
						col--;
						row = -1;
					break;
					default:
						row += (int)fen[i] - '0' - 1;
					break;
				}
				row++;
				i++;
			}
		}

		public void BoardToBoardImages(){
			for(int i = 0; i < 8; i++){
				for(int j = 0; j < 8; j++){
					switch(Board[i, j]){
						case BLACK|PAWN:
							BoardImages[i, j] = "Black_Pawn.png";
						break;
						case BLACK|KNIGHT:
							BoardImages[i, j] = "Black_Knight.png";
						break;
						case BLACK|BISHOP:
							BoardImages[i, j] = "Black_Bishop.png";
						break;
						case BLACK|ROOK:
							BoardImages[i, j] = "Black_Rook.png";
						break;
						case BLACK|QUEEN:
							BoardImages[i, j] = "Black_Queen.png";
						break;
						case BLACK|KING:
							BoardImages[i, j] = "Black_King.png";
						break;
						case WHITE|PAWN:
							BoardImages[i, j] = "White_Pawn.png";
						break;
						case WHITE|KNIGHT:
							BoardImages[i, j] = "White_Knight.png";
						break;
						case WHITE|BISHOP:
							BoardImages[i, j] = "White_Bishop.png";
						break;
						case WHITE|ROOK:
							BoardImages[i, j] = "White_Rook.png";
						break;
						case WHITE|QUEEN:
							BoardImages[i, j] = "White_Queen.png";
						break;
						case WHITE|KING:
							BoardImages[i, j] = "White_King.png";
						break;
					}
				}
			}
		}
    }
}
