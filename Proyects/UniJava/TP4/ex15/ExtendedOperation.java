public enum ExtendedOperation implements Operation{
	Power("^"){
		@Override
		public double apply(double num1, double num2){
			return Math.pow(num1, num2);
		}
	},
	Modulus("%"){
		@Override
		public double apply(double num1, double num2){
			return num1%num2;
		}
	};

	private final String symbol;

	ExtendedOperation(String symbol){
		this.symbol = symbol;
	}

	@Override
	public String toString(){
		return this.symbol;
	}
}