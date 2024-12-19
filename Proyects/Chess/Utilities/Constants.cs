namespace Chess.Utilities
{
    public static class Constants
    {
        public const string ApplicationName = "My Chess App";
        public const int CantPlayers = 2;
        // Chess specific constants
        public const string INITIAL_FEN_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

		public const ulong WhiteCanCastleKing = 	0b1;
		public const ulong WhiteCanCastleQueen = 	WhiteCanCastleKing << 1;
		public const ulong BlackCanCastleKing = 	WhiteCanCastleQueen << 1;
		public const ulong BlackCanCastleQueen = 	BlackCanCastleKing << 1;

		public const ulong WhiteInCheck = 			BlackCanCastleQueen << 1;
		public const ulong BlackInCheck = 			WhiteInCheck << 1;
    }
}
/*
! Different FENs to check for different things:
* Initial, 20: rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
* All pawn moves (minus french), 15, 8/8/8/8/P7/1P4p1/PPPPPPPP/8 w KQkq - 0 1
* Castling, 15, r3k2r/p6p/8/8/8/8/P6P/R3K2R w Kq - 0 1
*/