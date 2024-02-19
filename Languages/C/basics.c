#include <stdio.h>

#define CANT_ELEMS = 2;

int sum(int x, int y) {
    return x + y;
}

int main(void) {
    int numbers[CANT_ELEMS];
    int answer = 0;

    for (int i = 0; i < CANT_ELEMS; i++) {
        printf("Enter element %d: ", i+1);
        scanf("%d", &numbers[i]);
        answer = sum(answer, numbers[i]);
    }
    printf("Sum: %d\n", answer);

    return 0;
}