public class Point implements Movable{
	private double x, y, z;

	public Point(double x, double y, double z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	public double getX() {
		return this.x;
	}

	public double getY() {
		return this.y;
	}

	public double getZ(){
		return this.z;
	}

	public static double distanceX(Point p1, Point p2){
		return Math.abs(p1.x - p2.x);
	}

	public static double distanceY(Point p1, Point p2){
		return Math.abs(p1.y - p2.y);
	}

	public static double distanceZ(Point p1, Point p2){
		return Math.abs(p1.z - p2.z);
	}

	public static double distance(Point p1, Point p2){
		return Math.sqrt(Math.pow(distanceX(p1, p2), 2) + Math.pow(distanceY(p1, p2), 2) + Math.pow(distanceZ(p1, p2), 2));
	}

	@Override
	public String toString(){
		String ret = "{" + this.x + "," + this.y + "," + this.z + "}";
		return ret;
	}

	public void moveEast(double delta){
		this.x += delta;
	}

	public void moveNorth(double delta){
		this.y += delta;
	}
}