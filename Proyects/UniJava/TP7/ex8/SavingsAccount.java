public class SavingsAccount extends Account{
	public SavingsAccount(int Name){
		super(Name, 0);
	}

	public void show(){
		System.out.println("Name: " + this.Name + " - Balance: " + this.amount);
	}
}