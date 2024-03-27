public class Test {
    public static void main(String args[]) {
		Operation addOperation = Operation.Add;
		System.out.println(addOperation.ordinal());
		System.out.println(addOperation);

		Operation op = Operation.valueOf("Add");
		System.out.println(op.apply(4.5, 3));

		for(Operation operation : Operation.values()){
			System.out.println(operation.apply(3.5, 5));
		}
	}
}