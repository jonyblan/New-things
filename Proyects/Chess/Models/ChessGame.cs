using Chess.Utilities;
using Chess.Models;

namespace Chess.Models{
    public class ChessGame{
        public string[,] BoardImages { get; set; }
		public long[,] Board;
		public List<Move> moves {get; set;}
		public long flags;
		public bool whiteToMove;
		public MoveGeneration mg;

		public const long WHITE = Constants.WHITE;
		public const long BLACK = Constants.BLACK;
		public const long NOTHING = Constants.NOTHING;
		public const long PAWN = Constants.PAWN;
		public const long KNIGHT = Constants.KNIGHT;
		public const long BISHOP = Constants.BISHOP;
		public const long ROOK = Constants.ROOK;
		public const long QUEEN = Constants.QUEEN;
		public const long KING = Constants.KING;

		public List<Move> moveHistory;

        public ChessGame(){
            // Initialize the board and set up the game pieces
			flags = 0;
            BoardImages = new string[8, 8];
			Board = new long[8, 8];
			string initialFen = Constants.INITIAL_FEN_POSITION;
			whiteToMove = true;

			moveHistory = new List<Move>();

			mg = new MoveGeneration();

			IniBoard();

			SetBoardByFen(initialFen);

			moves = mg.GenerateMoves(this.Board, this.whiteToMove, this.moveHistory);

			flags = mg.flags;

			BoardToBoardImages();
        }

		public void ClearPiece(int row, int col) {
			Board[row, col] = NOTHING;
		}

		public void ChangePlayerToMove(){
			this.whiteToMove = !whiteToMove;
		}

		public void IniBoard(){
			for(int i = 0; i < 8; i++){
				for(int j = 0; j < 8; j++){
					Board[i, j] = NOTHING;
				}
			}
		}

		public void deleteMoves(){
			if(moves.Count == 0){
				return ;
			}
			for(int i = moves.Count - 1; i >= 0; i--){
				moves.RemoveAt(i);
			}
		}

		// TODO make this in just one if
		public void analizeEnPassant(Move move){
			if((move.flags & Constants.EN_PASSANT) != 0){
				if((move.flags & Constants.WHITE) != 0){
					ClearPiece(move.endSquare[0], move.endSquare[1] - 1);
				}
				else{
					ClearPiece(move.endSquare[0], move.endSquare[1] + 1);
				}
			}
		}

		public void makeMove(int num = 0){
			if(moves.Count <= num){
				return ;
			}
			Move aux = moves[num];
			moveHistory.Add(aux);
			ClearPiece(aux.startSquare[0], aux.startSquare[1]);

			analizeEnPassant(aux);

			// TODO
			//analizeCastleKing(aux);

			// TODO
			//analizeCastleQueen(aux);

			Board[aux.endSquare[0], aux.endSquare[1]] = aux.flags;
			deleteMoves();
			ChangePlayerToMove();
			moves = mg.GenerateMoves(this.Board, this.whiteToMove, this.moveHistory);

			flags = mg.flags;
			BoardToBoardImages();
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
					switch(Board[i, j] & (Constants.ANDPIECE|Constants.ANDCOLOUR)){
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
						case NOTHING:
							BoardImages[i, j] = null;
						break;
					}
				}
			}
		}
    }
}
