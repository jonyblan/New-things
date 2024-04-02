public interface Movable {

	public void moveNorth(double delta);
	public void moveEast(double delta);

	public default void moveSouth(double delta){
		moveNorth(-delta);
	}
	public default void moveWest(double delta){
		moveEast(-delta);
	}

	public default void moveNorthEast(double deltaNorth, double deltaEast){
		moveNorth(deltaNorth);
		moveEast(deltaEast);
	}
	public default void moveNorthWest(double deltaNorth, double deltaWest){
		moveNorth(deltaNorth);
		moveWest(deltaWest);
	}
	public default void moveSouthEast(double deltaSouth, double deltaEast){
		moveSouth(deltaSouth);
		moveEast(deltaEast);
	}
	public default void moveSouthWest(double deltaSouth, double deltaWest){
		moveSouth(deltaSouth);
		moveWest(deltaWest);
	}
}