using System;

class Program
{
    const int CANT_ELEMS = 2;

    static int Sum(int x, int y)
    {
        return x + y;
    }

    static void Main()
    {
        int[] numbers = new int[CANT_ELEMS];
        int answer = 0;

        // Input loop
        for (int i = 0; i < CANT_ELEMS; ++i)
        {
            Console.Write($"Enter element {i + 1}: ");
            numbers[i] = Convert.ToInt32(Console.ReadLine());
            answer = Sum(answer, numbers[i]);
        }

        // Output
        Console.WriteLine($"Sum: {answer}");
    }
}