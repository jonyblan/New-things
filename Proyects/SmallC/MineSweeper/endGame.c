#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#define FILES 7
#define COLUMNS 7
#define CANT_BOMBS 7

void unlockBoard(int board[FILES][COLUMNS]){
    int i, j;
    for(i=0; i<FILES; i++){
        for(j=0; j<COLUMNS; j++){
            board[i][j] = board[i][j]%10;
        }
    }
}

void endGame(int board[FILES][COLUMNS], int points, time_t secondsStart, time_t secondsEnd){
    if(points == -1){
        printf("better luck next time\n");
    }
    else{
        printf("YOU WIN\n");
    }
    unlockBoard(board);
}