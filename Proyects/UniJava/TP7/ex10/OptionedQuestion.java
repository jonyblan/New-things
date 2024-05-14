import java.util.*;

public interface OptionedQuestion{
	String getQuestion();

	public default boolean guess(Object o){
		return true;
	}
}