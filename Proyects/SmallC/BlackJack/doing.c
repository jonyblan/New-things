#include <stdlib.h>
#include <stdio.h>
#include <ctype.h>
#include <malloc.h>
#include <math.h>
#include <time.h>
#include <unistd.h>
#include "getnum.h"

#define CANT_CARTAS 52
#define PALOS 4
#define CANT_MAZOS 1
#define MAX 21
#define SHUFFLE 0 // 0 shuffles between rounds, 1 does not
#define CANT_PLAYERS 2
#define MAX_GAMBLE_ROUND 1000
#define CARTAS_PALO (CANT_CARTAS/PALOS)
#define RULES_COMPUTER 0
/* Rules Computer:

0: Hits until 17
*/

typedef struct{
	int num;
	int palo;
	int aparecio;
	int showWorld;
} card;

typedef struct{
	card cartas[CANT_CARTAS];
} mazo;

typedef struct{
	int cantCards;
	int points;
	int hasAce;
	int *numMazo;
    int *numCarta;
} hand;

typedef struct{
	hand handPlayer;
    int numPlayer;
	int busted;
	int machine;
} player;

void enters(int cant){
	while(cant--){
		printf("\n");
	}
}

int intInRange(int *var, int min, int max, char *msg){
    *var=min-1;
    while((*var)<min || (*var)>max){
        *var = getint(msg);
    }
}

char retornaPalo(card carta){
	int doAbort=0;
    switch(carta.palo){
		case 0:
			return 'D';
			break;
		case 1:
			return 'C';
			break;
		case 2:
			return 'P';
			break;
		case 3:
			return 'T';
			break;
		default:
			printf("\n\nERROR RETORNA_PALO\n\n");
			doAbort=1;
            break;
	}	
    if(doAbort){
        abort();
    }
    return 'E';
}

void iniMazos(mazo *mazos){
	int i, j;
    for(i=0; i<CANT_MAZOS; i++){
        for(j=0; j<CANT_CARTAS; j++){
            mazos[i].cartas[j].num=j%CARTAS_PALO;
            mazos[i].cartas[j].palo=j/CARTAS_PALO;
            mazos[i].cartas[j].aparecio=0;
            mazos[i].cartas[j].showWorld=0;
        }
    }
}

void iniPlayers(player *players){
	int i;
	for(i=0; i<CANT_PLAYERS; i++){
		players[i].busted=0;
	}
	players[0].machine=1;
    players[0].numPlayer=0;
	players[1].machine=0;	
    players[1].numPlayer=1;	
}

void startGame(mazo *mazos, player *players){
	iniMazos(mazos);
    iniPlayers(players);
}

void noBusts(player *players){
	int i;
	for(i=0; i<CANT_PLAYERS; i++){
		players[i].busted=0;
	}
}

void defaultVariables(int *pointsRound, int *continueRound){
	*pointsRound = -1;
	*continueRound = 1;
}

void defaultHands(player players[]){
	int i;
    for(i=0; i<CANT_PLAYERS; i++){
        players[i].handPlayer.numCarta=NULL;
        players[i].handPlayer.numMazo=NULL;
        players[i].handPlayer.cantCards=0;
        players[i].handPlayer.hasAce=0;
        players[i].handPlayer.points=0;
    }
}

void defaultEverything(player players[], int *continueRound, int *pointsRound){
	noBusts(players);
	defaultVariables(pointsRound, continueRound);
	defaultHands(players);
}

void newCardMazos(mazo *mazos, int randNum){
    mazos[randNum/(CANT_MAZOS*CANT_CARTAS)].cartas[randNum%CANT_CARTAS].aparecio=1;
    mazos[randNum/(CANT_MAZOS*CANT_CARTAS)].cartas[randNum%CANT_CARTAS].showWorld=1;
}

void newCardPlayer(player *players, mazo *mazos, int randNum, int numPlayer){
    int cantCartasPlayer = players[numPlayer].handPlayer.cantCards;
    players[numPlayer].handPlayer.numCarta = realloc(players[numPlayer].handPlayer.numCarta, (cantCartasPlayer+1)*sizeof(int));
    players[numPlayer].handPlayer.numMazo = realloc(players[numPlayer].handPlayer.numMazo, (cantCartasPlayer+1)*sizeof(int));
    players[numPlayer].handPlayer.cantCards++;
    players[numPlayer].handPlayer.hasAce=(!(randNum%CANT_CARTAS));
    players[numPlayer].handPlayer.numCarta[cantCartasPlayer]=(randNum%CANT_CARTAS);
    players[numPlayer].handPlayer.numMazo[cantCartasPlayer]=(randNum/CANT_CARTAS);
    players[numPlayer].handPlayer.points+=randNum%CARTAS_PALO;
}

