import java.util.*;

public class LimitedExam extends UniqueExam{
	private int maxStudents;
	private int cantPendingStudents = 0;
	private String[] pendingStudents;
	private final int INITIAL_DIM = 5;

	public LimitedExam(String name, int maxStudents){
		super(name);
		this.maxStudents = maxStudents;
		pendingStudents = new String[INITIAL_DIM];
	}

	@Override
	public void enroll(String name){
		if(getEnrolledCount() < maxStudents){
			super.enroll(name);
		}
		else{
			if(cantPendingStudents == pendingStudents.length){
				this.resize();
			}
			pendingStudents[cantPendingStudents] = name;
			cantPendingStudents++;
		}
	}

	@Override
	public void unenroll(String name){
		super.unenroll(name);
		for(int i = 0; i < cantPendingStudents; i++) {
			if(pendingStudents[i].equals(name)) {
				System.arraycopy(pendingStudents, i + 1, pendingStudents, i, cantPendingStudents - 1 - i);
				cantPendingStudents--;
           	}
       	}
		if(cantPendingStudents > 0){
			this.enroll(pendingStudents[0]);
		}
		for(int i = 1; i < cantPendingStudents; i++){
			pendingStudents[i-1] = pendingStudents[i];
		}
		cantPendingStudents--;
	}

	private void resize(){
		pendingStudents = Arrays.copyOf(pendingStudents, cantPendingStudents + INITIAL_DIM);
	}

	public String[] getPendingStudents() {
       	return Arrays.copyOf(pendingStudents, cantPendingStudents);
   	}
}