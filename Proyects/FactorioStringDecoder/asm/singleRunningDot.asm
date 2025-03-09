RM
RS
US
RS 				; these 4 are to ensure that the screen and the screen's memory are clean
MOV G, 0 		; Check for when the program finished
MOV A, 1
MOV B, 1
MOV C, 16777215 ; (white in RGB)
MOV D, 16		; screen width + 1
MOV E, 9		; screen height + 1
LOOP: DRAW A, B, C
RS
US
RP A, B
INC A
CMP A, D
JNZ LOOP
INC B
CMP B, E
JZ DONE
MOV A, 1
JMP LOOP
DONE: MOV G, 1