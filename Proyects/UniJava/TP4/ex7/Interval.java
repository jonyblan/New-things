class Interval{
	private double start;
	private double end;
	private double increment;

	public Interval(double start, double end, double increment){
		if(this.increment <= 0){
			throw new illegalArgumentException("The increment has to be a positive number");
		}
		this.start = start;
		this.end = end;
		this.increment = increment;
		if(this.size() <= 0){
			throw new illegalArgumentException("Null interval");
		}
	}

	public Interval(double start, double end){
		this(start, end, 1);
	}

	public long size(){ // returns the ammount of numbers in the interval
		return ((this.end - this.start)/this.increment);
	}

	public double at(long index){ // returns the element at the index position
		if(index > this.size()){
			throw new illegalArgumentException("Given index is not in the interval")
		}

		double ans = this.start + index * this.increment;

		if(ans > this.end){
			throw new illegalArgumentException("Given index is not in ")
		}
	}

	public boolean includes(double value) // returns true if the interval includes given value

	@Override
	public String toString(){

	}

	@Override
	public boolean equals(Object another){

	}
}
		