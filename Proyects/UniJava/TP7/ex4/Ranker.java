import java.util.*;

public class Ranker{

	private Set<Book> ranking;

	public Ranker(){
		ranking = new TreeSet<>();
	}

	public void add(Genre genre, Book book){
		ranking.add(book);
		book.setGenre(genre);
		System.out.println(book.getName() + " book added");
	}

	public void rateUp(Book book){
		boolean found = false;
		for(Book b : ranking){
			if(b.equals(book)){
				b.rateUp();
				System.out.println(b.getName() + "'s rate aumented to " + b.getRate());
				found = true;
			}
		}
		if(!found){
			book.rateUp();
			ranking.add(book);
			System.out.println(book.getName() + "'s rate aumented to " + book.getRate());
		}
	}

	public void printRanking(){
		String ret = "General ranking:\n";
		for(Book book : ranking){
			ret += book.getName();
			ret += " : ";
			ret += book.getRate();
			ret += "\n";
		}
		System.out.println(ret);
	}

	public void printRanking(Genre genre){
		String ret = "Ranking of " + genre + ":\n";
		for(Book book : ranking){
			if(!book.getGenre().equals(genre)){
				continue;
			}
			ret += book.getName();
			ret += " : ";
			ret += book.getRate();
			ret += "\n";
		}
		System.out.println(ret);
	}
}