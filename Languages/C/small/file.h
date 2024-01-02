typedef struct manageCDT * manageADT;

typedef struct elemType;


// starts the program with the minimun it needs to work, allocates memory and handles output
manageADT start();

// a menu to ask the user what it wants to do
// handles: 
int menu(int * pass);

// analizes the option that the user chose
void analizeOption(int pass, int option);

// last function before the program finishes, frees memory and handles output
void end(manageADT manage);