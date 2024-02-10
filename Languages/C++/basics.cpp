#include <iostream>
using namespace std;

#define CANT_ELEMS 2

int sum(int x, int y) {
    return x + y;
}

int main() {
    int numbers[CANT_ELEMS];
    int answer = 0;

    // Input loop
    for (int i = 0; i < CANT_ELEMS; ++i) {
        cout << "Enter element " << i + 1 << ": ";
        cin >> numbers[i];
        answer = sum(answer, numbers[i]);
    }

    // Output
    cout << "Sum: " << answer << endl;

    return 0;
}