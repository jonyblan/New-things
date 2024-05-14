import java.util.*;

public class CashierTester{
	public static void main(String args[]){
		Cashier cashier = new Cashier(new NoteDispenser());
		cashier.loadMoney(Arrays.asList(2,5,2,100,100,50,2,10,5,10,20,1,1,2,5,10,10));
		cashier.getMoney(11);
	}
}