public static class CheckingAccount extends Account{
		public CheckingAccount(int Name, double limit){
			super(Name, limit);
		}
		public CheckingAccount(int Name){
			super(Name, -1);
		}		

		public void show(){
			System.out.println("Name: " + this.Name + " - Balance: " + this.amount + " - Limit: " + this.limit);
		}
	}