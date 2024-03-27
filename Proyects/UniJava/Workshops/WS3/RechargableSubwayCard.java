public class RechargableSubwayCard extends SubwayCard{
	private double balance;

	public RechargableSubwayCard(SubwayCentral sc){
		super(sc);
	}

	public void recharge(double ammount){
		this.balance += ammount;
	}

	protected double rideCost(){
		return this.subwayCentral.getRideCost();
	}

	@Override
	protected boolean canRide(){
		return (this.balance >= this.rideCost());
	}

	@Override
	public void ride(){
		if(!canRide()){
			System.out.println("Error, cant ride");
		}
		this.balance -= this.rideCost();
	}
}