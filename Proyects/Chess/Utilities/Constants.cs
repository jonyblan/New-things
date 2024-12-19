namespace Chess.Utilities
{
    public static class Constants
    {
        public const string ApplicationName = "My Chess App";
        public const int CantPlayers = 2;
        // Chess specific constants
        public const string INITIAL_FEN_POSITION = "4k2r/6r1/8/8/8/8/3R4/R3K3 w Qk - 0 1";

		public const ulong WhiteCanCastleKing = 	0b1;
		public const ulong WhiteCanCastleQueen = 	WhiteCanCastleKing << 1;
		public const ulong BlackCanCastleKing = 	WhiteCanCastleQueen << 1;
		public const ulong BlackCanCastleQueen = 	BlackCanCastleKing << 1;

		public const ulong WhiteInCheck = 			BlackCanCastleQueen << 1;
		public const ulong BlackInCheck = 			WhiteInCheck << 1;
    }
}