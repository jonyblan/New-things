#include <stdio.h>
#include <stdlib.h>
#include "file.h"

#define CANT_OPTIONS 3 // should change this to change automatically as new features are addded



typedef struct elemType{
	char * name;
	int score;
} elemType;

// different sortings are a priority so an array will be used instead of a list 
// (so I can reuse this program to test different things)
typedef struct manageCDT{
	elemType * students; 	
	int cantStudents;
} manageCDT;

manageADT newManageADT(void){
	manageADT aux = calloc(1, sizeof(manageCDT));
	return aux;
}

manageADT getMemory(void){
	return newManageADT();
}

void cls(void) { // clears the console
	printf("\033[1J\033[H");
}

void duringProcess(void){
	cls();
	printf("Processing...");
}

void firstMessage(void){
	cls();
	printf("Welcome to the student manager.\n");
}

manageADT start(void){
	manageADT aux = getMemory();
	firstMessage();
	return aux;
}

void showMenu(void){
	puts("1: Exit\n");
	puts("2: Add a new student\n");
	puts("3: Show all students\n");
	puts("4: Sort by name");
	puts("5: Sort by score");
}

int handleError(int ans, int code){
	int ret = 1;
	if(code != 1){
		while (getchar() != '\n'){

		}
		printf("Incorrect data type\n");
		ret = 0;
	}
	else if(ans <= 0 && ans > CANT_OPTIONS){
		int cantOptions = CANT_OPTIONS;
		printf("Please choose a number between 1 and %d\n", cantOptions);
		ret = 0;
	}
	return ret;
}

int handleInput(void){
	int out = 0, ans, code;
	do{
		printf("Please choose what you want to do\n");
		showMenu();
		code = scanf("%d", &ans);
		
		out = handleError(ans, code);
	} while(!out);
	duringProcess();
	return ans;
}

int menu(int * pass){
	int ans = handleInput();
	if(ans == 1){
		*pass = 0;
	}
}

void analizeOption(int pass, int option){
	if(!pass){
		return ;
	}
}

void freeMem(manageADT manage){
	free(manage);
}

void lastMessage(void){
	cls();
	printf("Thanks for using the program\n");
}

void end(manageADT manage){
	freeMem(manage);
	lastMessage();
}

int main(){
	int pass = 1, option = -1;
	manageADT manage;
	manage = start();
	while(pass){
		option = menu(&pass);
		analizeOption(pass, option);
	}
	end(manage);
}