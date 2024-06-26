public class CannotVisitAttractionException extends RuntimeException {

	private static final String MESSAGE = "Cannot Visit Attraction %s";

	public CannotVisitAttractionException(Attraction attraction) {
		super(String.format(MESSAGE, attraction.toString()));
	}

}
