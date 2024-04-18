public class SortedPairIteratorTester {
	public static void main(String[] args) {
		Integer[] numbers = new Integer[] {1, 5, 9, 2, 3, 1};
		SortedPairIterator < Integer > spi1 = new SortedPairIterator < > (numbers);

		System.out.println(spi1.next());
		System.out.println(spi1.next());
		System.out.println(spi1.next());

			System.out.println(spi1.next());
		 

		System.out.println("##########");
		spi1 = new SortedPairIterator < > (numbers);

		System.out.println(spi1.next().getRight());
		System.out.println(spi1.next().getLeft());
		System.out.println(spi1.next().getRight());

			System.out.println(spi1.next());
		

		System.out.println("##########");
		Continent[] continents = Continent.values();
		SortedPairIterator < Continent > spi2 = new SortedPairIterator < >
		(continents);

		System.out.println(spi2.next());
		System.out.println(spi2.next());

			System.out.println(spi2.next());
		

		System.out.println("##########");
		Planet[] planets = new Planet[]{new Planet("Mars"), new Planet("Earth")};
		SortedPairIterator < Planet > spi3 = new SortedPairIterator < > (planets);
		System.out.println(spi3.next().getLeft());
	}

	enum Continent {
		OCEANIA, AFRICA, AMERICA, EUROPE, ASIA
	}

	static abstract class AbstractPlanet implements Comparable < AbstractPlanet > {
		public String name;
		public AbstractPlanet(String name) {
			this.name = name;
		}
		@Override
		public int compareTo(AbstractPlanet o) {
			return name.compareTo(o.name);
		}
		@Override
		public String toString() {
			return name;
		}
	}

	static class Planet extends AbstractPlanet {
		public Planet(String name) {
			super(name);
		}
	}
}