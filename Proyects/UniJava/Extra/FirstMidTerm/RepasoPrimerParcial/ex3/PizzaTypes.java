public enum PizzaTypes implements Apply{
	Grill("a la parrilla", 150),
	Oven("al horno", 100);

	private String msg;
	private int price;

	PizzaTypes(String msg, int price){
		this.msg = msg;
		this.price = price;
	}

	@Override
	public int apply(){
		return this.price;
	}

	public String getMsg(){
		return this.msg;
	}
}