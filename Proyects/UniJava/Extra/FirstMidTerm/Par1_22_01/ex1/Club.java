public enum Club{
	ONE(1000, 0, 0, 950),
	TWO(2000, 1000, 2, 1750),
	FIVE(5000, 2500, 5, 4400),
	TEN(10000, 10000, 6, 14400);

	private int milesPerMonth, extraMiles, extraMilesMonthLimit, price;

	Club(int milesPerMonth, int extraMiles, int extraMilesMonthLimit, int price){
		this.milesPerMonth = milesPerMonth;
		this.extraMiles = extraMiles;
		this.extraMilesMonthLimit = extraMilesMonthLimit;
		this.price = price;
	}

	public String cantMilesHowMuch(int month){
		int multiplier = 0;
		if(month <= extraMilesMonthLimit){
			multiplier = 1;
		}
		int pseudoMiles = (milesPerMonth + multiplier * extraMiles);
		return ("" + pseudoMiles + " miles for $" + price);
	}
}