using Chess.Models;

namespace Chess.Utilities{
    public static class PieceExtensions{
        public static bool IsWhite(this Piece piece) {
            return (piece & Piece.White) == Piece.White;
        }

        public static bool IsBlack(this Piece piece) {
            return (piece & Piece.Black) == Piece.Black;
        }
        
		public static Piece PieceType(this Piece piece) {
            return piece & Piece.PieceMask; // Filters out color bits
        }

		public static Piece PieceColor(this Piece piece){
			return piece & Piece.ColorMask;
		}
        
		public static bool IsEmpty(this Piece piece){
            return piece == Piece.None;
        }
    }
}