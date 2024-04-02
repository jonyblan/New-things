public class Rectangle extends Shape implements Movable{
	private Point p1, p2;
	public Rectangle(Point p1, Point p2){
		this.p1 = p1;
		this.p2 = p2;
	}

	public void showBase(){
		System.out.println("Base: " + base());
	}

	public void showHeight(){
		System.out.println("Height: " + height());
	}

	public double base(){
		return(Point.distanceX(this.p1, this.p2));
	}

	public double height(){
		return(Point.distanceY(this.p1, this.p2));
	}

	@Override
	public double perimeter(){
		return (Point.distanceX(this.p1, this.p2) * 2 + Point.distanceY(this.p1, this.p2) * 2);
	}

	@Override
	public double area(){
		return (Point.distanceX(this.p1, this.p2) * Point.distanceY(this.p1, this.p2));
	}

	@Override
	public String toString(){
		String ret = "[" + this.p1 + "," + this.p2 + "]";
		return ret;
	}

	public void moveEast(double delta){
		this.p1.moveEast(delta);
		this.p2.moveEast(delta);
	}

	public void moveNorth(double delta){
		this.p1.moveNorth(delta);
		this.p2.moveNorth(delta);
	}
}