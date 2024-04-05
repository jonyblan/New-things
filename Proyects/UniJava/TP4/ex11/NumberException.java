public class NumberException extends Exception{
	public static final String MESSAGE = "ERROR IN NUMBER TYPED: ";

	public NumberException(String description){
		super(String.format(MESSAGE + description));
	}
}