using Chess.Utilities;

namespace Chess.Models
{
	// TODO organize better all this code
	// TODO use startSquare and endSquare better so that all the code isnt just a "new int[,] = {row, col}"
    public class Move{
        // Represents the start square of the move (e.g., "e2")
        public int[] startSquare { get; set; } = new int[2];

        // Represents the end square of the move (e.g., "e4")
        public int[] endSquare { get; set; } = new int[2];

        // Flags to describe the nature of the move (e.g., capture, check, castle)
        public MoveFlags flags { get; set; }

        // The piece making the move
        public Piece piece { get; set; }

        // Constructor with all parameters
        public Move(int[] startSquare, int[] endSquare, Piece piece, MoveFlags flags){
            this.startSquare = startSquare;
            this.endSquare = endSquare;
            this.flags = flags;
            this.piece = piece;
        }

        // Constructor without flags (defaults to 0)
        public Move(int[] startSquare, int[] endSquare, Piece piece) 
			: this(startSquare, endSquare, piece, 0) { 
        }

        // Default constructor
        public Move(){
            this.startSquare = new int[] { 0, 0 };
            this.endSquare = new int[] { 0, 0 };
            this.flags = 0;
        }

		public int startRow(){
			return startSquare[0];
		}

		public int startCol(){
			return startSquare[1];
		}

		public int endRow(){
			return endSquare[0];
		}

		public int endCol(){
			return endSquare[1];
		}

		public string pieceName(){
			return piece.PieceType().Name();
		}
    }
}
