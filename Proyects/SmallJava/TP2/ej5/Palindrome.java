public class Palindrome {
	public static void main(String args[]) {
		String word = "";
		for(int i = 0; i<args.length; i++){
			for(int j = 0; j<args[i].length(); j++){
				word+=args[i].charAt(j);
			}
		}
		System.out.println(word);
		if(isPalindrome(word)){
			System.out.println("PALINDROME");
		}
		else{
			System.out.println("NOT PALINDROME");
		}
	}

	public static boolean isPalindrome(String word){
		int half = word.length()/2;
		int len = word.length();
		for(int i = 0; i<half; i++){
			if(word.charAt(i) != word.charAt(len-i-1)){
				return false;
			}
		}
		return true;
	}
}
