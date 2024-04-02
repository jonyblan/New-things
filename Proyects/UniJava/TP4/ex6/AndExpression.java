public class AndExpression extends BinaryExpression{
	public AndExpression(Expression lExp, Expression rExp){
		super(lExp, rExp);
	}

	public boolean evaluate(){
		return lExp.evaluate() && rExp.evaluate();
	}
}