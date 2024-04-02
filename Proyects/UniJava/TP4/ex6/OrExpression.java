public class OrExpression extends BinaryExpression{
	public OrExpression(Expression lExp, Expression rExp){
		super(lExp, rExp);
	}

	public boolean evaluate(){
		return lExp.evaluate() || rExp.evaluate();
	}
}