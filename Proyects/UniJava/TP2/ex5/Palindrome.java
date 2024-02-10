// Done
public class Palindrome {
    public static void main(String args[]) {
        // Initialize an empty string to store concatenated command-line arguments
        String word = "";

        // Loop through the command-line arguments
        for(int i = 0; i < args.length; i++) {
            // Loop through each character in the current argument and concatenate to 'word'
            for(int j = 0; j < args[i].length(); j++) {
                word += args[i].charAt(j);
            }
        }

        // Print the concatenated string
        System.out.println(word);

        // Check if the concatenated string is a palindrome and print the result
        if(isPalindrome(word)) {
            System.out.println("PALINDROME");
        } else {
            System.out.println("NOT PALINDROME");
        }
    }

    // Function to check if a given string is a palindrome
    public static boolean isPalindrome(String word) {
        // Calculate half length of the string
        int half = word.length() / 2;
        // Get the total length of the string
        int len = word.length();

        // Loop through the first half of the string
        for(int i = 0; i < half; i++) {
            // Check if the character at position 'i' is equal to its mirror position from the end
            if(word.charAt(i) != word.charAt(len - i - 1)) {
                // If not equal, return false indicating it's not a palindrome
                return false;
            }
        }

        // If the loop completes without returning false, the string is a palindrome
        return true;
    }
}