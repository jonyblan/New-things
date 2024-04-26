public class Account {
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

	public double getAmmount(){
		return this.amount;
	}

	public void extract(double money){
		if((this.amount - money) < this.limit){
			System.out.println("Not enough money to extract");
		}
		this.amount -= money;
	}
}