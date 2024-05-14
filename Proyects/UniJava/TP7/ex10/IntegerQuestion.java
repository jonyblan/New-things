import java.util.*;

public class IntegerQuestion implements Question<Integer>{
	private String questionText;
	private Integer answer;

	public IntegerQuestion(String questionText, Object answer){
		checkAnswerFormat(answer);
		this.questionText = questionText;
		this.answer = (Integer) answer;
	}
	
	@Override
	public String getQuestion(){
		return questionText;
	}
	
	public void checkAnswerFormat(Object guess){
		if(!(guess instanceof Integer)){
			throw new FormatAnswerException();
		}
	}
	
	@Override
	public boolean guess(Object guess){
		checkAnswerFormat(guess);
		Integer aux = (Integer) guess;
		return (answer == guess);
	}
	
	@Override
	public Integer getRightAnswer(){
		return answer;
	}
}