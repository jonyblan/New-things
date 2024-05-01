using Chess.Utilities;

namespace Chess.Models
{
    public static class Utils
    {
		public static int validSquare(int row, int col, long[,] Board, bool whiteToMove){
			// if the square doesnt exist
			int ret = 0;
			if(	row < 0 ||
				row > 7 ||
				col < 0 ||
				col > 7){
				ret = 1;
			}
			// TODO make a function for this, too ugly, too little understanding
			// if the square is occupied by a same colour piece
			else if	((whiteToMove && ((Board[row, col] & Constants.ANDCOLOUR) == Constants.WHITE)) || 
				(!whiteToMove && ((Board[row, col] & Constants.ANDCOLOUR) == Constants.BLACK))){
				ret = 2;
			}
			// if the square is occupied by a different colour piece
			else if	((whiteToMove && ((Board[row, col] & Constants.ANDCOLOUR) == Constants.WHITE)) || 
				(!whiteToMove && ((Board[row, col] & Constants.ANDCOLOUR) != Constants.BLACK))){
				ret = 3;
			}
			return ret;
		}
	}
}