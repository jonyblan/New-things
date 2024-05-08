import java.util.*;
import java.util.function.Predicate;

public interface SimpleList<T extends Comparable<? super T> & Iterable<? super T>>{
	int size();
	boolean contains(T elemSearched);
	<R> R reduce(R iniValue, Predicate<R> eval);
	void add(T elem);
}