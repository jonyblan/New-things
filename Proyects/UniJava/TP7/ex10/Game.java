import java.util.*;

public class Game{

	private List<OptionedQuestion> questions = new ArrayList<>();

	public void addQuestion(OptionedQuestion newQuestion){
		questions.add(newQuestion);
	}

	public void guess(int questionNumber, Object o){
		if(o instanceof OptionedQuestion){
			System.out.println(o);
			if(questions.get(questionNumber - 1).guess(o)){
				System.out.println("Correct!");
			}
			else{
				System.out.println("Incorrect!");
			}
		}
		else if(o instanceof Question){
			System.out.println(o);
			if(questions.get(questionNumber - 1).guess(o)){
				System.out.println("Correct!");
			}
			else{
				System.out.println("Incorrect!");
			}
		}
		else{
			System.out.println("AAAAAAAA");
		}
	}

	public List<OptionedQuestion> getQuestions(){
		return questions;
	}
}