using Chess.Utilities;
using Chess.Models;

namespace Chess.Models{
    public class ChessGame{
        public string[,] BoardImages { get; set; }
		public Piece [,] Board;
		public List<Move> moves {get; set;}
		public long flags;
		public bool whiteToMove;
		public MoveGeneration mg;

		public List<Move> moveHistory;

        public ChessGame(){
			Console.WriteLine("Hello, World!");
            // Initialize the board and set up the game pieces
			flags = 0;
            BoardImages = new string[8, 8];
			Board = new Piece[8,8];
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
			Board[row, col] = Piece.None;
		}

		public void ChangePlayerToMove(){
			this.whiteToMove = !whiteToMove;
		}

		public void IniBoard(){
			for(int i = 0; i < 8; i++){
				for(int j = 0; j < 8; j++){
					Board[i,j] = Piece.None;
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

		public void makeMove(int num = 0){
			if(moves.Count <= num){
				return ;
			}
			Move aux = moves[num];
			moveHistory.Add(aux);
			ClearPiece(aux.startSquare[0], aux.startSquare[1]);
			
			// TODO
			//analizeEnPassant(aux);

			// TODO
			//analizeCastleKing(aux);

			// TODO
			//analizeCastleQueen(aux);

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
						Board[row, col] = Piece.White|Piece.Pawn;
					break;
					case 'N':
						Board[row, col] = Piece.White|Piece.Knight;
					break;
					case 'B':
						Board[row, col] = Piece.White|Piece.Bishop;
					break;
					case 'R':
						Board[row, col] = Piece.White|Piece.Rook;
					break;
					case 'Q':
						Board[row, col] = Piece.White|Piece.Queen;
					break;
					case 'K':
						Board[row, col] = Piece.White|Piece.King;
					break;
					case 'p':
						Board[row, col] = Piece.Black|Piece.Pawn;
					break;
					case 'n':
						Board[row, col] = Piece.Black|Piece.Knight;
					break;
					case 'b':
						Board[row, col] = Piece.Black|Piece.Bishop;
					break;
					case 'r':
						Board[row, col] = Piece.Black|Piece.Rook;
					break;
					case 'q':
						Board[row, col] = Piece.Black|Piece.Queen;
					break;
					case 'k':
						Board[row, col] = Piece.Black|Piece.King;
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
						case Piece.Black|Piece.Pawn:
							BoardImages[i, j] = "Black_Pawn.png";
						break;
						case Piece.Black|Piece.Knight:
							BoardImages[i, j] = "Black_Knight.png";
						break;
						case Piece.Black|Piece.Bishop:
							BoardImages[i, j] = "Black_Bishop.png";
						break;
						case Piece.Black|Piece.Rook:
							BoardImages[i, j] = "Black_Rook.png";
						break;
						case Piece.Black|Piece.Queen:
							BoardImages[i, j] = "Black_Queen.png";
						break;
						case Piece.Black|Piece.King:
							BoardImages[i, j] = "Black_King.png";
						break;
						case Piece.White|Piece.Pawn:
							BoardImages[i, j] = "White_Pawn.png";
						break;
						case Piece.White|Piece.Knight:
							BoardImages[i, j] = "White_Knight.png";
						break;
						case Piece.White|Piece.Bishop:
							BoardImages[i, j] = "White_Bishop.png";
						break;
						case Piece.White|Piece.Rook:
							BoardImages[i, j] = "White_Rook.png";
						break;
						case Piece.White|Piece.Queen:
							BoardImages[i, j] = "White_Queen.png";
						break;
						case Piece.White|Piece.King:
							BoardImages[i, j] = "White_King.png";
						break;
						case Piece.None:
							BoardImages[i, j] = null;
						break;
					}
				}
			}
		}
    }
}
