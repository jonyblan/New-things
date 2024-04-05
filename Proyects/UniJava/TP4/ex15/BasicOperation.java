public enum BasicOperation implements Operation{
	Plus("+"){
		@Override
		public double apply(double num1, double num2){
			return num1+num2;
		}
	},
	Minus("-"){
		@Override
		public double apply(double num1, double num2){
			return num1-num2;
		}
	},
	Multiply("*"){
		@Override
		public double apply(double num1, double num2){
			return num1*num2;
		}
	},
	Devide("/"){
		@Override
		public double apply(double num1, double num2){
			return num1/num2;
		}
	};

	public final String symbol;

	BasicOperation(String symbol){
		this.symbol = symbol;
	}

	@Override
	public String toString(){
		return this.symbol;
	}
}