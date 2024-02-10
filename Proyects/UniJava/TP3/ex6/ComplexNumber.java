// Done

public class ComplexNumber {

	private final double real, imaginary;

	public static void main(String[] args) {
		ComplexNumber c1 = new ComplexNumber(12d, 5);
		ComplexNumber c2 = new ComplexNumber(10);
		System.out.println(c1.equals(c2)); // false
		System.out.println(c1.equals(new ComplexNumber(12, 5))); // true
		showComplex(c1.plus(c2)); // 22.00 + 5.00
		showComplex(c1.plus(-3)); // 9.00 + 5.00
		showComplex(c1.plus((double) -3)); // 9.00 + 5.00
		showComplex(c1.plus((double)-12));
		showComplex(c1.plus(new ComplexNumber(3, -5)));
		showComplex(c1.plus(new ComplexNumber(-12, -5)));
	}

	public ComplexNumber(double real, double imaginary){
		this.real = real;
		this.imaginary = imaginary;
	}

	public ComplexNumber(double real){
		this.real = real;
		this.imaginary = 0;
	}

	public ComplexNumber plus(ComplexNumber complex){
		double returnReal = this.real + complex.real;
		double returnImaginary = this.imaginary + complex.imaginary;
		ComplexNumber returnComplex = new ComplexNumber(returnReal, returnImaginary);
		return returnComplex;
	}

	public ComplexNumber plus(double real){
		double returnReal = this.real + real;
		ComplexNumber returnComplex = new ComplexNumber(returnReal, this.imaginary);
		return returnComplex;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}

		if (obj == null || getClass() != obj.getClass()) {
			return false;
		}

		ComplexNumber other = (ComplexNumber) obj;
		return Double.compare(other.real, real) == 0 && Double.compare(other.imaginary, imaginary) == 0;
	}


	public static void showComplex(ComplexNumber complex){
		if(complex.real != 0){
			System.out.print(complex.real);
			if(complex.imaginary != 0){
				if(complex.imaginary > 0){
					System.out.print(" + ");
				}
				if(complex.imaginary < 0){
					System.out.print(" - ");
				}
			}
		}
		if(complex.imaginary != 0){
			System.out.println(complex.imaginary + "i");
		}
		else if (complex.real==0){
			System.out.println("0");
		}
		else{
			System.out.println("");
		}
	}

}