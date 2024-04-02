public class Triangle extends Shape implements Movable{
	private Point p1, p2, p3;
	public Triangle(Point p1, Point p2, Point p3){
		this.p1 = p1;
		this.p2 = p2;
		this.p3 = p3;
	}

	@Override
	public double perimeter(){
		return (Point.distance(this.p1, this.p2) + Point.distance(this.p2, this.p3) + Point.distance(this.p3, this.p1));
	}

	@Override
	public double area(){
		return (0.5 * Math.abs((this.p1.getX() * (this.p2.getY() - this.p3.getY())) + (this.p2.getX() * (this.p3.getY() - this.p1.getY())) + (this.p3.getX() * (this.p1.getY() - this.p2.getY()))));
	}

	@Override
	public String toString(){
		String ret = "[" + this.p1 + "," + this.p2 + "," + this.p3 + "]";
		return ret;
	}

	public void moveEast(double delta){
		this.p1.moveEast(delta);
		this.p2.moveEast(delta);
		this.p3.moveEast(delta);
	}

	public void moveNorth(double delta){
		this.p1.moveNorth(delta);
		this.p2.moveNorth(delta);
		this.p3.moveNorth(delta);
	}
}