public class Pair<A extends Comparable<? super A>, B extends Comparable<? super B>> implements Comparable<Pair<A, B>>{
	private A leftExp;
	private B rightExp;

	public Pair(A leftExp, B rightExp){
		this.leftExp = leftExp;
		this.rightExp = rightExp;
	}

	@Override
	public int compareTo(Pair<A, B> pair){
		if(this.leftExp.compareTo(pair.leftExp) != 0){
			return (this.leftExp.compareTo(pair.leftExp)) * -1;
		}
		return (this.rightExp.compareTo(pair.rightExp)) * -1;
	}

	@Override
	public String toString(){
		String ret = "{";
		ret += this.leftExp;
		ret += ",";
		ret += this.rightExp;
		ret += "}";
		return ret;
	}
}
