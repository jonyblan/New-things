public class CompositeFunction implements Function{
	private final Function f1, f2;

	public CompositeFunction(Function f1, Function f2){
		this.f1 = f1;
		this.f2 = f2;
	}

	@Override
	public double evaluate(double num){
		double ans1, ans2;
		ans1 = f1.evaluate(num);
		ans2 = f2.evaluate(ans1);
		
		return ans2;
	}
}