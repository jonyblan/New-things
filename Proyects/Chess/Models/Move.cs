using Chess.Utilities;

namespace Chess.Models
{
	// TODO organize better all this code
    public class Move{
        // Represents the start square of the move in algebraic notation (e.g., "e2")
        public int[] startSquare { get; set; }

        // Represents the end square of the move in algebraic notation (e.g., "e4")
        public int[] endSquare { get; set; }

        // Flags to describe the nature of the move (e.g., capture, check, castle)
        public MoveFlags flags { get; set; }

		public Piece piece {get; set;}

		public Move(int[] startSquare, int[] endSquare, MoveFlags flags, Piece piece){
			this.startSquare = startSquare;
			this.endSquare = endSquare;
			this.flags = flags;
			this.piece = piece;
		}

		public Move(int[] startSquare, int[] endSquare, Piece piece){
			this.startSquare = startSquare;
			this.endSquare = endSquare;
			this.piece = piece;
		}

		public Move(){
			this.startSquare = new int[] {0, 0};
			this.endSquare = new int[] {0, 0};
			this.flags = 0;
		}

		public bool IsCheck(){
			return flags == MoveFlags.Check;
		}

		public bool IsCheckMate(){
			return flags == MoveFlags.CheckMate;
		}

		public bool IsCapture(){
			return flags == MoveFlags.Capture;
		}

		public bool IsPromotion(){
			return (flags & MoveFlags.Promotion) != 0;
		}
    }
}
