using Chess.Models;
using Chess.Utilities;

namespace Chess.Utilities
{
    public class MoveGeneration
    {
		public bool whiteToMove;

		public long flags = 0;

		public List<Move> generateKnightMove(int row, int col, int startingRow, int startingCol, Piece[,] Board){
			List<Move> ret = new List<Move>();
			MoveFlags valid = Utils.validSquare(row, col,Board, whiteToMove);
			if(valid.IsValid()){
				ret.Add(new Move(new int[] {startingRow, startingCol}, new int[] {row, col}, Board[startingRow, startingCol], valid));
			}
			return ret;
		}
		
		// TODO please make this prettier
		public List<Move> generateKnightMoves(int row, int col, Piece[,] Board){
			List<Move> auxMoves = new List<Move>();
			
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

		public List<Move> generatePawnMoves(int row, int col, Piece[,] Board, List<Move> moveHistory){
			List<Move> auxMoves = new List<Move>();

			int multiplier = (Board[row, col].PieceColor() == Piece.White) ? 1 : -1;
			
			MoveFlags flags = Utils.validSquare(row, col + 1 * multiplier, Board, whiteToMove);

			// pawns cant capture in front of them
			if(flags.IsValid() && !flags.IsCapture()){
				// 1 square pawn move
				auxMoves.Add(new Move(new int[] {row, col}, new int[] {row, col + 1 * multiplier}, Board[row, col]));
				// 2 squares pawn move
				if(col == 1 || col == 6){
					flags = Utils.validSquare(row, col + 2 * multiplier, Board, whiteToMove);
					if(flags.IsValid() && !flags.IsCapture()){
						auxMoves.Add(new Move(new int[] {row, col}, new int[] {row, col + 2 * multiplier}, Board[row, col], flags));
					}
				}
			}

			// capture to the left
			flags = Utils.validSquare(row + 1, col + 1 * multiplier, Board, whiteToMove);
			if(flags.IsCapture()){
				auxMoves.Add(new Move(new int[] {row, col}, new int[] {row + 1, col + 1 * multiplier}, Board[row, col]));
			}

			// capture to the right
			flags = Utils.validSquare(row - 1, col + 1 * multiplier, Board, whiteToMove);
			if(flags.IsCapture()){
				auxMoves.Add(new Move(new int[] {row, col}, new int[] {row - 1, col + 1 * multiplier}, Board[row, col]));
			}

			// TODO en-peassant

			return auxMoves;
		}

		public List<Move> generateSlidingMoves(int row, int col, int[] direction, int startingRow, int startingCol, Piece[,] Board){
			List<Move> auxMoves = new List<Move>();
			row+=direction[0];
			col+=direction[1];
			MoveFlags flags = Utils.validSquare(row, col, Board, this.whiteToMove);

			if(!flags.IsValid()){ // invalid square
				return auxMoves;
			}

			if(flags.IsCapture()){ // square is occupied by a different colour piece
				auxMoves.Add(new Move(new int[] {startingRow, startingCol}, new int[] {row, col}, Board[startingRow, startingCol], flags));
				return auxMoves;
			}

			// square is empty
			auxMoves.Add(new Move(new int[] {startingRow, startingCol}, new int[] {row, col}, Board[startingRow, startingCol], flags));
			auxMoves.AddRange(generateSlidingMoves(row, col, direction, startingRow, startingCol, Board));
			return auxMoves;
		}

		public List<Move> generateKingMove(int row, int col, int startingRow, int startingCol, Piece[,] Board){
			List<Move> auxMoves = new List<Move>();
			MoveFlags flags = Utils.validSquare(row, col, Board, whiteToMove);

			if(flags.IsValid()){
				auxMoves.Add(new Move(new int[] {startingRow, startingCol}, new int[] {row, col}, Board[startingRow, startingCol], flags));
			}

			return auxMoves;
		}

		public List<Move> generateKingMoves(int row, int col, Piece[,] Board, List<Move> moveHistory, ulong boardFlags){
			List<Move> auxMoves = new List<Move>();

			for(int i = -1; i <= 1; i++){
				for(int j = -1; j <= 1; j++){
					if(i == 0 && j == 0){
						continue;
					}
					auxMoves.AddRange(generateKingMove(row + i, col + j, row, col, Board));
				}
			}

			// TODO this is just awful
			// Castling
			if(Board[row, col].IsWhite()){
				if((boardFlags & Constants.WhiteCanCastleKing) != 0){
					if	((Utils.validSquare(row, 5, Board, true).IsEmpty()) &&
						(Utils.validSquare(row, 6, Board, true).IsEmpty())){
							auxMoves.Add(new Move(new int[] {row, col}, new int[] {row, 6}, Board[row, col], MoveFlags.KingCastle));
						}
				}
				if(((boardFlags & Constants.WhiteCanCastleQueen) != 0)){
					if	((Utils.validSquare(row, 1, Board, true).IsEmpty()) &&
						(Utils.validSquare(row, 2, Board, true).IsEmpty()) &&
						(Utils.validSquare(row, 3, Board, true).IsEmpty())){
							auxMoves.Add(new Move(new int[] {row, col}, new int[] {row, 2}, Board[row, col], MoveFlags.QueenCastle));
						}
				}
			}
			else if(Board[row, col].IsBlack()){
				if((boardFlags & Constants.BlackCanCastleKing) != 0){
					if	((Utils.validSquare(row, 5, Board, true).IsEmpty()) &&
						(Utils.validSquare(row, 6, Board, true).IsEmpty())){
							auxMoves.Add(new Move(new int[] {row, col}, new int[] {row, 6}, Board[row, col], MoveFlags.KingCastle));
						}
				}
				if(((boardFlags & Constants.BlackCanCastleQueen) != 0)){
					if	((Utils.validSquare(row, 1, Board, true).IsEmpty()) &&
						(Utils.validSquare(row, 2, Board, true).IsEmpty()) &&
						(Utils.validSquare(row, 3, Board, true).IsEmpty())){
							auxMoves.Add(new Move(new int[] {row, col}, new int[] {row, 2}, Board[row, col], MoveFlags.QueenCastle));
						}
				}
			}
			else{
				throw new PieceException("Invalid piece");
			}
			return auxMoves;
		}

		public List<Move> generateMoveBySquare(int row, int col, Piece[,] Board, List<Move> moveHistory, ulong boardFlags){
			List<Move> auxMoves = new List<Move>();

			switch(Board[row, col].PieceType()){
				case Piece.Pawn:
					auxMoves = generatePawnMoves(row, col, Board, moveHistory);
				break;
				case Piece.Knight:
					auxMoves = generateKnightMoves(row, col, Board);
				break;
				case Piece.Bishop:
					auxMoves = generateSlidingMoves(row, col, new int[] {-1, -1}, row, col, Board);
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {-1, 1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, -1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, 1}, row, col, Board));
				break;
				case Piece.Rook:
					auxMoves = generateSlidingMoves(row, col, new int[] {-1, 0}, row, col, Board);
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, 0}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {0, -1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {0, 1}, row, col, Board));
				break;
				case Piece.Queen:
					auxMoves = generateSlidingMoves(row, col, new int[] {-1, 0}, row, col, Board);
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, 0}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {0, -1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {0, 1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {-1, -1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {-1, 1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, -1}, row, col, Board));
					auxMoves.AddRange(generateSlidingMoves(row, col, new int[] {1, 1}, row, col, Board));
				break;
				case Piece.King:
					auxMoves.AddRange(generateKingMoves(row, col, Board, moveHistory, boardFlags));
				break;

			}
			return auxMoves;
		}

		public List<Move> GenerateMoves(Piece[,] Board, bool white, List<Move> moveHistory, ulong boardFlags){
			List<Move> auxMoves = new List<Move>();

			this.whiteToMove = white;

			for(int i = 0; i < 8; i++){
				for(int j = 0; j < 8; j++){
					// No piece in that square
					if(Board[i,j] == Piece.None){
						continue;
					}

					// Black piece in that square when white to move
					if(whiteToMove && Board[i, j].IsBlack()){
						continue;
					}


					// White piece in that square when black to move
					if(!whiteToMove && Board[i, j].IsWhite()){
						continue;
					}

					auxMoves.AddRange(this.generateMoveBySquare(i, j, Board, moveHistory, boardFlags));
				}
			}
			return auxMoves;
		}
	}
}