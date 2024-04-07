import java.util.Arrays;

public class UniqueExam extends Exam{
	public UniqueExam(String name){
		super(name);
	}

	@Override
	public void enroll(String name){
		if(!super.isEnrolled(name)){
			super.enroll(name);
		}
	}
}