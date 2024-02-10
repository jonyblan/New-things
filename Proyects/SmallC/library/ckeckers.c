// checks if an input is a digit
char isDigit(char input){
    if(input>='0' && input<='9'){
        return 1;
    }
    return 0;
}

// checks if an input is a letter
char isLetter(char input){
    if((input >= 'a' && input <='z') || (input >='A' && input <= 'Z')){
        return 1;
    }
    return 0;
}