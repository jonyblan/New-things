#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#define FILES 7
#define COLUMNS 7
#define CANT_BOMBS 7

int countNumsArroundOverTen(int board[FILES][COLUMNS], int num, int file, int col){
    int count = 0, i, j;
    for(i=-1; i<2; i++){
        for(j=-1; j<2; j++){
            if((board[file+i][col+j]/10 == num) && (file+i < FILES) && (file+i >= 0) && (col+j<COLUMNS) && (col+j>=0)){
                count++;
            }
        }
    }
    return (count);
}

void iniProbs(int probabilities[FILES][COLUMNS], int board[FILES][COLUMNS]){
    int i, j;
    for(i=0; i<FILES; i++){
        for(j=0; j<COLUMNS; j++){
            if(countNumsArroundOverTen(board, 1, i, j) == 9){
                probabilities[i][j] = -1;
                printf("Probabilities: %d %d\n", i, j);
            }
        }
    }
}

void computerMove(int board[FILES][COLUMNS]){
    int probabilities[FILES][COLUMNS];
    iniProbs(probabilities, board);
}