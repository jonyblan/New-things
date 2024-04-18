public class Pizza{

	private PizzaTypes type;
	private Toppings[] toppings;

	public Pizza(PizzaTypes type, Toppings[] toppings){
		this.type = type;
		this.toppings = toppings;
	}

	public double evaluate(){
		double price = 0;
		price += type.evaluate();
		for(int i = 0; i < toppings.length; i++){
			price += toppings[i].evaluate();
		}
		return price;
	}

	@Override
	public String toString(){
		return String.format(evaluate());
	}
}