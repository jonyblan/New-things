import java.util.*;

public class SortedPairIterator<E extends Comparable<? super E>> implements Iterator<Pair<E>> {

	private E[] data;
	private int currentIndex;

	public SortedPairIterator(E[] data){
		this.data = data;
	}

	public boolean hasNext(){
		return (currentIndex + 1 < data.length);
	}

	public Pair<E> next(){
		if(!hasNext()){
			System.out.println("No such element exception");
			return null;
		}
		E elem1 = data[currentIndex];
		E elem2 = data[currentIndex + 1];
		currentIndex += 2;
		if(elem1.compareTo(elem2) > 0){
			return new Pair(elem2, elem1);
		}
		return new Pair(elem1, elem2);
	}
}