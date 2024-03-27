public class DiscountRechargableSubwayCard extends RechargableSubwayCard{
	private double discountPercentage;

	DiscountRechargableSubwayCard(SubwayCentral sc, double dp){
		super(sc);
		this.discountPercentage = dp;
	}

	@Override
	public double rideCost(){
		return (this.subwayCentral.getRideCost() * this.discountPercentage);
	}
}