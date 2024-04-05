public class NumberException extends Exception {

   private static final String MESSAGE = "Error for number %s: ";

   public NumberException(String number, String description) {
       super(String.format(MESSAGE + description, number));
   }

}
