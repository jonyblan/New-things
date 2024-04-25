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

		public int validSquare(ChessGame cg, int row, int col){
			if(	row < 0 ||
				row > 7 ||
				col < 0 ||
				col > 7){
				return 1;
			}
			return 0;
			//if(cg.whiteToMove && (cg.Board[row, col] & WHITE))
		}

		public static List<Move> generateKnightMoves(ChessGame cg, int row, int col){
			List<Move> moves = new List<Move>();
			return moves;
		}

		public static List<Move> generatePawnMoves(ChessGame cg, int row, int col){
			List<Move> moves = new List<Move>();
			return moves;
		}

		public static List<Move> generateSlidingMoves(ChessGame cg, int row, int col, int[] direction){
			List<Move> moves = new List<Move>();
			return moves;
		}

		public static List<Move> generateMoveBySquare(ChessGame cg, int row, int col){
			List<Move> moves = new List<Move>();
			switch(cg.Board[row, col]){
				case PAWN:
					moves = generatePawnMoves(cg, row, col);
				break;
				case KNIGHT:
					moves = generateKnightMoves(cg, row, col);
				break;
				case BISHOP:
					moves = generateSlidingMoves(cg, row, col, new int[] {-1, -1});
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {-1, 1}));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {1, -1}));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {1, 1}));
				break;
				case ROOK:
					moves = generateSlidingMoves(cg, row, col, new int[] {-1, 0});
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {1, 0}));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {0, -1}));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {0, 1}));
				break;
				case QUEEN:
					moves = generateSlidingMoves(cg, row, col, new int[] {-1, 0});
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {1, 0}));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {0, -1}));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {0, 1}));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {-1, -1}));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {-1, 1}));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {1, -1}));
					moves.AddRange(generateSlidingMoves(cg, row, col, new int[] {1, 1}));
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
				}
			}

			return moves;
		}
    }
}
