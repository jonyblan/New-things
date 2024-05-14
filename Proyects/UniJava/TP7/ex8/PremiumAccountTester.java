import java.util.*;

public class PremiumAccountTester {
	public static void main(String[] args) {
		ShopDiscountsProvider shopDiscountsProvider = new ShopDiscountsProvider();

		shopDiscountsProvider.addShop("Falabella", 0.1D);
		shopDiscountsProvider.addShop("Nike", 0.15D);
		shopDiscountsProvider.addShop("Garbarino", 0.3D);

		PremiumAccount premiumAccount = new PremiumAccount(9999, 5000, shopDiscountsProvider);

		premiumAccount.deposit(1000);
		premiumAccount.extract(150, "Nike");
		premiumAccount.extract(250, "Lacoste");
		premiumAccount.extract(50, "Starbucks");
		premiumAccount.extract(150, "Nike");

		premiumAccount.showMovements();

		/*
		Movements for Account 9999
		Deposit $1000.0
		Extraction $127.5 for shop Nike
		Extraction $250.0 for shop Lacoste
		Extraction $50.0 for shop Starbucks
		Extraction $127.5 for shop Nike
		*/
	}
}