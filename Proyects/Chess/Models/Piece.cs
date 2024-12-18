using Chess.Utilities;
using Chess.Models;

namespace Chess.Models{
	[Flags]
	public enum Piece
	{
		None		= 0b00000,  // No piece

		// Piece types (first 3 bits)
		Pawn		= 0b00001,
		Knight		= 0b00010,
		Bishop		= 0b00011,
		Rook		= 0b00100,
		Queen		= 0b00101,
		King		= 0b00110,

		// Colors (last 2 bits)
		White		= 0b01000,
		Black		= 0b10000,

		PieceMask	= 0b00111,
		ColorMask	= 0b11000
	}
	
}