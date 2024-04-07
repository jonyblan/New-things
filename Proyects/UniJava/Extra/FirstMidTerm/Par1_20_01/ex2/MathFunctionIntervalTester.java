public class MathFunctionIntervalTester {
	public static void main(String[] args) {
		// Ejemplo 1: Intervalo de enteros (Integer)
		// De 1 a 10 con paso 2
		MathFunction < Integer > stepTwo = new MathFunction < Integer > () {
		@Override
		public Integer evaluate(Integer x) {
			return x + 2;
		}
		};
		MathFunctionInterval < Integer > integerInterval =
		new MathFunctionInterval < > (1, 10, stepTwo);
		for(int element : integerInterval) { // Imprime 1 3 5 7 9
			System.out.println(element);
		}

		// Ejemplo 2: Intervalo de números reales (Double)
		// De 1 a 10 con paso 2.5
		MathFunctionInterval < Double > doubleInterval =
		new MathFunctionInterval < > (1.0, 10.0, new MathFunction < Double > () {
		@Override
		public Double evaluate(Double x) {
			return x + 2.5;
		}
		});
		for(double element : doubleInterval) { // Imprime 1.0 3.5 6.0 8.5
			System.out.println(element);
		}


		// Ejemplo 3: Intervalo de FloatWrapper
		// De 1 a 10 con paso 2.5
		MathFunctionInterval < FloatWrapper > floatWrapperInterval =
		new MathFunctionInterval < > (new FloatWrapper(1f), new FloatWrapper(10f),
		new MathFunction < FloatWrapper >() {
			@Override
			public FloatWrapper evaluate(FloatWrapper x) {
				return new FloatWrapper(x.f + 2.5f);
			}
		});

		for(FloatWrapper element : floatWrapperInterval) { // Imprime 1.0 3.5 6.0 8.5
			System.out.println(element.f);
		}


		// Ejemplo 4: Sólo debe funcionar con start < end
		try {
		new MathFunctionInterval < > (10.0, 1.0, x -> x - 2.5);
		} catch (Exception ex) { // Imprime Start no es menor que end
			System.out.println(ex.getMessage());
		}


		// Ejemplo 5: Intervalo incorrecto donde no converge
		// De 1 a 10 con paso -1 generará un intervalo infinito
		// y no es necesario validarlo
		MathFunctionInterval < Integer > wrongInterval =
		new MathFunctionInterval < > (1, 10, x -> x - 1);
		for(int element : wrongInterval) { // Imprime 1 0 -1 -2 -3 ... y no termina
			System.out.println(element);
		}
	}

	static class FloatWrapper implements Comparable < FloatWrapper > {
		public float f;

		public FloatWrapper(float f) {
			this.f = f;
		}

		@Override
		public int compareTo(FloatWrapper o) {
			return Float.compare(f, o.f);
		}
	}
}