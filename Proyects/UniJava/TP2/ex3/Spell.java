// Done
public class Spell {
    public static void main(String args[]) {
        // Iterate through each command-line argument (word)
        for(int wordNum = 0; wordNum < args.length; wordNum++) {
            // Iterate through each letter of the current word (up to the second-to-last letter)
            for(int letterNum = 0; letterNum < args[wordNum].length() - 1; letterNum++) {
                // Print the current letter followed by a hyphen
                System.out.print(args[wordNum].charAt(letterNum) + "-");
            }

            // Print the last letter of the current word without a hyphen, followed by a new line
            System.out.println(args[wordNum].charAt(args[wordNum].length() - 1));
        }
    }
}
