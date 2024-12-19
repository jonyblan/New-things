using Chess.Utilities;
using Chess.Models;

namespace Chess.Models{
    public class ChessGame{
        public string[,] BoardImages { get; set; }
		public Piece [,] Board;
		public List<Move> moves {get; set;}
		public ulong boardFlags;
		public int fullMoves;
		public bool whiteToMove;
		public MoveGeneration mg;

		public List<Move> moveHistory;

        public ChessGame(){
			Console.WriteLine("Hello, World!");
            // Initialize the board and set up the game pieces
			boardFlags = 0;
            BoardImages = new string[8, 8];
			Board = new Piece[8,8];
			string initialFen = Constants.INITIAL_FEN_POSITION;
			whiteToMove = true;

			moveHistory = new List<Move>();

			mg = new MoveGeneration();

			IniBoard();

			SetBoardByFen(initialFen);

			moves = mg.GenerateMoves(this.Board, this.whiteToMove, this.moveHistory, boardFlags);

			BoardToBoardImages();
        }

		public void ClearPiece(int row, int col) {
			Board[row, col] = Piece.None;
		}

		public void PutPiece(int row, int col, Piece piece){
			Board[row, col] = piece;
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

		public void makeThisMove(Move move){
			if(move.flags.IsCastle()){
				if(move.flags.IsKingCastle()){
					if(whiteToMove){
						ClearPiece(7, 7);
						PutPiece(5, 7, Piece.White | Piece.Rook);
					}
					else{
						ClearPiece(7, 0);
						PutPiece(5, 0, Piece.Black | Piece.Rook);
					}
				}
				else{
					if(whiteToMove){
						ClearPiece(0, 7);
						PutPiece(2, 7, Piece.White | Piece.Rook);
					}
					else{
						ClearPiece(0, 0);
						PutPiece(2, 0, Piece.Black | Piece.Rook);
					}
				}
			}
			ClearPiece(move.startRow(), move.startCol());

			PutPiece(move.endRow(), move.endCol(), move.piece);
		}

		public void makeMove(int num = 0){
			if(moves.Count <= num){
				return ;
			}

			Random rnd = new Random();
			num  = rnd.Next(0, moves.Count);
			
			Move aux = moves[num];
			moveHistory.Add(aux);

			makeThisMove(aux);

			deleteMoves();
			//ChangePlayerToMove();
			moves = mg.GenerateMoves(this.Board, this.whiteToMove, this.moveHistory, boardFlags);
			
			BoardToBoardImages();
		}

		public void SetBoardByFen(string fen){
			int i = 0, row = 0, col = 0;
			
			Console.WriteLine("Analizing fen");
			Console.WriteLine("Current letter: ");
			Console.WriteLine(fen[i]);
			Console.WriteLine("Pieces");
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
						row++;
						col = -1;
					break;
					default:
						col += (int)fen[i] - '0' - 1;
					break;
				}
				col++;
				i++;
			}
			Console.WriteLine("End pieces");
			Console.WriteLine("Starting who to move");
			i++;
			
			Console.WriteLine("Current letter: ");
			Console.WriteLine(fen[i]);
			if(fen[i] == 'w'){
			Console.WriteLine("white to move");
				whiteToMove = true;
			}
			else{
			Console.WriteLine("black to move");
				whiteToMove = false;
			}
			
			Console.WriteLine("finished who to move");
			i++;
			i++;
			Console.WriteLine("Current letter: ");
			Console.WriteLine(fen[i]);
			Console.WriteLine("Starting castle");
			while((fen[i] != '-') && (fen[i] != ' ')){
				Console.WriteLine("Letter inside");
				switch(fen[i]){
					case 'K':
					Console.WriteLine("fen can WKing");
						boardFlags |= Constants.WhiteCanCastleKing;
					break;
					case 'Q':
					Console.WriteLine("fen can WQueen");
						boardFlags |= Constants.WhiteCanCastleQueen;
					break;
					case 'k':
					Console.WriteLine("fen can BKing");
						boardFlags |= Constants.BlackCanCastleKing;
					break;
					case 'q':
					Console.WriteLine("fen can BQueen");
						boardFlags |= Constants.BlackCanCastleQueen;
					break;
					default:
						throw new ArgumentException("FEN is invalid");
				}
				i++;
			}
			Console.WriteLine("Finished castles");
			Console.WriteLine("Current letter: ");
			Console.WriteLine(fen[i]);
			Console.WriteLine("Finished fen");
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
