public class ArrayAccessStack<E> extends ArrayStack<E> implements AccessStack<E>{
	private int cantPopAccesses;

	public ArrayAccessStack(){
		super();
	}

	@Override
	public int getPopAccesses(){
		return cantPopAccesses;
	}

	@Override
	public E pop(){
		E ret = super.pop();
		cantPopAccesses++;
		return ret;
	}

	@Override
	public int getPushAccesses(){
		return cantPopAccesses + this.size;
	}
}