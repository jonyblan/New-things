#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#define FILES 7
#define COLUMNS 7
#define CANT_BOMBS 7

int countNumsArround(int board[FILES][COLUMNS], int num, int file, int col){
    int count = 0, i, j;
    for(i=-1; i<2; i++){
        for(j=-1; j<2; j++){
            if((board[file+i][col+j] == num) && (file+i < FILES) && (file+i >= 0) && (col+j<COLUMNS) && (col+j>=0)){
                count++;
            }
        }
    }
    return (count+10);
}

void ini(int board[FILES][COLUMNS]){
    int i, j;
    for(i=0; i<FILES; i++){
        for(j=0; j<COLUMNS; j++){
            board[i][j] = -4;
        }
    }
}

void bombs(int bombPlaces[CANT_BOMBS]){
    int i, j, check;
    srand(time(0));
    for(i=0; i<CANT_BOMBS; i++){
        check = 1;
        while(check == 1){
            check = 0;
            bombPlaces[i] = rand()%(FILES*COLUMNS);
            for(j=0; j<CANT_BOMBS; j++){
                if((i!=j) && (bombPlaces[i] == bombPlaces[j])){
                    check = 1;
                }
            }
        }
    }
}

void placeBombs(int board[FILES][COLUMNS], int bombPlaces[CANT_BOMBS]){
    int file, col, i;
    for(i=0; i<CANT_BOMBS; i++){
        col = bombPlaces[i]%COLUMNS;
        bombPlaces[i]/=COLUMNS;
        file = bombPlaces[i];
        //printf("Bomb %d.%d\n", file+1, col+1);
        board[file][col] = 19;
    }
}

void placeNums(int board[FILES][COLUMNS]){
    int i, j, k, m, bombCounter;
    for(i=0; i<FILES; i++){
        for(j=0; j<COLUMNS; j++){
            if(board[i][j] != 19){
                board[i][j] = countNumsArround(board, 19, i, j);
            }
        }
    }
}

void start(int board[FILES][COLUMNS]){
    int bombPlaces[CANT_BOMBS];
    ini(board);
    bombs(bombPlaces);
    placeBombs(board, bombPlaces);
    placeNums(board);
}