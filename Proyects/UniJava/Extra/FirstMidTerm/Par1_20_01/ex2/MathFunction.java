@FunctionalInterface
public interface MathFunction < T extends Comparable < ? super T > > {
	T evaluate(T x);
}