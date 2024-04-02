public class Point implements Movable{
	private double x, y;

	public Point(double x, double y) {
		this.x = x;
		this.y = y;
	}

	public double getX() {
		return x;
	}

	public double getY() {
		return y;
	}

	public static double distanceX(Point p1, Point p2){
		return Math.abs(p1.x - p2.x);
	}

	public static double distanceY(Point p1, Point p2){
		return Math.abs(p1.y - p2.y);
	}

	public static double distance(Point p1, Point p2){ // inefficient, use distanceX or distanceY if possible
		return Math.sqrt(Math.pow(distanceX(p1, p2), 2) + Math.pow(distanceY(p1, p2), 2));
	}

	@Override
	public String toString(){
		String ret = "{" + this.x + "," + this.y + "}";
		return ret;
	}

	public void moveEast(double delta){
		this.x += delta;
	}

	public void moveWest(double delta){
		this.x -= delta;
	}

	public void moveNorth(double delta){
		this.y += delta;
	}

	public void moveSouth(double delta){
		this.y -= delta;
	}
}