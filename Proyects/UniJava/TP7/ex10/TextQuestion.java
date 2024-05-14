import java.util.*;

public class TextQuestion implements Question<String>{
	private String questionText;
	private String answer;

	public TextQuestion(String questionText, Object answer){
		checkAnswerFormat(answer);
		this.questionText = questionText;
		this.answer = (String) answer;
	}
	
	@Override
	public String getQuestion(){
		return questionText;
	}
	
	public void checkAnswerFormat(Object guess){
		if(!(guess instanceof String)){
			throw new FormatAnswerException();
		}
	}
	
	@Override
	public boolean guess(Object guess){
		checkAnswerFormat(guess);
		String aux = (String) guess;
		return (answer == guess);
	}
	
	@Override
	public String getRightAnswer(){
		return answer;
	}
}