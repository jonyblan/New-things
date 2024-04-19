import java.util.*;

public class MilesClient implements Iterable<String>{
	private String name;
	private int cantMonths;
	private Club plan;

	public MilesClient(String name, int cantMonths, Club plan){
		this.name = name;
		this.cantMonths = cantMonths;
		this.plan = plan;
	}

	public Iterator<String> iterator(){
		return new Iterator<>(){
			private int currentMonth = 1;

			@Override
			public boolean hasNext(){
				return (currentMonth <= cantMonths);
			}

			@Override
			public String next(){
				if(!hasNext()){
					throw new NoSuchElementException("Invalid month");
				}
				String ret = "Client " + name + ": Month " + currentMonth + " earned " + plan.cantMilesHowMuch(currentMonth);
				currentMonth++;
				return ret;
			}
		};
	}
}