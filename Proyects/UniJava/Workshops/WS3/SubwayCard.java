public abstract class SubwayCard{
	protected SubwayCentral subwayCentral;

	public SubwayCard(SubwayCentral sc){
		this.subwayCentral = sc;
	}

	protected abstract boolean canRide();

	public abstract void ride();
}