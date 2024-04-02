public class Ellipse extends Shape implements Movable{
	private Point center;
	private double bigger, lower;
	
	public Ellipse(Point center, double bigger, double lower){
		this.center = center;
		this.bigger = bigger;
		this.lower = lower;
	}

	public Point getCenter(){
		return this.center;
	}

	public double perimeter(){
		return (Math.PI * (3 * (this.bigger/2 + this.lower/2) - Math.sqrt((3 * this.bigger/2 + this.lower/2) * (this.bigger/2 + 3 * this.lower/2))));
	}

	public double area(){
		return (Math.PI * this.bigger/2 * this.lower/2);
	}

	@Override
	public String toString(){
		String ret = "[Center{" + this.center + "},Bigger{" + this.bigger + "},lower{" + this.lower + "}]";
		return ret;
	}

	public void moveEast(double delta){
		this.center.moveEast(delta);
	}

	public void moveNorth(double delta){
		this.center.moveNorth(delta);
	}
}