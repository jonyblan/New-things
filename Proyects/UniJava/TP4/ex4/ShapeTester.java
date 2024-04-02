public class ShapeTester {

   public static void main(String[] args) {
       Rectangle myRectangle = new Rectangle(new Point(0, 0, 0), new Point(2, 4, 6));
       System.out.println(myRectangle);

       Triangle myTriangle = new Triangle(new Point(0, 0, 0), new Point(1, 0, 0), new Point(0, 1, 0));
       System.out.println(myTriangle);

       Ellipse myEllipse = new Ellipse(new Point(0, 0, 0), 2, 1);
       System.out.println(myEllipse);

       Circle myCircle = new Circle(new Point(0, 0, 0), 3);
       System.out.println(myCircle);

	   myRectangle.moveEast(2);
	   System.out.println(myRectangle);

	   myTriangle.moveWest(3);
	   System.out.println(myTriangle);

	   myEllipse.moveNorth(4);
	   System.out.println(myEllipse);

	   myCircle.moveSouth(5);
	   System.out.println(myCircle);
   }

}