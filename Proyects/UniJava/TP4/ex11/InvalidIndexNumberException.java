public class InvalidIndexNumberException extends NumberException{
	private final static String MESSAGE = "Invalid index number sent";

	public InvalidIndexNumberException(){
		super(MESSAGE);
	} 
}