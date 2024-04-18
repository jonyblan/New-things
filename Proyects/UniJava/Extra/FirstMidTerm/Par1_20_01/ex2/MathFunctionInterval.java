public class MathFunction < E extends Comparable < ? super E > > implements Iterable <E>{

	private MathFunction<E> evaluateFunction;
	private E start, end;

	// constructor
	public MathFunction(E start, E end, MathFunction<E> evaluateFunction){
		this.start = start;
		this.end = end;
		this.evaluateFunction = evaluateFunction;

		// error
		if(start.compareTo(end) > 0){
			throw new illegalArgumentException("Start no es menor que end");
		}
	}

	// evaluate


	@Override
	public Iterator<E> iterator(){
		return new MathFunctionIterator();
	}

	private class MathFunctionIterator(){
		private E current = start;

		@Override
		public boolean hasNext(){
			if(current.compareTo(end) > 0){
				return false;
			}
			return true;
		}
		// next
		@Override
		public E next(){
			if(!hasNext()){
				throw new noSuchElementException();
			}
			E ret = current;
			evaluateFunction.evaluate(current);
			return ret;
		}
	}
}