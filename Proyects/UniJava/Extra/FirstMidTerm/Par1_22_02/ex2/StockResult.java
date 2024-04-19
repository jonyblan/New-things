import java.util.function.Predicate;

public class StockResult extends StockProduct{
	private Predicate<Integer> condition;

	public StockResult(String product, int stock){
		super(product, stock);
	}

	public void setMinimumStock(Predicate<Integer> condition){
		this.condition = condition;
	}

	@Override
	public String toString(){
		String ret = super.toString();
		if(condition == null){
			if(getStock() <= 1){
				ret += " <> Low Stock!";
			}
			else{
				ret += " <> Stock OK";
			}
			return ret;
		}
		if(condition.test(getStock())){
			ret += " <> Low Stock! ";
		}
		else{
			ret += " <> Stock OK";
		}
		return ret;
	}
}