using Chess.Models;
using Chess.Utilities;

namespace Chess.Models
{
    public class MoveGeneration
    {
		public bool whiteToMove;

		public const long WHITE = Constants.WHITE;
		public const long BLACK = Constants.BLACK;
		public const long NOTHING = Constants.NOTHING;
		public const long PAWN = Constants.PAWN;
		public const long KNIGHT = Constants.KNIGHT;
		public const long BISHOP = Constants.BISHOP;
		public const long ROOK = Constants.ROOK;
		public const long QUEEN = Constants.QUEEN;
		public const long KING = Constants.KING;

		public long flags = 0;

		public List<Move> generateKnightMove(int row, int col, int startingRow, int startingCol, long[,] Board){
			List<Move> ret = new List<Move>();
			int valid = Utils.validSquare(row, col, Board, whiteToMove);
			if((valid == 0) || (valid == 3)){
				ret.Add(new Move(new int[] {startingRow, startingCol}, new int[] {row, col}, Board[row, col]));
			}
			return ret;
		}

		public List<Move> generateKnightMoves(int row, int col, long[,] Board){
			List<Move> auxMoves = new List<Move>();
			
			// TODO please make this prettier
			auxMoves.AddRange(generateKnightMove(row - 2, col - 1, row, col, Board));
			auxMoves.AddRange(generateKnightMove(row - 1, col - 2, row, col, Board));
			auxMoves.AddRange(generateKnightMove(row - 2, col + 1, row, col, Board));
			auxMoves.AddRange(generateKnightMove(row - 1, col + 2, row, col, Board));
			auxMoves.AddRange(generateKnightMove(row + 2, col - 1, row, col, Board));
			auxMoves.AddRange(generateKnightMove(row + 1, col - 2, row, col, Board));
			auxMoves.AddRange(generateKnightMove(row + 2, col + 1, row, col, Board));
			auxMoves.AddRange(generateKnightMove(row + 1, col + 2, row, col, Board));

			return auxMoves;
		}

		public List<Move> generatePawnMoves(int row, int col, long[,] Board){
			List<Move> auxMoves = new List<Move>();

			int multiplier = ((Board[row, col] & WHITE) != 0) ? 1 : -1;

			if(Utils.validSquare(row, col + 1 * multiplier, Board, whiteToMove) == 0){
				auxMoves.Add(new Move(new int[] {row, col}, new int[] {row, col + 1 * multiplier}, Board[row, col]));
				
				if(Utils.validSquare(row, col + 2 * multiplier, Board, whiteToMove) == 0){
					auxMoves.Add(new Move(new int[] {row, col}, new int[] {row, col + 2 * multiplier}, Board[row, col]));
				}
			}

			if(Utils.validSquare(row - 1, col + 1 * multiplier, Board, whiteToMove) == 3){
				auxMoves.Add(new Move(new int[] {row, col}, new int[] {row + 1 * multiplier, col}, Board[row, col]));
			}

			if(Utils.validSquare(row + 1, col + 1 * multiplier, Board, whiteToMove) == 3){
				auxMoves.Add(new Move(new int[] {row, col}, new int[] {row + 1 * multiplier, col}, Board[row, col]));
			}
			

			return auxMoves;
		}

		public List<Move> generateSlidingMoves(int row, int col, int[] direction, int startingRow, int startingCol, long[,] Board){
			List<Move> auxMoves = new List<Move>();
			row+=direction[0];
			col+=direction[1];
			int ret = Utils.validSquare(row, col, Board, whiteToMove);
			if(ret == 0){ // valid square
				auxMoves.Add(new Move(new int[] {startingRow, startingCol}, new int[] {row, col}, Board[row, col]));
				auxMoves.AddRange(generateSlidingMoves(row, col, direction, startingRow, startingCol, Board));
				return auxMoves;
			}
			if(ret == 1){ // out of bounds square
				return auxMoves;
			}
			if(ret == 2){ // square is occupied by a same colour piece
				return auxMoves;
			}
			if(ret == 3){ // square is occupied by a different colour piece
				auxMoves.Add(new Move(new int[] {startingRow, startingCol}, new int[] {row, col}, Board[row, col]));
				return auxMoves;
			}
			return auxMoves;
		}

