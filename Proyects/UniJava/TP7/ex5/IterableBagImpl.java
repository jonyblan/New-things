public class IterableBagImpl<E extends Comparable<? super E>> extends BagImpl<E> implements IterableBag<E>{
	public IterableBagImpl(){
		elems = new HashMap<>();
	}

	@Override
	public Iterable<E> elements(){
		List<E> elems = new ArrayList<>();
		for(E elem : this.elems.keySet()){
			
		}
	}

	@Override
	public Iterable<E> elementsDistinct(){

	}
}