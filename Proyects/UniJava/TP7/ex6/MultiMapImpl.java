import java.util.*;

public class MultiMapImpl<K, V extends Comparable<? super V>> implements MultiMap<K, V>{

	private Map<K, Set<V>> elems = new HashMap<>();

	/**
	* Agrega un par key,value al multimapa si el par no existe.
	*/
	@Override
	public void put(K key, V value){
		if(!elems.containsKey(key)) {
			elems.put(key, new TreeSet<>(Comparator.reverseOrder()));
		}
		elems.get(key).add(value);
	}
	/**
	* Cantidad de valores del multimapa.
	*/
	@Override
	public int size(){
		int ret = 0;
		for(K key : elems.keySet()){
			ret += elems.get(key).size();
		}
		return ret;
	}
	/**
	* Cantidad de valores del multimapa para la clave key.
	*/
	@Override
	public int size(K key){
		return elems.get(key).size();
	}
	/**
	* Elimina la clave del multimapa (con todos sus valores) si existe.
	*/
	@Override
	public void remove(K key){
		elems.remove(key);
	}
	/**
	* Elimina el valor value de la clave key si existe.
	*/
	@Override
	public void remove(K key, V value){
		if(elems.containsKey(key)) {
			elems.get(key).remove(value);
		}
	}
	/**
	* Colección ordenada descendentemente de valores de clave key.
	*/
	@Override
	public Iterable<V> get(K key){
		return elems.get(key);
	}
}