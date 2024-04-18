import java.util.*;

public class ParallelIterator<E>{

	private E[] v1;
	private E[] v2;
	private int currentIndex;

	public ParallelIterator(E[] v1, E[] v2){
		if(v1 == null){
			throw new IllegalArgumentException("First collection missing");
		}
		if(v2 == null){
			throw new IllegalArgumentException("Second collenction missing");
		}
		this.v1 = v1;
		this.v2 = v2;
		currentIndex = 0;
	}

	public boolean hasNext(){
		return((currentIndex < v1.length) && (currentIndex < v2.length));
	}

	public String next(){
		if(!hasNext()){
			throw new NoSuchElementException();
		}
		currentIndex++;
		return ("{" + v1[currentIndex - 1] + "," + v2[currentIndex - 1] + "}");
	}
}