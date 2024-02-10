CANT_ELEMS = 2

def sum(x, y):
    return x + y

def main():
    numbers = []
    answer = 0

    # Input loop
    for i in range(CANT_ELEMS):
        element = int(input(f"Enter element {i + 1}: "))
        numbers.append(element)
        answer = sum(answer, element)

    # Output
    print(f"Sum: {answer}")

if __name__ == "__main__":
    main()