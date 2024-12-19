using Chess.Models;

namespace Chess.Utilities{
    public static class MoveFlagsExtention{
		public static bool IsCheck(this MoveFlags flags){
			return (flags & MoveFlags.Check) != 0;
		}

		public static bool IsCheckMate(this MoveFlags flags){
			return (flags & MoveFlags.CheckMate) != 0;
		}

		public static bool IsCapture(this MoveFlags flags){
			return (flags & MoveFlags.Capture) != 0;
		}

		public static bool IsPromotion(this MoveFlags flags){
			return (flags & MoveFlags.Promotion) != 0;
		}

		public static bool IsValid(this MoveFlags flags){
			return (flags & MoveFlags.ValidMove) != 0;
		}

		public static bool IsEmpty(this MoveFlags flags){
			return (flags & MoveFlags.EmptySquare) != 0;
		}

		public static bool IsCastle(this MoveFlags flags){
			return (IsKingCastle(flags) || IsQueenCastle(flags));
		}

		public static bool IsKingCastle(this MoveFlags flags){
			return (flags & MoveFlags.KingCastle) != 0;
		}

		public static bool IsQueenCastle(this MoveFlags flags){
			return (flags & MoveFlags.QueenCastle) != 0;
		}
	}
}