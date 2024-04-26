using Chess.Utilities;

namespace Chess.Models
{
	// TODO organize better all this code
    public class Move
    {
        // Represents the start square of the move in algebraic notation (e.g., "e2")
        public int[] startSquare { get; set; }

        // Represents the end square of the move in algebraic notation (e.g., "e4")
        public int[] endSquare { get; set; }

        // Flags to describe the nature of the move (e.g., capture, check, castle)
        public int flags { get; set; }

		public const int WHITE = Constants.WHITE;
		public const int BLACK = Constants.BLACK;
		public const int NOTHING = Constants.NOTHING;
		public const int PAWN = Constants.PAWN;
		public const int KNIGHT = Constants.KNIGHT;
		public const int BISHOP = Constants.BISHOP;
		public const int ROOK = Constants.ROOK;
		public const int QUEEN = Constants.QUEEN;
		public const int KING = Constants.KING;

		public const int CASTLE_KING = Constants.CASTLE_KING;
		public const int CASTLE_QUEEN = Constants.CASTLE_QUEEN;
		public const int KNIGHT_PROMOTION = Constants.KNIGHT_PROMOTION;
		public const int BISHOP_PROMOTION = Constants.BISHOP_PROMOTION;
		public const int ROOK_PROMOTION = Constants.ROOK_PROMOTION;
		public const int QUEEN_PROMOTION = Constants.QUEEN_PROMOTION;

		public Move(int[] startSquare, int[] endSquare, int flags){
			this.startSquare = startSquare;
			this.endSquare = endSquare;
			this.flags = flags;
		}

		public Move(){
			this.startSquare = new int[] {0, 0};
			this.endSquare = new int[] {0, 0};
			this.flags = 0;
		}

		/*

		public static int validSquare(ChessGame cg, int row, int col){
			// if the square doesnt exist
			if(	row < 0 ||
				row > 7 ||
				col < 0 ||
				col > 7){
				return 1;
			}
			// TODO make a function for this, too ugly, too little understanding
			// if the square is occupied by a same colour piece
			if	((cg.whiteToMove && ((cg.Board[row, col] & WHITE) != 0)) || 
				(!cg.whiteToMove && ((cg.Board[row, col] & BLACK) != 0))){
				return 2;
			}
			// if the square is occupied by a different colour piece
			if	((cg.whiteToMove && ((cg.Board[row, col] & BLACK) != 0)) || 
				(!cg.whiteToMove && ((cg.Board[row, col] & WHITE) != 0))){
				return 3;
			}
			return 0;
		}

		public static List<Move> generateKnightMoves(ChessGame cg, int row, int col){
			List<Move> moves = new List<Move>();
			return moves;
		}

		public static List<Move> generatePawnMoves(ChessGame cg, int row, int col){
			List<Move> moves = new List<Move>();

			int multiplier = ((cg.Board[row, col] & WHITE) != 0) ? -1 : 1;

			if(validSquare(cg, row + 1 * multiplier, col) == 0){
				moves.Add(new Move(new int[] {row, col}, new int[] {row + 1 * multiplier, col}, cg.Board[row, col]));
					if(validSquare(cg, row + 2 * multiplier, col) == 0){
					moves.Add(new Move(new int[] {row, col}, new int[] {row + 2 * multiplier, col}, cg.Board[row, col]));
				}
			}

			return moves;
		}

		public static List<Move> generateSlidingMoves(ChessGame cg, int row, int col, int[] direction, int startingRow, int startingCol, int flags){
			List<Move> moves = new List<Move>();
			row+=direction[0];
			col+=direction[1];
			int ret = validSquare(cg, row, col);
			if(ret == 0){ // valid square
				moves.Add(new Move(new int[] {startingRow, startingCol}, new int[] {row, col}, flags));
				moves.AddRange(generateSlidingMoves(cg, row, col, direction, startingRow, startingCol, flags));
				return moves;
			}
			if(ret == 1){ // out of bounds square
				return moves;
			}
			if(ret == 2){ // square is occupied by a same colour piece
				return moves;
			}
			if(ret == 3){ // square is occupied by a different colour piece
				moves.Add(new Move(new int[] {startingRow, startingCol}, new int[] {row, col}, flags));
				return moves;
			}
			return moves;
		}

		public static List<Move> generateMoveBySquare(ChessGame cg, int row, int col){
			List<Move> moves = new List<Move>();

			int pieceType = cg.Board[row, col] & 7;
			int colour = cg.Board[row, col] & 24;

			switch(pieceType){
				case PAWN:
					moves = generatePawnMoves(cg, row, col);
				break;
				case KNIGHT:
					moves = generateKnightMoves(cg, row, col);
				break;
				case BISHOP:
					moves = generateSlidingMoves(cg, row, col, new int[] {-1, -1}, row, col, cg.Board[row, col]);
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {-1, 1}, row, col, cg.Board[row, col]));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {1, -1}, row, col, cg.Board[row, col]));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {1, 1}, row, col, cg.Board[row, col]));
				break;
				case ROOK:
					moves = generateSlidingMoves(cg, row, col, new int[] {-1, 0}, row, col, cg.Board[row, col]);
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {1, 0}, row, col, cg.Board[row, col]));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {0, -1}, row, col, cg.Board[row, col]));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {0, 1}, row, col, cg.Board[row, col]));
				break;
				case QUEEN:
					moves = generateSlidingMoves(cg, row, col, new int[] {-1, 0}, row, col, cg.Board[row, col]);
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {1, 0}, row, col, cg.Board[row, col]));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {0, -1}, row, col, cg.Board[row, col]));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {0, 1}, row, col, cg.Board[row, col]));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {-1, -1}, row, col, cg.Board[row, col]));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {-1, 1}, row, col, cg.Board[row, col]));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {1, -1}, row, col, cg.Board[row, col]));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {1, 1}, row, col, cg.Board[row, col]));
				break;
			}
			return moves;
		}

		public static List<Move> GenerateMoves(ChessGame cg){
			List<Move> moves = new List<Move>();

			for(int i = 0; i < 8; i++){
				for(int j = 0; j < 8; j++){
					// No piece in that square
					if(cg.Board[i, j] == NOTHING){
						continue;
					}
					// Black piece in that square when white to move
					if(cg.whiteToMove && ((cg.Board[i, j] & BLACK) != 0)){
						continue;
					}
					// White piece in that square when black to move
					if(!cg.whiteToMove && ((cg.Board[i, j] & WHITE) != 0)){
						continue;
					}
					moves.AddRange(generateMoveBySquare(cg, i, j));
					moves.Add(new Move(new int[] {0, 0}, new int[] {0, 0}, 0));
				}
			}

			return moves;
		}

		*/
    }
}
