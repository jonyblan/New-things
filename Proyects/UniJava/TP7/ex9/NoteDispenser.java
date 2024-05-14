import java.util.ArrayList;
import java.util.List;

public class NoteDispenser {
	private Cashier cashier;
	private List<Integer> notes = new ArrayList<>();

	/**
	* Cancela la transaccion actual devolviendo los billetes al cajero.
	*/
	public void reset() {
		cashier.loadMoney(notes);
		notes = new ArrayList<>();
	}

	/**
	* Acumula una cantidad de billetes de cierto valor en la transaccion.
	*/
	public void storeNote(Integer count, Integer value) {
		for (int i=0; i<count; i++){
			notes.add(value);
		}
	}

	/**
	* Entrega al usuario los billetes acumulados en la transaccion.
	*/
	public void deliver() {
		for (Integer i: notes) {
			System.out.println("Billete de " + i );
		}
	}

	public void setCashier(Cashier cashier) {
		this.cashier = cashier;
	}
}