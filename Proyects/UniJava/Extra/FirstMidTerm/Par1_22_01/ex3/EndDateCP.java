import java.time.LocalDate;

public class EndDateCP extends UnlimitedCP{
	private LocalDate expirationDate;

	public EndDateCP(Attraction[] attractions, String name, LocalDate startDate, LocalDate expirationDate){
		super(attractions, name, startDate);
		this.expirationDate = expirationDate;
	}

	@Override
	public void visit(Attraction attraction, LocalDate localDate){
		if(localDate.isBefore(expirationDate)){
			super.visit(attraction, localDate);
		}
		else{
			throw new CannotVisitAttractionException(attraction);
		}
	}
}