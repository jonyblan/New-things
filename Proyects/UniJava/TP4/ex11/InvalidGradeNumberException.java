public class InvalidGradeNumberException extends NumberException{
	private final static String MESSAGE = "Invalid grade number sent";

	public InvalidGradeNumberException(){
		super(MESSAGE);
	}
}