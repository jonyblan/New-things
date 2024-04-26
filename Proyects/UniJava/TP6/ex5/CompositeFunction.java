import java.util.*;

public class CompositeFunction implements Function{
	private List<Function> functions;

	public CompositeFunction(){
		this.functions = new ArrayList<Function>();
	}

	@Override
	public double evaluate(double num){
		if(functions.size() == 0){
			throw new IllegalStateException();
		}
		double current = num;
		for(Function function : functions){
			current = function.evaluate(current);
		}
		return current;
	}

	public void addFunction(Function function){
		functions.add(function);
	}
}