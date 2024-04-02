public abstract class BinaryExpression extends Expression{
	protected Expression lExp, rExp;

	public BinaryExpression(Expression lExp, Expression rExp){
		this.lExp = lExp;
		this.rExp = rExp;
	}

	public abstract boolean evaluate();
}