public static class Account {
		public int Name;
		public double limit, amount;
	
		public Account(int Name, double limit) {
			this.Name = Name;
			this.limit = limit;
			this.amount = -1;
		}

		public void deposit(double money){
			this.amount += money;
		}

		public void extract(double money){
			if((this.amount - money) < this.limit){
				throw new RuntimeException("No cuenta con los fondos necesarios.");
			}
			this.amount -= money;
		}
}