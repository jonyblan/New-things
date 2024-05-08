import java.util.*;

public enum Genre{
	FANTASY("Fantasy"),
	FICTION("Fiction"),
	DRAMA("Drama"),
	CHILDREN("Children"),
	NO_GENRE("No genre");


	private String name;

	Genre(String name){
		this.name = name;
	}

	@Override
	public String toString(){
		return name;
	}

	public boolean equals(Genre genre){
		return(this.name.equals(genre.name));
	}
}