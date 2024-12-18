namespace Chess.Utilities
{
    public static class Constants
    {
        public const string ApplicationName = "My Chess App";
        public const int CantPlayers = 2;
        // Chess specific constants
        public const string INITIAL_FEN_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
		
		public const int NOTHING = 0;
		public const int PAWN = 1;
		public const int KNIGHT = 2;
		public const int BISHOP = 3;
		public const int ROOK = 4;
		public const int QUEEN = 5;
		public const int KING = 6;
		public const int BLACK = 8;
		public const int WHITE = 16;

		public const int ANDPIECE = 7;
		public const int ANDCOLOUR = 24;

		public const int CASTLE_KING = 512;
		public const int CASTLE_QUEEN = 1024;

		public const int KNIGHT_PROMOTION = 2048;
		public const int BISHOP_PROMOTION = 4096;
		public const int ROOK_PROMOTION = 8192;
		public const int QUEEN_PROMOTION = 16384;

		public const int EN_PASSANT = 32768;
    }
}