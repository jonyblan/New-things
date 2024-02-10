#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#define FILES 7
#define COLUMNS 7
#define CANT_BOMBS 7

// cd /mnt/c/Users/Usuario/desktop/PI/extra/mineSweeper
// gcc -o play main.c checkPoints.c display.c playerTurn.c start.c getnum.c endGame.c computerMove.c

int main(){
    // -4: initial number. 0-8: face value. 9: bomb
    // 10+num to indicate being hidden. 20+num to indicate it's being checked
    int board[FILES][COLUMNS]; 
    int i, a, points = 0;
    time_t secondsStart, secondsEnd;
    secondsStart=time(NULL);
    start(board);
    while(points >= 0){
        display(board);
        playerTurn(board);
        points = checkPoints(board, points);
    }
    secondsEnd=time(NULL);
    endGame(board, points, secondsStart, secondsEnd);
    display(board);
    return 0;
}