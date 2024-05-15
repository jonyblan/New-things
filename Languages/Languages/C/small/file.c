#include <stdio.h>
#include <stdlib.h>
#include "file.h"


#define CANT_OPTIONS 5 // should change this to change automatically as new features are addded

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

int handleErrorData(int code){
	if(code != 1){
		while (getchar() != '\n'){

		}
		printf("Incorrect data type\n");
		return 0;
	}
	return 1;
}

handleErrorInput(int ans, int max, int min){
	if(ans < min && ans > max){
		int cantOptions = max;
		printf("Please choose a number between 1 and %d\n", max);
		return 0;
	}
	return 1
}

int handleError(int ans, int code){
	int ret = 1;
	ret = ret && handleErrorData(code);
	ret = ret && handleErrorInput(ans, max, min)
	
	else 
	return ret;
}

int handleInput(void){
	int out, ans, code;
	do{
		out = 0;
		printf("Please choose what you want to do\n");
		showMenu();
		code = scanf("%d", &ans);
		out = out || handleErrorData(code);
		out = out || handleErrorInput(and, CANT_OPTIONS, 1);
	} while(!out);
	cls();
	return ans;
}

void error(char * msg){
	cls();
	puts("%s", msg);
	exit(1);
}

int menu(int * pass){ 
	int ans = handleInput();
	return ans;
}

elemType askData(){
	char * name;
	int score;
	puts("Please enter the name of the student:\n");
	scanf("%s", &name);
	puts("Please enter the score of the student:\n");
	scanf("%d", &score);
	handleErrorInput()
}

char * addStudent(){
	elemType data = askData();
}

char * analizeOption(int pass, int option){
	char * errormsg = "";
	switch (option){ // this can be done with an array of functions
	case 1:
		*pass = 0;
		break;
	case 2:
		errormsg = addStudent();
		break;
	case 3:
		errormsg = showStudents();
		break;
	case 4:
		errormsg = sortByName();
		break;
	case 5:
		errormsg = sortByScore();
		break;
	default:
		errormsg = "Error in handling input";
		break;
	}
	return errormsg;
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
		char * rta = analizeOption(pass, option);
		if(!strcmp("", rta)){
			error(rta);
		}
	}
	end(manage);
}