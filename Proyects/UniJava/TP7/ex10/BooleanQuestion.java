import java.util.*;

public class BooleanQuestion implements Question<Boolean>{
	Boolean answer;
	String questionText;

	public BooleanQuestion(String questionText, Object answer){
		checkAnswerFormat(answer);
		this.questionText = questionText;
		this.answer = (Boolean) answer;
	}

	@Override
	public String getQuestion(){
		return questionText;
	}

	public void checkAnswerFormat(Object guess){
		if(!(guess instanceof Boolean)){
			throw new FormatAnswerException();
		}
	}

	@Override
	public boolean guess(Object guess){
		checkAnswerFormat(guess);
		Boolean aux = (Boolean) guess;
		return (answer == guess);
	}

	@Override
	public Boolean getRightAnswer(){
		return answer;
	}
}