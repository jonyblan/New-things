public enum Toppings implements Addable{
	CHEESE(20, "con Extra Queso"),
	TOMATO(30, "con Tomate"),
	ONION(10, "con Cebolla");

	private double price;
	private String name;

	Toppings(double price, String name){
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