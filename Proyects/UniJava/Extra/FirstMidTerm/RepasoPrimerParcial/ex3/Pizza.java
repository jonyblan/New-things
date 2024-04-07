public class Pizza{
	private Toppings[] toppings;
	private PizzaTypes type;

	public Pizza(PizzaTypes type, Toppings[] toppings){
		this.toppings = toppings;
		this.type = type;
	}

	@Override
	public String toString(){
		String ret = "Pizza ";
		ret += type.getMsg();
		int price = 0;
		price += type.apply();
		for(int i = 0; i < toppings.length; i++){
			ret += " ";
			ret += toppings[i].getMsg();
			price += toppings[i].apply();
		}
		ret += ": $";
		ret += price;
		return ret;
	}
}