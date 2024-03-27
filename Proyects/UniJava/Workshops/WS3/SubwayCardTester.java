public class SubwayCardTester {
 
    public static void main(String[] args) {
        SubwayCentral sc = new SubwayCentral(25);
 
        FixedSubwayCard fsc = new FixedSubwayCard(sc, 2);
		System.out.println("Nothing");
        fsc.ride();
		System.out.println("Nothing");
        fsc.ride();
		System.out.println("Error");
        fsc.ride(); // Imprime un mensaje de error
 
        RechargableSubwayCard rsc = new RechargableSubwayCard(sc);
		System.out.println("Nothing");
        rsc.recharge(50);
		System.out.println("Nothing");
        rsc.ride();
		System.out.println("Nothing");
        sc.setRideCost(30);
		System.out.println("Error");
        rsc.ride(); // Imprime un mensaje de error
 
        DiscountRechargableSubwayCard drsc = new DiscountRechargableSubwayCard(sc, 0.50);
		System.out.println("Nothing");
        drsc.recharge(30);
		System.out.println("Nothing");
        drsc.ride();
		System.out.println("Nothing");
        drsc.ride();
		System.out.println("Error");
        drsc.ride(); // Imprime un mensaje de error
    }
 
}