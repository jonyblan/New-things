
public class Shapes {
	public static void main(String args[]){
		Rectangle myRectangle = new Rectangle(new Point(0, 0), new Point(2, 4));
		myRectangle.showRectangle();
		myRectangle.showPerimeter();
		myRectangle.showArea();
		myRectangle.showBase();
		myRectangle.showHeight();
	
		/*Triangle myTriangle = new Triangle(new Point(0, 0), new Point(1, 0), new Point(0, 1));
		System.out.println(myTriangle);
		System.out.println(String.format("%.2f", myTriangle.perimeter()));
		System.out.println(String.format("%.2f", myTriangle.area()));
	
		Ellipse myEllipse = new Ellipse(new Point(0, 0), 2, 1);
		System.out.println(myEllipse);
		System.out.println(String.format("%.2f", myEllipse.perimeter()));
		System.out.println(String.format("%.2f", myEllipse.area()));
	
		Circle myCircle = new Circle(new Point(0, 0), 3);
		System.out.println(myCircle);
		System.out.println(String.format("%.2f", myCircle.perimeter()));
		System.out.println(String.format("%.2f", myCircle.area()));*/
		
	}

	public static class Shape {
		private double perimeter, area;
		public void showArea(){
			System.out.println("Area: " + area());
		}
		public void showPerimeter(){
			System.out.println("Perimeter: " + perimeter());
		}
		public double perimeter(){
			return this.perimeter;
		}
		public double area(){
			return this.area;
		}
	}

	public static class Point {
		private final double x, y;

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
	}

	public static class Rectangle extends Shape{
		private Point p1, p2;
		public Rectangle(Point p1, Point p2){
			this.p1 = p1;
			this.p2 = p2;
		}

		public Point[] getPoints(){
			Point[] points = new Point[2];
			points[0] = p1;
			points[1] = p2;
			return points;
		}

		public void showRectangle(){
			Point[] points = getPoints();
			System.out.println("Rectangle [ { " + points[0].getX() + " , " + points[0].getY() + " } , { " + points[1].getX() + " , " + points[1].getY() + " } ]");
		}

		public void showBase(){
			System.out.println("Base: " + base());
		}

		public void showHeight(){
			System.out.println("Height: " + height());
		}

		public double base(){
			return(Math.abs(this.p1.x - this.p2.x));
		}

		public double height(){
			return(Math.abs(this.p1.y - this.p2.y));
		}
	}

	/*public class Triangle extends Shape{

	}

	public class Circle extends Shape{

	}

	public class Elipse extends Shape{

	}*/
}
