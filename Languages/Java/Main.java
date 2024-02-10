import java.util.Scanner;

public class Main {
    static final int CANT_ELEMS = 2;

    static int sum(int x, int y) {
        return x + y;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] numbers = new int[CANT_ELEMS];
        int answer = 0;

        // Input loop
        for (int i = 0; i < CANT_ELEMS; ++i) {
            System.out.print("Enter element " + (i + 1) + ": ");
            numbers[i] = scanner.nextInt();
            answer = sum(answer, numbers[i]);
        }

        // Output
        System.out.println("Sum: " + answer);
    }
}