import java.util.*;

public class BagImpl<T> implements Bag<T>{
	private Map<T, Integer> elems;

	public BagImpl(){
		this.elems = new HashMap<>();
	}

	@Override
	public void add(T elem){
		if(!elems.containsKey(elem)){
			elems.put(elem, 1);
		}
		else{
			elems.put(elem, elems.get(elem) + 1);
		}
	}

	@Override
	public int count(T elem){
		if(!elems.containsKey(elem)){
			return 0;
		}
		return elems.get(elem);
	}

	@Override
	public int size(){
		int count = 0;
		for(int elemCount : elems.values()){
			count += elemCount;
		}
		return count;
	}

	@Override
	public int sizeDistinct(){
		return elems.size();
	}

	@Override
	public boolean contains(T elem){
		return elems.containsKey(elem);
	}

	@Override
	public void remove(T elem){
		if(!elems.containsKey(elem)){
			throw new NoSuchElementException();
		}
		if(elems.get(elem) == 1){
			elems.remove(elem);
		}
		else{
			elems.put(elem, elems.get(elem) - 1);
		}
	}

}