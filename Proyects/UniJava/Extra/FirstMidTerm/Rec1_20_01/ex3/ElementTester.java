public class ElementTester {
	public static void main(String[] args) {

		SquareElement squareElement = new SquareElement(2);
		System.out.println(squareElement); // 2 filas y 2 columnas
		System.out.println();

		RectangularElement rectangularElement = new RectangularElement(2,3);
		System.out.println(rectangularElement); // 2 filas y 3 columnas
		System.out.println();

		ResizableElement resizableElement = new ResizableElement(rectangularElement, 2);
		System.out.println(resizableElement); // x2 = 4 filas y 6 columnas
		System.out.println();

		rectangularElement.setWidth(3);
		System.out.println(rectangularElement); // 3 filas y 3 columnas
		System.out.println();
		System.out.println(resizableElement); // x2 = 6 filas y 6 columnas
		System.out.println();
		
		resizableElement.resize(1);
		System.out.println(resizableElement); // x1 = 3 filas y 3 columnas
		System.out.println();
	}
}