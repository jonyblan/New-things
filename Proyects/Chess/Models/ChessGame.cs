using Chess.Utilities;
using Chess.Models;

namespace Chess.Models{
    public class ChessGame{
        public string[,] BoardImages { get; set; }
		public int[,] Board;
		public List<Move> moves {get; set;}
		public bool whiteToMove;

		// TODO create a new type called piece

		public const int WHITE = Constants.WHITE;
		public const int BLACK = Constants.BLACK;
		public const int NOTHING = Constants.NOTHING;
		public const int PAWN = Constants.PAWN;
		public const int KNIGHT = Constants.KNIGHT;
		public const int BISHOP = Constants.BISHOP;
		public const int ROOK = Constants.ROOK;
		public const int QUEEN = Constants.QUEEN;
		public const int KING = Constants.KING;

        public ChessGame(){
            // Initialize the board and set up the game pieces
            BoardImages = new string[8, 8];
			Board = new int[8, 8];
			string initialFen = Constants.INITIAL_FEN_POSITION;
			whiteToMove = true;

			IniBoard();

			moves = new List<Move>();

			moves = Move.GenerateMoves(this);

			SetBoardByFen(initialFen);
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

		public void SetBoardByFen(string fen){
			int i = 0, row = 0, col = 0;

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
						col++;
						row = -1;
					break;
					default:
						row += (int)fen[i];
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
