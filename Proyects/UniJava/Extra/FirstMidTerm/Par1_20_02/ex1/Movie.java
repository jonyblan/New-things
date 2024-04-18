public class Movie {
	private final String title;
	private final int year;
	private final double rating;

	public Movie(String title, int year, double rating) {
		this.title = title;
		this.year = year;
		this.rating = rating;
	}

	public String getTitle() {
		return title;
	}

	public int getYear() {
		return year;
	}

	public double getRating() {
		return rating;
	}

	@Override
	public String toString() {
		return title;
	}
}