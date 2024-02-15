<<<<<<< HEAD
// Done
public class Shapes {
	public static void main(String args[]){
		Rectangle myRectangle = new Rectangle(new Point(0, 0), new Point(2, 4));
		myRectangle.showRectangle();
		System.out.println(String.format("%.2f", myRectangle.perimeter()));
		System.out.println(String.format("%.2f", myRectangle.area()));
		System.out.println(String.format("%.2f", myRectangle.base()));
		System.out.println(String.format("%.2f", myRectangle.height()));

		Triangle myTriangle = new Triangle(new Point(0, 0), new Point(1, 0), new Point(0, 1));
		myTriangle.showTriangle();
		System.out.println(String.format("%.2f", myTriangle.perimeter()));
		System.out.println(String.format("%.2f", myTriangle.area()));

		Ellipse myEllipse = new Ellipse(new Point(0, 0), 2, 1);
		myEllipse.showEllipse();
		System.out.println(String.format("%.2f", myEllipse.perimeter()));
		System.out.println(String.format("%.2f", myEllipse.area()));

		Circle myCircle = new Circle(new Point(0, 0), 3);
		myCircle.showCircle();
		System.out.println(String.format("%.2f", myCircle.perimeter()));
		System.out.println(String.format("%.2f", myCircle.area()));
	}


	public abstract static class Shape {
		public abstract double perimeter();
		public abstract double area();
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

		public static void showPoint(Point p1){ // should call showPointLast if its the only one of the last one called
			System.out.print(" { " + p1.x + " , " + p1.y + " } ,");
		}

		public static void showPointLast(Point p1){ // should call showPointLast if its the only one of the last one called
			System.out.println(" { " + p1.x + " , " + p1.y + " ]");
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
	}

	public static class Rectangle extends Shape{
		private Point p1, p2;
		public Rectangle(Point p1, Point p2){
			this.p1 = p1;
			this.p2 = p2;
		}

		public void showRectangle(){
			System.out.print("Rectangle [");
			Point.showPoint(this.p1);
			Point.showPointLast(this.p2);
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
	}

	public static class Triangle extends Shape{
		private Point p1, p2, p3;
		public Triangle(Point p1, Point p2, Point p3){
			this.p1 = p1;
			this.p2 = p2;
			this.p3 = p3;
		}

		public void showTriangle(){
			System.out.print("Triangle: [");
			Point.showPoint(this.p1);
			Point.showPoint(this.p2);
			Point.showPointLast(this.p3);
		}

		@Override
		public double perimeter(){
			return (Point.distance(this.p1, this.p2) + Point.distance(this.p2, this.p3) + Point.distance(this.p3, this.p1));
		}

		@Override
		public double area(){
			return (0.5 * Math.abs((this.p1.getX() * (this.p2.getY() - this.p3.getY())) + (this.p2.getX() * (this.p3.getY() - this.p1.getY())) + (this.p3.getX() * (this.p1.getY() - this.p2.getY()))));
		}
	}

	public static class Ellipse extends Shape{
		private Point center;
		private double bigger, lower;
		public Ellipse(Point center, double bigger, double lower){
			this.center = center;
			this.bigger = bigger;
			this.lower = lower;
		}

		public void showEllipse(){
			System.out.println("Center: { " + this.center.x + " , " + this.center.y + " } , Diameter1: " + this.bigger + " , Diameter2: " + this.lower);
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
	}

	public static class Circle extends Shape{
		private Point center;
		private double radius;

		public Circle(Point center, double radius){
			this.center = center;
			this.radius = radius;
		}

		public void showCircle(){
			System.out.println("Center: { " + this.center.x + " , " + this.center.y + " } , Radius: " + this.radius);
		}

		public double perimeter(){
			return (Math.PI * this.radius * 2);
		}

