import java.util.Iterator;
import java.util.function.Predicate;
import java.util.*;

public class StockInventory implements Iterable<StockResult>{
	private StockResult[] stock;
	private final int INITIAL_DIM = 5;
	private final int STEP = 1;
	private int currentIndex;

	public StockInventory(){
		this.stock = new StockResult[INITIAL_DIM];
		currentIndex = 0;
	}

	public Iterator iterator(){
		return new Iterator<>(){
			int indexIterator = 0;

			@Override
			public boolean hasNext(){
				return (indexIterator < currentIndex);
			}

			@Override
			public StockResult next(){
				if(!hasNext()){
					throw new NoSuchElementException("No more elements to iterate");
				}
				StockResult ret = stock[indexIterator];
				indexIterator++;
				return ret;
			}
		};
	}

	public void add(String name, int actualStock){
		if(currentIndex == stock.length){
			resize();
		}
		stock[currentIndex] = new StockResult(name, actualStock);
		currentIndex++;
	}

	public void reduceStock(String name){
		for(int i = 0; i < currentIndex; i++){
			if(stock[i].getProduct().compareTo(name) == 0){
				stock[i].reduceStock();
				return ;
			}
		}
		throw new IllegalArgumentException("No product found with name " + name);
	}

	public void setMinimumStock(Predicate<Integer> condition){
		for(int i = 0; i < currentIndex; i++){
			stock[i].setMinimumStock(condition);
		}
	}

	private void resize(){
		stock = Arrays.copyOf(stock, currentIndex + STEP);
	}
}