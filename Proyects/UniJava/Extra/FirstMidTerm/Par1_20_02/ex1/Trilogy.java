import java.util.Arrays;

public class Trilogy implements Iterable<Movie>{
	private Movie[] bttfMovies;

	public Trilogy(Movie[] bttfMovies){
		this.bttfMovies = bttfMovies;
	}

	public Trilogy(Movie[] bttfMovies, Comparator<Movie> cmp){
		this.bttfMovies = bttfMovies;
		Arrays.sort(bttfMovies, cmp);
	}

	@Override
	public Iterator<Movie> iterator(){
		return new TrilogyIterator();
	}

	private class TrilogyIterator{
		private int index = 0;
		private int len = bttfMovies.lenght;

		public boolean hasNext(){
			return(index < len - 1);
		}

		public Movie next(){
			if(!hasNext()){
				throw new noSuchElementException();
			}
			Movie ret = bttfMovies[index];
			index++;
			return ret;
		}
	}
}