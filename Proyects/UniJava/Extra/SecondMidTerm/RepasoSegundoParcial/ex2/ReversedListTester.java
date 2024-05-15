import java.util.Iterator;

public class ReversedListTester {

	public static void main(String[] args) {
		ReversedList<Integer> list = new ReversedListImpl<>();
		list.add(1);
		list.add(2);
		list.add(3);
		list.add(4);
		Iterator<Integer> defaultIterator = list.defaultIterator();
		while(defaultIterator.hasNext()) {
			System.out.print(defaultIterator.next() + " "); // 1 2 3 4 

		}
		System.out.println();
		Iterator<Integer> iterator = list.iterator();
		while(iterator.hasNext()) {
			System.out.print(iterator.next() + " "); // 4 3 2 1 
		}
	}

}
