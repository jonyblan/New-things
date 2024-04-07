import java.util.Arrays;

public class LimitedExam extends UniqueExam{
	private int maxStudents;
	private String[] pending;
	private int cantPendingStudents;
	private static final int STARTING_DIM = 10;

	public LimitedExam(String name, int maxStudents){
		super(name);
		this.maxStudents = maxStudents;
		this.pending = new String[STARTING_DIM];
	}

	@Override
	public void enroll(String name){	
		if(this.getEnrolledCount() < maxStudents){
			super.enroll(name);
		}
		else{
			if(cantPendingStudents == pending.length){
				resize();
			}
			pending[cantPendingStudents] = name;
			cantPendingStudents++;
		}
	}

	@Override
	public void unenroll(String name){
		if(isEnrolled(name)){
			super.unenroll(name);
			if(cantPendingStudents != 0){
				super.enroll(pending[0]);
				System.arraycopy(pending, 1, pending, 0, cantPendingStudents - 1);
				cantPendingStudents--;
			}
		}
		else{
			for(int i = 0; i < cantPendingStudents; i++){
				if(pending[i] == name){
					System.arraycopy(pending, i + 1, pending, i, cantPendingStudents - 1 - i);
					cantPendingStudents--;
				}
			}
		}
	}

	public String[] getPendingStudents(){
		return Arrays.copyOf(pending, cantPendingStudents);
	}

	private void resize(){
		pending = Arrays.copyOf(pending, pending.length + STARTING_DIM);
	}
}