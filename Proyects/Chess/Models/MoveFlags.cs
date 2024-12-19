using Chess.Models;

namespace Chess.Models{
	[Flags]
	public enum MoveFlags{
		NoFlag =			0,
		//* dont change this 4
		KnightPromotion = 	0b1,
		BishopPromotion = 	KnightPromotion << 1,
		RookPromotion = 	BishopPromotion << 1,
		QueenPromotion = 	RookPromotion << 1,

		Promotion = 		0b1111,

		KingCastle = 		QueenPromotion << 1,
		QueenCastle = 		KingCastle << 1,

		EnPassant = 		QueenPromotion << 1,

		Check = 			EnPassant << 1,
		CheckMate = 		Check << 1,

		Capture = 			CheckMate << 1,

		ValidMove =			Capture << 1,

		EmptySquare = 		ValidMove << 1
	}
}