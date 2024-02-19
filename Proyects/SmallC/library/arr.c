#include <stdio.h>
#include <time.h>
#include <math.h>
#include <stdlib.h>
// every element of the arr becomes [num]
void iniArrayNum(int arr[], int arrSize, int num){
    int i;
    for(i = 0; i<arrSize; i++){
        arr[i] = num;
    }
}

// every element of the arr becomes its index number
void iniArrayIndexNum(int arr[], int size){
    int i;
    for(i=0; i<size; i++){
        arr[i] = i;
    }
}

// every element of the numbers ends up in an array, in the same order. If the num is shorter than the size, the first elements will be trash
void numToArr(int arr[], unsigned long num, int arrSize, int base){
    int i;
    for(i=arrSize-1; i>=0, num>0; i--, num /= base){
        arr[i] = num%base;
    }
}

// the arr has to be full
int arrToNum(int arr[], unsigned long num, int arrSize, int base){ 
    int i, exponent;
    for(i=arrSize-1, num=0, exponent=1; i>=0; i--, exponent *= base){
        num += arr[i]*exponent;     
    }
    return num;
}

// a -1 in the array signals the conclusion of it
void getPrimes(int arrPrimos[], int maxPrime){ 
    int arr[maxPrime], i, a, counter = 0;
    for(i=0; i<maxPrime; i++){
        arr[i] = 1;
    }
    for(i=2; i<maxPrime; i++){
        if(arr[i] == 0){
            continue;
        }
        for(a=2; a*i<maxPrime; a++){
            arr[i*a] = 0;
        }
    }
    for(i=2;i<maxPrime;i++){
        if(arr[i] == 1){
            arrPrimos[counter] = i;
            counter++;
        }
    }
    arrPrimos[counter] = -1;
}

// gets [cant] multiples of [num] and arr[i]/i=num
void getMultiples(int arr[], int num, int cant){
    int i;
    for(i=0; i<cant; i++){
        arr[i] = num*i;
    }
}

// gets an ammount of seconds and return an array with {hours, minutes, seconds}
void timeSecondHour(int seconds, int time[]){
    time[0] = seconds/3600;
    seconds-=3600*time[0];
    time[1] = seconds/60;
    seconds-=60*time[1];
    time[2] = seconds;
}

// gets an array with {hours, minutes, seconds} and returns the ammounts of seconds passed
int timeHourSecond(int time[]){
    int seconds = 0;
    seconds+=time[2];
    seconds+=time[1]*60;
    seconds+=time[0]*3600;
    return seconds;
}

// shuffles the elements of an array, needs stdlib.h
void shuffle(int arr[], int size){
    srand(time(0));
    for (int i = 0; i < size; i++) {
        int j = rand() % size;
        int t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
}

// arr[0] <--> arr[size], arr[1] <--> arr[size-1], etc
void otherWayAround(int arr[], int size){
    int auxArr[size], i;
    for(i=0; i<size; i++){
        auxArr[i] = arr[i];
    }
    for(i=0; i<size; i++){
        arr[i] = auxArr[size-i-1];
    }
}

// makes one array equal to another one
void arr1EqualsArr2(int oldArr[], int newArr[], int size){
    int i;
    for(i=0; i<size; i++){
        newArr[i] = oldArr[i];
    }
}

// gets in a new array the old array without duplicates, [end] indicates the end of the array
void noRepeats(int oldArr[], int newArr[], int len, int end){
    int i, j, counter = 0, check;
    for(i=0; i<len && oldArr[i] != end; i++){  // goes through every element in oldArr[]
        check = 1;                      // oldArr[i] isnt in newArr[]
        for(j=0; j<counter; j++){       // goes through every element in newArr[] until k 
            if(oldArr[i] == newArr[j]){   
                check = 0;              // oldArr[i] is in newArr[]
                break;
            }
        }
        if(check == 1){
            newArr[counter] = oldArr[i];
            counter++;
        }
    }
    newArr[counter] = end;
}

// unites 2 arrays into newArr[], repeats numbers, [end] indicates the end of the array
void arrayUnion(int arr1[], int arr2[], int size1, int size2, int newArr[], int end){
    int i, j, iguales, count = 0;
    for(i=0; i<size1 && arr1[i] != end; i++){
        newArr[count] = arr1[i];
        count++;
    }
    for(i=0; i<size2; i++){
        iguales = 0;
        for(j=0; j<size1 && iguales == 0; j++){
            if(arr1[j] == arr2[i]){
                iguales = 1;
            }
        }
        if(iguales == 0){
            newArr[count] = arr2[i];
            count++;
        }
    }
    newArr[count] = end;
}

// arrChar[] contains 2 0-15 nums in each index, each one is passed out as an int to arr[]
void hexaToDecimal(unsigned char arrChar[], int arr[], int len){
    int i, count=0;
    for(i=0; i<len; i++){
        arr[count] = arrChar[i]%16;
        count++;
        arrChar[i]/=16;
        arr[count] = arrChar[i];
        count++;
    }
}

// ckecked

void showArr(int arr[], int size){
    int i;
    for(i=0; i<size-1; i++){
        printf("%d - ", arr[i]);
    }
    printf("%d\n", arr[size-1]);
}