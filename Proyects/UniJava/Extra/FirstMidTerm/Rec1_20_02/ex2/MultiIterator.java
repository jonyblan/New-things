import java.util.*;

public class MultiIterator<E> implements Iterator<E>{
	private static final int INITIAL_DIM = 2;
	private static final int STEP = 2;
	private Iterator<E>[] iterators = (Iterator<E>[]) new Iterator[INITIAL_DIM];
	private int size, currentIndex = 0;

	public MultiIterator(){
		size = 0;
	}

	public int size(){
		return size;
	}

	public void add(Iterator<E> elem){
		if(currentIndex != 0){
			throw new MultiIteratorException("Cant add after started");
		}
		if(size == iterators.length){
			resize();
		}
		iterators[size] = elem;
		size++;
	}

	public boolean hasNext(){
		return(iterators[currentIndex].hasNext());
	}

	public E next(){
		if(!iterators[currentIndex].hasNext()){
			throw new NoSuchElementException("No more elements");
		}
		E ret = iterators[currentIndex];
		currentIndex++;
		return ret;
	}

	public void resize(){
		iterators = Arrays.copyOf(iterators, iterators.length + STEP);
	}
}