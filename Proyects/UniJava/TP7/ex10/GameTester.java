import java.util.*;

public class GameTester{
	public static void main(String args[]){
		Set<Object> aux = new HashSet<>();
		aux.add("Buenos Aires");
		aux.add("Montevideo");
		aux.add("Santiago de Chile");

		Game game = new Game();
		Question q2 = new IntegerQuestion("¿En qué año fue la Revolución de Mayo?", 1810);
		Question q1 = new TextQuestion("¿Cuál es la capital de La Pampa?", "Santa Rosa");
		OptionedQuestion q3 = new OptionQuestion("¿Cuál es la capital de Australia?\na) Sydney, b) Canberra, c) Melbourne", "Canberra");
		OptionedQuestion q4 = new MultipleAnswerQuestion("¿Cuáles de las siguientes son ciudades capitales de países?\na) Buenos Aires, b) Punta del Este, c) Natal, d) Montevideo, e) Santiago de Chile", aux);
		Question q5 = new BooleanQuestion("La capital de Argentina es La Plata.", false);

		game.addQuestion(q1);
		game.addQuestion(q2);
		game.addQuestion(q3);
		game.addQuestion(q4);
		game.addQuestion(q5);

		game.guess(5, true);
		game.guess(1, "Santa Rosa");
		
	}
}