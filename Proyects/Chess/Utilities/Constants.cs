namespace Chess.Utilities
{
    public static class Constants
    {
        public const string ApplicationName = "My Chess App";
        public const int CantPlayers = 2;
        // Chess specific constants
        public const string INITIAL_FEN_POSITION = "rnbq3r/8/8/8/8/8/8/7R w KQkq - 0 1";
		
		public const int NOTHING = 0;
		public const int PAWN = 1;
		public const int KNIGHT = 2;
		public const int BISHOP = 4;
		public const int ROOK = 8;
		public const int QUEEN = 16;
		public const int KING = 32;
		public const int BLACK = 64;
		public const int WHITE = 128;

		public const int ANDPIECE = PAWN + KNIGHT + BISHOP + ROOK + QUEEN + KING;
		public const int ANDCOLOUR = WHITE + BLACK;

		public const int CASTLE_KING = 512;
		public const int CASTLE_QUEEN = 1024;

		public const int KNIGHT_PROMOTION = 2048;
		public const int BISHOP_PROMOTION = 4096;
		public const int ROOK_PROMOTION = 8192;
		public const int QUEEN_PROMOTION = 16384;

		public const int EN_PASSANT = 32768;
    }
}