void dealCard(mazo *mazos, player *players, int numPlayer){
	int randNum = rand()%(CANT_MAZOS*CANT_CARTAS);
    if(!(mazos[randNum/CANT_CARTAS].cartas[randNum%CANT_CARTAS].aparecio)){
        newCardMazos(mazos, randNum);
        newCardPlayer(players, mazos, randNum, numPlayer);
    }
}

void dealCardsRound(mazo *mazos, player *players){
	
}

void gamble(int *pointsRound){
    intInRange(pointsRound, 0, MAX_GAMBLE_ROUND,"How much would you like to gamble this round?\n" );
}

void playerStart(int *pointsRound){
	gamble(pointsRound);
}

void startRound(int *continueRound, int *pointsRound, mazo *mazos, player *players){
	defaultEverything(players, continueRound, pointsRound);
	dealCardsRound(mazos, players);
	playerStart(pointsRound);
}

void showPlayer(player *players, int numPlayer){
	
}

void showGame(player *players){
	int i;
	for(i=0; i<CANT_PLAYERS; i++){
		showPlayer(players, i);
	}
}

void wantPlayer(int *playerWant){
    *playerWant=-1;
    intInRange(playerWant, 0, 2, "Que desea hacer?\n0: stay\t1:hit\n");
}

void playerInput(int *continueRound, int *playerWant){
    wantPlayer(playerWant);
    if(!(*playerWant)){
        *continueRound=0;
    }
}

void analizeOption(int *continueRound, int playerWant, player players[], mazo mazos[]){
    int doAbort=0;
    switch (playerWant){
    case 0:
        *continueRound=0;
        break;
    
    case 1:
        dealCard(mazos, players, 1);
        break;

    default:
        printf("ERROR ANALIZE OPTION\n");
        doAbort=1;
        break;
    }
    if(doAbort){
        abort();
    }
}

void playerTurn(int *continueRound, int playerWant, player players[], mazo mazos[]){
	analizeOption(continueRound, playerWant, players, mazos);
}

void computerPlayZero(){

}

void computerTurn(){
    int doAbort=0;
    switch (RULES_COMPUTER){
    case 0:
        computerPlayZero();
        break;
    
    default:
        printf("ERROR COMPUTER TURN");
        doAbort=1;
        break;
    }
    if(doAbort){
        abort();
    }
}

void analize(int *continueRound, int playerWant, player players[], mazo mazos[]){
    if(!(*continueRound)){
        return ;
    }
    playerTurn(continueRound, playerWant, players, mazos);
    computerTurn();
}

void endRound(int *continueGame){
	intInRange(continueGame, 0, 1, "Desea jugar otra ronda? (0/1)\n");
}

void endGame(player players[], int *continueRound, int *pointsRound){
	defaultEverything(players, continueRound, pointsRound);
}

void checksBefore(player players[], mazo mazos[]){
    enters(0);
    printf("Before:\n");
    printf("%d\t-\t", mazos[0].cartas[0].num);
    printf("%d\t-\t", mazos[0].cartas[0].palo);
    enters(3);
}

void checksAfter(player players[], mazo mazos[]){
    enters(2);
    printf("After:\n");
    printf("%d\t-\t", players[1].handPlayer.numCarta[0]);
    printf("%d\t-\t", mazos[0].cartas[players[1].handPlayer.numCarta[0]].num);
    printf("%d\t-\t", mazos[0].cartas[players[1].handPlayer.numCarta[0]].palo);
    enters(1);
}

// los numeros van del 0-12, aunque se muestran del 1-13, 1 es as
// errores usando hand hands[CANT_PLAYERS] y players[numPlayer].hand en vez de players[numPlayer].handPlayer
int main(){
	srand(time(NULL));
	mazo mazos[CANT_MAZOS];
	player players[CANT_PLAYERS];
	int continueGame=1, continueRound=1, points=0, pointsRound=0, playerWant;
	startGame(mazos, players);
    checksBefore(players, mazos);
	while(continueGame){
		startRound(&continueRound, &pointsRound, mazos, players);
		while(continueRound){
			showGame(players);
			playerInput(&continueRound, &playerWant);
			analize(&continueRound, playerWant, players, mazos);
		}
		endRound(&continueGame);
	}
    checksAfter(players, mazos);
	endGame(players, &continueRound, &pointsRound);
}