public class DictionaryEntry<E extends Comparable<? super E>> implements Iterable<Dictionary<E>>{
	private E key;
	private String description;

	public DictionaryEntry(E key, String description){
		this.key = key;
		this.description = description;
	}
}