public class Deletrear {
	public static void main(String args[]) {
		for(int wordNum = 0; wordNum < args.length; wordNum++){ // iterates through every word
			for(int letterNum = 0; letterNum < args[wordNum].length() - 1; letterNum ++){ // iterates through every letter
				System.out.print(args[wordNum].charAt(letterNum) + "-"); // prints each letter exept the last one, followed by a "-"
			}
			System.out.println(args[wordNum].charAt(args[wordNum].length() - 1));
		}
	}
}