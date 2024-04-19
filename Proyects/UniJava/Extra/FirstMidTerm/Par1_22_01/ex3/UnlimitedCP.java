import java.util.*;
import java.time.LocalDate;

public class UnlimitedCP implements CityPass{
	private Attraction attractions[];
	private String name;
	private LocalDate startDate;
	protected int cantVisits;

	public UnlimitedCP(Attraction[] attractions, String name, LocalDate startDate){
		this.attractions = attractions;
		this.name = name;
		this.startDate = startDate;
		cantVisits = 0;
	}

	public void visit(Attraction attraction, LocalDate startDate){
		if(!belongsIn(attraction) || startDate.isBefore(startDate)){
			throw new CannotVisitAttractionException(attraction);
		}
		cantVisits++;
		System.out.println("" + name + " visited " + attraction.getName());
	}

	public Attraction[] getAttractions(){
		return attractions;
	}

	@Override
	public String toString(){
		return ("CityPass for " + name + "user for " + cantVisits + " attractions");
	}

	public String exceptionMessage(Attraction attraction){
		return ("Cannot Visit Attraction " + attraction.getName());
	}
}