		public double area(){
			return (Math.pow(this.radius, 2) * Math.PI);
		}
	}
}
=======
// Done
public class Shapes {
	public static void main(String args[]){
		Rectangle myRectangle = new Rectangle(new Point(0, 0), new Point(2, 4));
		myRectangle.showRectangle();
		System.out.println(String.format("%.2f", myRectangle.perimeter()));
		System.out.println(String.format("%.2f", myRectangle.area()));
		System.out.println(String.format("%.2f", myRectangle.base()));
		System.out.println(String.format("%.2f", myRectangle.height()));

		Triangle myTriangle = new Triangle(new Point(0, 0), new Point(1, 0), new Point(0, 1));
		myTriangle.showTriangle();
		System.out.println(String.format("%.2f", myTriangle.perimeter()));
		System.out.println(String.format("%.2f", myTriangle.area()));

		Ellipse myEllipse = new Ellipse(new Point(0, 0), 2, 1);
		myEllipse.showEllipse();
		System.out.println(String.format("%.2f", myEllipse.perimeter()));
		System.out.println(String.format("%.2f", myEllipse.area()));

		Circle myCircle = new Circle(new Point(0, 0), 3);
		myCircle.showCircle();
		System.out.println(String.format("%.2f", myCircle.perimeter()));
		System.out.println(String.format("%.2f", myCircle.area()));
	}


	public abstract static class Shape {
		public abstract double perimeter();
		public abstract double area();
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

		public static void showPoint(Point p1){ // should call showPointLast if its the only one of the last one called
			System.out.print(" { " + p1.x + " , " + p1.y + " } ,");
		}

		public static void showPointLast(Point p1){ // should call showPointLast if its the only one of the last one called
			System.out.println(" { " + p1.x + " , " + p1.y + " ]");
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
	}

	public static class Rectangle extends Shape{
		private Point p1, p2;
		public Rectangle(Point p1, Point p2){
			this.p1 = p1;
			this.p2 = p2;
		}

		public void showRectangle(){
			System.out.print("Rectangle [");
			Point.showPoint(this.p1);
			Point.showPointLast(this.p2);
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
	}

	public static class Triangle extends Shape{
		private Point p1, p2, p3;
		public Triangle(Point p1, Point p2, Point p3){
			this.p1 = p1;
			this.p2 = p2;
			this.p3 = p3;
		}

		public void showTriangle(){
			System.out.print("Triangle: [");
			Point.showPoint(this.p1);
			Point.showPoint(this.p2);
			Point.showPointLast(this.p3);
		}

		@Override
		public double perimeter(){
			return (Point.distance(this.p1, this.p2) + Point.distance(this.p2, this.p3) + Point.distance(this.p3, this.p1));
		}

		@Override
		public double area(){
			return (0.5 * Math.abs((this.p1.getX() * (this.p2.getY() - this.p3.getY())) + (this.p2.getX() * (this.p3.getY() - this.p1.getY())) + (this.p3.getX() * (this.p1.getY() - this.p2.getY()))));
		}
	}

	public static class Ellipse extends Shape{
		private Point center;
		private double bigger, lower;
		public Ellipse(Point center, double bigger, double lower){
			this.center = center;
			this.bigger = bigger;
			this.lower = lower;
		}

		public void showEllipse(){
			System.out.println("Center: { " + this.center.x + " , " + this.center.y + " } , Diameter1: " + this.bigger + " , Diameter2: " + this.lower);
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
	}

	public static class Circle extends Shape{
		private Point center;
		private double radius;

		public Circle(Point center, double radius){
			this.center = center;
			this.radius = radius;
		}

		public void showCircle(){
			System.out.println("Center: { " + this.center.x + " , " + this.center.y + " } , Radius: " + this.radius);
		}

		public double perimeter(){
			return (Math.PI * this.radius * 2);
		}

		public double area(){
			return (Math.pow(this.radius, 2) * Math.PI);
		}
	}
}
>>>>>>> 86ceaeeec2ad18d16e396390387907a48c2aabcd
