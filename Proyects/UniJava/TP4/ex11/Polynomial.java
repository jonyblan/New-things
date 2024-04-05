public class Polynomial{
	private double[] bases;
	private final int MAX_GRADE;

	public Polynomial(int grade) throws InvalidGradeNumberException{
		if(!isPositive(grade)){
			throw new InvalidGradeNumberException();
		}
		bases = new double[grade + 1];
		MAX_GRADE = grade;
	}

	public double eval(double num){
		double total = 0;
		for(int i = 0; i <= MAX_GRADE; i++){
			total += bases[i] * Math.pow(num, i);
		}
		return total;
	}

	public void set(int exponent, double base) throws InvalidIndexNumberException{
		if(!validExponent(exponent)){
			throw new InvalidIndexNumberException();
		}
		bases[exponent] = base;
	}

	public boolean isPositive(double num){
		return (num >= 0);
	}

	private boolean validExponent(int num){
		return (isPositive((double)num) && num <= MAX_GRADE);
	}
}