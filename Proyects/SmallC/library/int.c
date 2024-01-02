// recieves a binary number and returns it in decimal (the type is still decimal)
int binaryDecimal(int binary){
    int aux2=1;
    int decimal = 0;
    while(binary>=1){
        decimal = decimal + (binary%10)*aux2;
        aux2=aux2*2;
        binary = binary/10;
    }
    return decimal;
}

// recieves a decimal number and returns it in binary (the type is still decimal)
int decimalBinary(int decimal){
    int numNum = 0, pasada=1;
    while(decimal>0){
        int num=decimal%2;
        numNum = numNum+num*pasada;
        decimal=decimal-num;
        decimal = decimal/2;
        pasada=pasada*10;
    }
    return numNum;
}

// recieves a decimal number and returns its factorial
int factorial(int num){
    int factorial=1;
    while(num>0){
        factorial=factorial*num;
        num--;
    }
    return factorial;
}

// Checked

int dcm(int num1, int num2){
    int resto, i, maxDivisor = 1;
    for(i=2; i<=num1; i++){
        resto = num1/i;
        if(resto*i == num1){
            resto = num2/i;
            if(resto*i == num2){
                maxDivisor = i;
            }
        }
    }
    return maxDivisor;
}

int numerosAmigos(int num1, int num2){
    int i, j, aux = num2;
    for(i=1; i<=num1/2; i++){
        if(num1%i == 0){
            aux-=i;
        }
    }
    if(aux == 0){
        aux = num1;
        for(i=1; i<=num2/2; i++){
            if(num2%i == 0){
                aux-=i;
            }
        }
        if(aux == 0){
            return 1;
        }
    }
    return 0;
}