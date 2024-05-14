import java.util.*;

public class PremiumAccount{
	private int id;
	private double balance;
	private ShopDiscountsProvider shopDiscountsProvider;

	private List<String> movements;

	public PremiumAccount(int id, double balance, ShopDiscountsProvider shopDiscountsProvider){
		movements = new ArrayList<>();
		this.id = id;
		this.balance = balance;
		this.shopDiscountsProvider = shopDiscountsProvider;
	}

	public void deposit(double money){
		balance += money;
		movements.add("Deposit $" + money + "\n");
	}

	public void extract(double money, String shopName){
		double trueMoney = money - shopDiscountsProvider.getDiscount(shopName) * money;
		balance -= trueMoney;
		movements.add("Extraction $" + trueMoney + " for shop " + shopName + "\n");
	}

	public void showMovements(){
		String ret = "Movements for Account " + id + "\n";
		for(String mov : movements){
			ret += mov;
		}
		System.out.println(ret);
	}
}