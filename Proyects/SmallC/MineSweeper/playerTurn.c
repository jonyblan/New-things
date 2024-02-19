#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#define FILES 7
#define COLUMNS 7
#define CANT_BOMBS 7

void reveal(int board[FILES][COLUMNS], int file, int col, int guess){
    switch (guess){
    case 1:
        if(board[file][col] >= 10){
            board[file][col]-=10;
        }
        break;
    case 2:
        if(board[file][col] >= 10){
            board[file][col]+=10;
        }
        break;
    case -1:
        computerMove();
        break;
    default:
    printf("ERROR");
        break;
    }
    
}

void inputBox(int board[FILES][COLUMNS]){
    int file, col, guess = -2;
    file = getint("Ingrese la fila (1 - %d): ", FILES);
    col = getint("Ingrese la columna (1 - %d): ", COLUMNS);
    while((guess != 1) && (guess!= 2) && (guess != -1)){
        guess = getint("seguro o bomba? (1/2): ");
    }
    file--;
    col--;
    reveal(board, file, col, guess);
}

void playerTurn(int board[FILES][COLUMNS]){
    inputBox(board);
}