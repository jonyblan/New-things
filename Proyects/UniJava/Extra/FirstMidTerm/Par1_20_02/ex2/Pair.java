public class Pair<E>{
	private E left, right;

	public Pair(E left, E right){
		this.left = left;
		this.right = right;
	}

	public E getLeft(){
		return left;
	}

	public E getRight(){
		return right;
	}

	@Override
	public String toString(){
		String ret = String.format("{%s,%s}", left, right);
		return ret;
	}
}