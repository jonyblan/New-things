import java.util.*;

public interface Question<E> extends OptionedQuestion{
	public void checkAnswerFormat(Object guess);

	public boolean guess(Object guess);

	public E getRightAnswer();
}