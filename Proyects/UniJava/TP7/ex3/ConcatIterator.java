import java.util.*;

public class ConcatIterator<T> implements Iterator<T>{
	private Iterator<T> it1, it2;
	
	public ConcatIterator(Iterator<T> it1, Iterator<T> it2){
		this.it1 = it1;
		this.it2 = it2;
	}

	public boolean hasNext(){
		return (it1.hasNext() || it2.hasNext());
	}

	public T next(){
		if(!this.hasNext()){
			throw new NoSuchElementException();
		}
		if(it1.hasNext()){
			return it1.next();
		}
		return it2.next();
	}
}