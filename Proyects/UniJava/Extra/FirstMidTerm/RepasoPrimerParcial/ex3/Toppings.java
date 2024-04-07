public enum Toppings implements Apply{
	ExtraCheese("con Extra queso", 20),
	Tomato("con Tomate", 30),
	Onion("con Cebolla", 10);

	private String msg;
	private int price;

	Toppings(String msg, int price){
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