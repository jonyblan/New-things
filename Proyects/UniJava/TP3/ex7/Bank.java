// Done

public class Bank {
    public static void main(String[] args) {
        CheckingAccount myCheckingAccount = new CheckingAccount(1001, -50);
        myCheckingAccount.deposit(100.0);
		myCheckingAccount.show();
        myCheckingAccount.extract(150.0);
        myCheckingAccount.show();

        SavingsAccount mySavingsAccount = new SavingsAccount(1002);
        mySavingsAccount.deposit(100.0);
        mySavingsAccount.show();
        mySavingsAccount.extract(150.0);
        mySavingsAccount.show();
    }

	public static class Account {
		public int Name;
		public double limit, amount;
	
		public Account(int Name, double limit) {
			this.Name = Name;
			this.limit = limit;
			this.amount = 0;
		}

		public void deposit(double money){
			this.amount += money;
		}

		public void extract(double money){
			if((this.amount - money) < this.limit){
				System.out.println("Not enough money to extract");
			}
			this.amount -= money;
		}
	}

	public static class SavingsAccount extends Account{
		public SavingsAccount(int Name){
			super(Name, 0);
		}

		public void show(){
			System.out.println("Name: " + this.Name + " - Balance: " + this.amount);
		}
	}

	public static class CheckingAccount extends Account{
		public CheckingAccount(int Name, double limit){
			super(Name, limit);
		}
		public CheckingAccount(int Name){
			super(Name, 0);
		}		

		public void show(){
			System.out.println("Name: " + this.Name + " - Balance: " + this.amount + " - Limit: " + this.limit);
		}
	}
}
