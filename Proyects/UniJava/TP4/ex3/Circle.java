public class Circle extends Ellipse implements Movable{
	private Point center;
	private double radius;

	public Circle(Point center, double radius){
		super(center, radius, radius);
		this.center = center;
		this.radius = radius;
	}

	@Override
	public String toString(){
		String ret = "[Center{" + this.center + "},Radius{" + this.radius + "}]";
		return ret;
	}
}