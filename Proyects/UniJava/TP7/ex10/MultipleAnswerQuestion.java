import java.util.*;

public class MultipleAnswerQuestion implements OptionedQuestion{
	private String questionText;
	private Set<Object> answer;

	public MultipleAnswerQuestion(String questionText, Set<Object> answer){
		this.questionText = questionText;
		this.answer = answer;
	}
	
	public String getQuestion(){
		return questionText;
	}
	
	public Set<Object> getRightAnswer(){
		return answer;
	}

	public boolean guess(Set<Object> guess){
		boolean found = false;
		for (Object elemAnswer : answer) {
			for(Object elemGuess : guess){
				if (elemAnswer.getClass().isInstance(elemGuess)) {
					if (elemAnswer.equals(elemGuess)) {
						found = true;
					}
				}
			}
			if(!found){
				return false;
			}
			found = false;
		}
		return true;
	}
}