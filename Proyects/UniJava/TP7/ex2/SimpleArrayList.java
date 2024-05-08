import java.util.*;
import java.util.function.Predicate;

public class SimpleArrayList<T extends Comparable<? super T> & Iterable<? super T>> implements SimpleList<T>{
	private ArrayList<T> list;
	private int size;

	public void add(T elem){
		list.add(elem);
	}

	public SimpleArrayList(){
		list = new ArrayList<T>();
		size = 0;
	}

	public int size(){
		return size;
	}

	public boolean contains(T elemSearched){
		for(T elem : list){
			if(elem.compareTo(elemSearched) == 0){
				return true;
			}
		}
		return false;
	}

	public <R> R reduce(R iniValue, Predicate<R> eval){
		R ret;
		ret += eval.test(0, iniValue);
		for(T elem : list){
			ret += eval.test(ret, elem);
		}
		return ret;
	}
}