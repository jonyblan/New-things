using Chess.Utilities;
using Chess.Models;

namespace Chess.Utilities
{
    public static class Utils
    {
		public static bool inBoundsSquare(int row, int col){
			return(	row >= 0 && 
					row <= 7 &&
					col >= 0 &&
					col <= 7);
		}

		public static bool emptySquare(int row, int col,Piece[,] Board){
			return (Board[row, col] == Piece.None);
		}

		public static bool sameColourSquare(int row, int col, Piece[,] Board, bool whiteToMove){
			return ((whiteToMove && Board[row, col].IsWhite()) || !whiteToMove && Board[row, col].IsBlack());
		}

		public static bool differentColourSquare(int row, int col, Piece[,] Board, bool whiteToMove){
			return	((whiteToMove && Board[row, col].IsBlack()) || !whiteToMove && Board[row, col].IsWhite());
		}

		public static MoveFlags validSquare(int row, int col, Piece[,] Board, bool whiteToMove){
			if(!inBoundsSquare(row, col)){
				return MoveFlags.NoFlag;
			}
			if(sameColourSquare(row, col, Board, whiteToMove)){
				return MoveFlags.NoFlag;
			}
			if(differentColourSquare(row, col, Board, whiteToMove)){
				return (MoveFlags.ValidMove | MoveFlags.Capture);
			}
			return MoveFlags.ValidMove | MoveFlags.EmptySquare;
		}
	}
}