<<<<<<< HEAD
typedef struct manageCDT * manageADT;

typedef struct elemType;


// starts the program with the minimun it needs to work, allocates memory and handles output
manageADT start();

// a menu to ask the user what it wants to do
int menu(int * pass);

// analizes the option that the user chose
void analizeOption(int pass, int option);

// handles errors
void error(char * msg);

// last function before the program finishes, frees memory and handles output
=======
typedef struct manageCDT * manageADT;

typedef struct elemType;


// starts the program with the minimun it needs to work, allocates memory and handles output
manageADT start();

// a menu to ask the user what it wants to do
int menu(int * pass);

// analizes the option that the user chose
void analizeOption(int pass, int option);

// handles errors
void error(char * msg);

// last function before the program finishes, frees memory and handles output
>>>>>>> 86ceaeeec2ad18d16e396390387907a48c2aabcd
void end(manageADT manage);