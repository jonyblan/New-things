public class ElementTester {
	public static void main(String[] args) {

		TextElement element1 = new TextElement("mundo");
		System.out.println(element1);

		System.out.println("##########");
		TextElement element2 = new TextElement("hola");
		System.out.println(element2);
		
		System.out.println("++++++++++");
		Element element21 = element2.above(element1);
		System.out.println(element21);

		System.out.println("----------");
		element1.setText("world");
		System.out.println(element21);

		System.out.println("**********");
		TextElement element3 = new TextElement("start");
		Element element321 = element21.below(element3);
		System.out.println(element321);

		System.out.println("..........");
		element2.setText("hello");
		System.out.println(element321);

		System.out.println("//////////");
		Element element111 = element1.repeat(3);
		System.out.println(element111);

		System.out.println("]]]]]]]]]]");
		Element element2121 = element21.repeat(2);
		System.out.println(element2121);
	}
}