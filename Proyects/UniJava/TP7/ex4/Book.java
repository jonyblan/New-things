import java.util.*;

public class Book implements Comparable<Book>{
	private String name, author;
	private int rate;
	private Genre genre;

	public Book(String name, String author){
		this.name = name;
		this.author = author;
		rate = 0;
		genre = Genre.NO_GENRE;
	}

	public String getName(){
		return name;
	}

	public boolean equals(Book book){
		return(name.compareTo(book.name) == 0 && author.compareTo(book.author) == 0);
	}

	@Override
	public int compareTo(Book book){
		int ret = Integer.compare(book.getRate(), this.rate);
			System.out.println(this.rate + " : " + book.getRate());
		if(ret == 0){
			ret = this.name.compareTo(book.getName());
		}
		if(ret == 0){
			ret = this.author.compareTo(book.getAuthor());
		}
		return ret;
	}

	public void rateUp(){
		rate++;
	}

	public void setGenre(Genre genre){
		this.genre = genre;
	}

	public Genre getGenre(){
		return this.genre;
	}

	public int getRate(){
		return this.rate;
	}

	public String getAuthor(){
		return this.author;
	}
}