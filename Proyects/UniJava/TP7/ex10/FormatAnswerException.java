import java.util.*;

public class FormatAnswerException extends RuntimeException{
	private static final String MESSAGE = "The format is incorrect";

	public FormatAnswerException(){
		super(MESSAGE);
	}
}