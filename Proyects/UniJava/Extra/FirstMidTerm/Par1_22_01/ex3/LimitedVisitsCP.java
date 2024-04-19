import java.time.LocalDate;

public class LimitedVisitsCP extends UnlimitedCP{
	private int maxCantVisits;

	public LimitedVisitsCP(Attraction[] attractions, String name, LocalDate startDate, int maxCantVisits){
		super(attractions, name, startDate);
		this.maxCantVisits = maxCantVisits;
	}

	@Override
	public void visit(Attraction attraction, LocalDate localDate){
		if(cantVisits <= maxCantVisits){
			super.visit(attraction, localDate);
		}
		else{
			throw new CannotVisitAttractionException(attraction);
		}
	}
}