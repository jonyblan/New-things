using Chess.Utilities;

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

		public static bool emptySquare(int row, int col, long[,] Board){
			return (Board[row, col] == Constants.NOTHING);
		}

		public static bool sameColourSquare(int row, int col, long[,] Board, bool whiteToMove){
			return	((whiteToMove && ((Board[row, col] & Constants.ANDCOLOUR) == Constants.WHITE)) || 
					(!whiteToMove && ((Board[row, col] & Constants.ANDCOLOUR) == Constants.BLACK)));
		}

		public static bool differentColourSquare(int row, int col, long[,] Board, bool whiteToMove){
			return	((whiteToMove && ((Board[row, col] & Constants.ANDCOLOUR) == Constants.BLACK)) || 
					(!whiteToMove && ((Board[row, col] & Constants.ANDCOLOUR) == Constants.WHITE)));
		}

		public static int validSquare(int row, int col, long[,] Board, bool whiteToMove){
			if(!inBoundsSquare(row, col)){
				return 1;
			}
			if(sameColourSquare(row, col, Board, whiteToMove)){
				return 2;
			}
			if(differentColourSquare(row, col, Board, whiteToMove)){
				return 3;
			}
			return 0;
		}
	}
}