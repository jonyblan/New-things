<<<<<<< HEAD
// makes a letter Uppercase
char lowerUpper(char char1){
    if (char1 <= 'z'){
        char1-='32';
    }
    return char1;
}

// makes a letter lowercase
char upperLower(char char1){
    if (char1 >= 'A'){
        char1+='32';
    }
    return char1;
}

// checks if an input is a digit, Checker
char isDigit(char input){
    if(input>='0' && input<='9'){
        return 1;
    }
    return 0;
}

// checks if an input is a letter, Checker
char isLetter(char input){
    if((input >= 'a' && input <='z') || (input >='A' && input <= 'Z')){
        return 1;
    }
    return 0;
=======
// makes a letter Uppercase
char lowerUpper(char char1){
    if (char1 <= 'z'){
        char1-='32';
    }
    return char1;
}

// makes a letter lowercase
char upperLower(char char1){
    if (char1 >= 'A'){
        char1+='32';
    }
    return char1;
}

// checks if an input is a digit, Checker
char isDigit(char input){
    if(input>='0' && input<='9'){
        return 1;
    }
    return 0;
}

// checks if an input is a letter, Checker
char isLetter(char input){
    if((input >= 'a' && input <='z') || (input >='A' && input <= 'Z')){
        return 1;
    }
    return 0;
>>>>>>> 86ceaeeec2ad18d16e396390387907a48c2aabcd
}