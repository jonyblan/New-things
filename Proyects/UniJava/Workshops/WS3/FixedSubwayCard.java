public class FixedSubwayCard extends SubwayCard{
	private int rides;

	public FixedSubwayCard(SubwayCentral sc, int rides){
		super(sc);
		this.rides = rides;
	}

	@Override
	protected boolean canRide(){
		return (this.rides > 0);
	}

	@Override
	public void ride(){
		if(!canRide()){
			System.err.println("Error, cant ride");
		}
		this.rides--;
	}
}