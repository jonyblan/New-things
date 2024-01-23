public class Histogram {
    // Number of divisions for the histogram
    private static final int CANT_DIVISIONS = 15;

    // Main method to execute the program
    public static void main(String args[]) {
        // Array to store the count of values in each division
        int[] cantTens = new int[CANT_DIVISIONS];

        try {
            // Analyze the values in the input array and populate cantTens
            analyzeValues(args, cantTens);
        } catch (IllegalArgumentException e) {
            // Handle any illegal argument exceptions gracefully
            handleException(e);
        }

        // Find the maximum count for scaling the histogram
        int max = cantTens[0];
        for (int i = 1; i < CANT_DIVISIONS; i++) {
            if (cantTens[i] > max) {
                max = cantTens[i];
            }
        }

        // Display the histogram based on the analyzed values
        showHistogram(cantTens, max);
    }

    // Analyze the input values and populate the count array
    private static void analyzeValues(String args[], int[] cantTens) {
        for (int i = 0; i < args.length; i++) {
            try {
                // Process each argument and update the count array
                processArgument(args[i], cantTens);
            } catch (NumberFormatException e) {
                // Handle the case where the argument is not a valid integer
                throw new IllegalArgumentException("Invalid integer value: " + args[i]);
            }
        }
    }

    // Process a single argument, validate, and update the count array
    private static void processArgument(String arg, int[] cantTens) {
        int intValue = Integer.valueOf(arg);
        // Validate the integer value and update the count array
        if (intValue < 0 || intValue >= CANT_DIVISIONS * 10) {
            throw new IllegalArgumentException(
                arg + " is an incorrect value. Only values between 0 - " + (CANT_DIVISIONS * 10 - 1) + " are admitted");
        }
        cantTens[intValue / 10]++;
    }

    // Handle illegal argument exceptions by printing an error message and exiting
    private static void handleException(IllegalArgumentException e) {
        System.err.println(e.getMessage());
        System.exit(1); // Exit the program gracefully
    }

    // Display the histogram based on the analyzed values and the maximum count
    public static void showHistogram(int[] cantTens, int max) {
        for (int i = max; i > 0; i--) {
            System.out.print("|");
            for (int j = 0; j < CANT_DIVISIONS; j++) {
                // Display asterisks for divisions with counts greater than or equal to i
                if (cantTens[j] >= i) {
                    System.out.print(" * ");
                } else {
                    System.out.print("   ");
                }
                System.out.print("|");
            }
            System.out.println("");
        }

        // Display the bottom border of the histogram
        for (int j = 0; j < CANT_DIVISIONS; j++) {
            System.out.print("+---");
        }
        System.out.println("+");

        // Display the labels for each division
        System.out.print("0   ");
        for (int j = 1; j <= CANT_DIVISIONS; j++) {
            if (j < 10) {
                System.out.print(j * 10 + "  ");
            } else if (j < 100) {
                System.out.print(j * 10 + " ");
            }
        }
        System.out.println("");
    }
}