public class TrilogyTester {
	public static void main(String[] args) {
		// Película: Nombre, año de lanzamiento y user rating
		Movie bttf1 = new Movie("Back to the Future", 1985, 8.5);
		Movie bttf2 = new Movie("Back to the Future Part II", 1989, 7.8);
		Movie bttf3 = new Movie("Back to the Future Part III", 1990, 7.8);
		Movie[] bttfMovies = new Movie[]{bttf3, bttf1, bttf2};
		Trilogy bttfTrilogy = new Trilogy(bttfMovies);
		// Orden 1: Orden de inserción al crear el array bttfMovies
		for(Movie movie : bttfTrilogy) {
			System.out.println(movie);
		}
		System.out.println("##########");

		// Orden 2: Orden ascendente por rating
		// y luego desempata alfabéticamente por nombre
		bttfTrilogy = new Trilogy(bttfMovies,
		new Comparator<Movie>(){
			@Override
			public int compare(Movie m1, Movie m2){
				int ret = Double.compare(m1.getRating(), m2.getRating());
				if(ret == 0){
					ret = m1.getTitle().compareTo(m2.getTitle());
				}
				return ret;
			}
		}
		);
		for(Movie movie : bttfTrilogy) {
			System.out.println(movie);
		}
		System.out.println("##########");

		// Orden 3: Orden descendente por año de lanzamiento
		// y luego desempata alfabéticamente por nombre
		bttfTrilogy = new Trilogy(bttfMovies,
		new Comparator<Movie>(){
			@Override
			public int compare(Movie m1, Movie m2){
				int ret = Double.compare(m1.getYear(), m2.getYear());
				if(ret == 0){
					ret = m1.getTitle().compareTo(m2.getTitle());
				}
				return ret;
			}
		}
		);
		for(Movie movie : bttfTrilogy) {
			System.out.println(movie);
		}
	}
}