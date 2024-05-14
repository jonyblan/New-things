import java.util.*;

public class OptionQuestion implements OptionedQuestion{
	private String questionText;
	private Object answer;

	public OptionQuestion(String questionText, Object answer){
		this.questionText = questionText;
		this.answer = answer;
	}
	
	@Override
	public String getQuestion(){
		return questionText;
	}
	
	public boolean guess(Set<Object> guess){
		for (Object elem : guess) {
			if (answer.getClass().isInstance(guess)) {
				if (answer.equals(guess)) {
					return true;
				}
			}
		}
		return false;
	}
	
	public Object getRightAnswer(){
		return answer;
	}
}