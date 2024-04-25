namespace Chess.Models{
    public class ChessGame{
        public string[,] BoardImages { get; set; }
		public int[,] Board;
		public string fen;

		// TODO create a new type called piece

		// TODO create a new type called move

		public const int WHITE = 16;
		public const int BLACK = 8;
		public const int NOTHING = 0;
		public const int PAWN = 1;
		public const int KNIGHT = 2;
		public const int BISHOP = 3;
		public const int ROOK = 4;
		public const int QUEEN = 5;
		public const int KING = 6;

        public ChessGame(){
            // Initialize the board and set up the game pieces
            BoardImages = new string[8, 8];
			Board = new int[8, 8];
			string initialFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
			iniBoard();

			

			setBoardByFen(initialFen);
			boardToBoardImages();
        }

		public void ClearPiece(int row, int col) {
			// Set the board position to NOTHING, indicating no piece
			Board[row, col] = NOTHING;
			// Update the corresponding image array
			BoardImages[row, col] = null;
		}

		public void iniBoard(){
			for(int i = 0; i < 8; i++){
				for(int j = 0; j < 8; j++){
					Board[i, j] = NOTHING;
				}
			}
		}

		public void setBoardByFen(string fen){
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

		public void boardToBoardImages(){
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
