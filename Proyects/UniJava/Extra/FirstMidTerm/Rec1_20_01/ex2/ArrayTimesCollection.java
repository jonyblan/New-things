public class ArrayTimesCollection < E > implements TimesCollection < E > Iterable <E>{
	/*
	TODO:

	hasNext
	next
	*/

	private static final int INITIAL_DIM = 5;
	private static final int STEP = 2;
	@SuppressWarnings("unchecked")
	private E[] array = (E[]) new Object[INITIAL_DIM];
	private int dim;
	private int times = 1;
	private int index;

	public ArrayTimesCollection(){
		dim = INITIAL_DIM;
	}

	public void setTimes(int times){
		this.times = times;
	}

	public void add(E elem){
		if(index >= dim){
			risize();
		}
		array[index] = elem;
		index++;
	}

	private void risize(){
		array = Arrays.copyOf(array, dim + STEP);
		dim += STEP;
	}

	public Iterator<E> iterator(){
		return new Iterator<E>(){


			public boolean hasNext(){

			}

			public E next(){
				if(!hasNext()){
					return new noSuchElementException();
				}
				
			}
		}
	}
}