		public List<Move> generateKingMoves(int row, int col, long[,] Board){
			List<Move> auxMoves = new List<Move>();

			int ret = Utils.validSquare(row - 1, col - 1, Board, whiteToMove);

			if(ret == 0 || ret == 3){
				auxMoves.Add(new Move(new int[] {row, col}, new int[] {row - 1, col - 1}, Board[row, col]));
			}

			ret = Utils.validSquare(row - 1, col, Board, whiteToMove);

			if(ret == 0 || ret == 3){
				auxMoves.Add(new Move(new int[] {row, col}, new int[] {row - 1, col}, Board[row, col]));
			}

			ret = Utils.validSquare(row - 1, col + 1, Board, whiteToMove);

			if(ret == 0 || ret == 3){
				auxMoves.Add(new Move(new int[] {row, col}, new int[] {row - 1, col + 1}, Board[row, col]));
			}

			ret = Utils.validSquare(row, col - 1, Board, whiteToMove);

			if(ret == 0 || ret == 3){
				auxMoves.Add(new Move(new int[] {row, col}, new int[] {row, col - 1}, Board[row, col]));
			}

			ret = Utils.validSquare(row, col + 1, Board, whiteToMove);

			if(ret == 0 || ret == 3){
				auxMoves.Add(new Move(new int[] {row, col}, new int[] {row, col + 1}, Board[row, col]));
			}

			ret = Utils.validSquare(row + 1, col - 1, Board, whiteToMove);

			if(ret == 0 || ret == 3){
				auxMoves.Add(new Move(new int[] {row, col}, new int[] {row + 1, col - 1}, Board[row, col]));
			}

			ret = Utils.validSquare(row + 1, col, Board, whiteToMove);

			if(ret == 0 || ret == 3){
				auxMoves.Add(new Move(new int[] {row, col}, new int[] {row + 1, col}, Board[row, col]));
			}

			ret = Utils.validSquare(row + 1, col + 1, Board, whiteToMove);

			if(ret == 0 || ret == 3){
				auxMoves.Add(new Move(new int[] {row, col}, new int[] {row + 1, col + 1}, Board[row, col]));
			}

			return auxMoves;
		}

		public List<Move> generateMoveBySquare(int row, int col, long[,] Board){
			List<Move> auxMoves = new List<Move>();

			long pieceType = Board[row, col] & Constants.ANDPIECE;
			long colour = Board[row, col] & Constants.ANDCOLOUR;

			switch(pieceType){
				case PAWN:
					auxMoves = generatePawnMoves(row, col, Board);
				break;
				case KNIGHT:
					auxMoves = generateKnightMoves(row, col, Board);
				break;
				case BISHOP:
					auxMoves = generateSlidingMoves(row, col, new int[] {-1, -1}, row, col, Board);
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {-1, 1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, -1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, 1}, row, col, Board));
				break;
				case ROOK:
					auxMoves = generateSlidingMoves(row, col, new int[] {-1, 0}, row, col, Board);
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, 0}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {0, -1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {0, 1}, row, col, Board));
				break;
				case QUEEN:
					auxMoves = generateSlidingMoves(row, col, new int[] {-1, 0}, row, col, Board);
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, 0}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {0, -1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {0, 1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {-1, -1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {-1, 1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, -1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, 1}, row, col, Board));
				break;
				case KING:
					auxMoves.AddRange(generateKingMoves(row, col, Board));
				break;
			}
			return auxMoves;
		}

		public List<Move> GenerateMoves(long[,] Board, bool white){
			List<Move> auxMoves = new List<Move>();

			this.whiteToMove = white;

			for(int i = 0; i < 8; i++){
				for(int j = 0; j < 8; j++){
					// No piece in that square
					if(Board[i, j] == NOTHING){
						continue;
					}
					// Black piece in that square when white to move
					if(whiteToMove && ((Board[i, j] & BLACK) != 0)){
						continue;
					}
					// White piece in that square when black to move
					if(!whiteToMove && ((Board[i, j] & WHITE) != 0)){
						continue;
					}
					auxMoves.AddRange(this.generateMoveBySquare(i, j, Board));
				}
			}
			return auxMoves;
		}
	}
}