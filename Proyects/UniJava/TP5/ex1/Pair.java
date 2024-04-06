public class Pair<A, B>{
	private final A a;
	private final B b;

	public Pair(A a, B b){
		this.a = a;
		this.b = b;
	}

	public boolean equals(Object o){
		return o instanceof Pair<?, ?> pair &&
               a.equals(pair.a) &&
               b.equals(pair.b);
	}

	@Override
	public String toString(){
		return "[%s , %s]".formatted(this.a, this.b);
	}
}