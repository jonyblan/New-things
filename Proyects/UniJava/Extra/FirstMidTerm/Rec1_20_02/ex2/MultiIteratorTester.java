import java.util.*;

public class MultiIteratorTester {
	public static void main(String[] args) {
		Integer[] v1 = new Integer[]{10,11,12};
		Integer[] v2 = new Integer[]{20,21};
		Integer[] v3 = new Integer[]{30};

		// Ejemplo de uso de la clase ArrayIterator
		Iterator<Integer> arrayIterator1 = new ArrayIterator<>(v1);
		while(arrayIterator1.hasNext()) {
			System.out.println(arrayIterator1.next()); // Imprime 10 11 12
		}

		// Ejemplo de uso de la clase MultiIterator
		MultiIterator<Integer> multiIterator1 = new MultiIterator<>();
		System.out.println(multiIterator1.size()); // Imprime 0
		multiIterator1.add(new ArrayIterator<>(v1));
		System.out.println(multiIterator1.size()); // Imprime 1
		multiIterator1.add(new ArrayIterator<>(v2));
		multiIterator1.add(new ArrayIterator<>(v3));
		System.out.println(multiIterator1.size()); // Imprime 3

		while(multiIterator1.hasNext()) {
			System.out.println(multiIterator1.next()); // Imprime 10 11 12 20 21 30
		}
		try {
			multiIterator1.next();
		} catch (NoSuchElementException ex) {
			System.out.println("No more elements"); // Imprime "No More Elements"
		}

		MultiIterator<Integer> multiIterator2 = new MultiIterator<>();
		multiIterator2.add(new ArrayIterator<>(v1));
		System.out.println(multiIterator2.next()); // Imprime 10
		System.out.println(multiIterator2.next()); // Imprime 11

		try {
			multiIterator2.add(new ArrayIterator<>(v2));
		} catch (MultiIteratorException ex) {
			System.out.println(ex.getMessage()); // Imprime "Can't add after started"
		}

		System.out.println(multiIterator2.size()); // Imprime 1
		String[] v4 = new String[]{}; // Array vacío
		MultiIterator<String> multiIterator3 = new MultiIterator<>();
		multiIterator3.add(new ArrayIterator<>(v4));
		System.out.println(multiIterator3.size()); // Imprime 1
		
		try {
			multiIterator3.next();
		} catch (NoSuchElementException ex) {
			System.out.println("No more elements"); // Imprime "No More Elements"
		}
	}
}