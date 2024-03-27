public enum Operation{
	Add("+"){
		public double apply(double num1, double num2){
			return num1 + num2;
		}
	},

	Subtract("-"){
		public double apply(double num1, double num2){
			return num1 - num2;
		}
	},

	Multiply("*"){
		public double apply(double num1, double num2){
			return num1 * num2;
		}
	},

	Divide("/"){
		public double apply(double num1, double num2){
			return num1 / num2;
		}
	};

	public abstract double apply(double num1, double num2);

	private final String symbol;

	Operation(String symbol){
		this.symbol = symbol;
	}

	@Override
	public String toString(){
		return symbol;
	}
}