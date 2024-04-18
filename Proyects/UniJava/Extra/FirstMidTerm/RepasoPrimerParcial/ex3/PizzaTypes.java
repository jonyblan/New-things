public enum PizzaTypes implements Addable{
	OVEN(100.0, "al horno"),
	GRILL(150.0, "a la parrilla");

	private double price;
	private String name;

	PizzaTypes(double price, String name){
		this.price = price;
		this.name = name;
	}

	@Override
	public String getName(){
		return this.name;
	}

	@Override
	public double getValue(){
		return this.price;
	}
}