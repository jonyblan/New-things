#include <stdio.h>
#include <stdlib.h>

// every element of the arr becomes its index number
void iniArrayIndexNum(int arr[], int size){
    int i;
    for(i=0; i<size; i++){
        arr[i] = i;
    }
}

void shuffle(int arr[], int size){
    srand(time(0));
    for (int i = 0; i < size; i++) {
        int j = rand() % size;
        int t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
}

// 50k: 10.42s, 100k: 42.82s
void sortBubbleSort(int arr[], int size){
    int done = 0, i, aux, passes = 0;
    while(done!=1){
        done = 1;
        for(i = 0; i<size-1;i++){
            if(arr[i]>arr[i+1]){
                aux = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = aux;
                done = 0;
            }
            
        }
        passes++;
        if(passes%10000==0){
            printf("%d laps taken\n", passes);
        }
    }
}

// 50k: 3.15s, 100k: 12.7s
void sortSelectionSort(int arr[], int size){
    int i, j, aux, min, passes=0;
    for(i=0; i<size; i++){
        min=size-1;
        for(j=i; j<size; j++){
            if(arr[j] < arr[min]){
                min=j;
            }
        }
        aux = arr[i];
        arr[i] = arr[min];
        arr[min] = aux;
        passes++;
        if(passes%10000==0){
            printf("%d laps taken\n", passes);
        }
    }
}

void insertionSort(int arr[], int size){
    int i, j, aux, passes = 0, ordenado;
    for(i=0; i<size; i++){
        ordenado = 0;
        while(ordenado == 0){
            ordenado = 1;
            for(j=i; j<=i+1; j++){
                if(arr[j] < arr[j-1]){
                    aux = arr[j];
                    arr[j] = arr[j-1];
                    arr[j-1] = aux;
                    ordenado = 0;
                    break;
                }
            }
        }
    }
}

/*
{0, 2, 3, 1}
i=1
ordenado = 1
j=1


*/

int main(){
    int arrSize = 4, controlNum = 3;
    int arr[arrSize], buffer = arrSize, i=0, control1, control2, control3;
    iniArrayIndexNum(arr, arrSize);
    control1 = arr[controlNum];
    shuffle(arr, arrSize);
    control2 = arr[controlNum];
    //sortBubbleSort(arr, arrSize);
    //sortSelectionSort(arr, arrSize);
    control3 = arr[controlNum];
    while (buffer>0){
        printf("%d\n", arr[i]);
        buffer--;
        i++;
    }
    // 1 and 3 should be controlNum, 2 should not
    printf("\n\nControl (%d):\n\t1: %d\n\t2: %d\n\t3: %d\n", controlNum, control1, control2, control3);
    return 0;
}