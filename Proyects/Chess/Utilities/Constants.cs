namespace Chess.Utilities
{
    public static class Constants
    {
        public const string ApplicationName = "My Chess App";
        public const int CantPlayers = 2;
        // Chess specific constants
        public const string INITIAL_FEN_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RKBQKBNR w KQkq - 0 1";
		
		public const int NOTHING = 0;
		public const int PAWN = 1;
		public const int KNIGHT = 2;
		public const int BISHOP = 3;
		public const int ROOK = 4;
		public const int QUEEN = 5;
		public const int KING = 6;
		public const int BLACK = 8;
		public const int WHITE = 16;
    }
}