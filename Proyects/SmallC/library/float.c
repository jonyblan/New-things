// turns a float into a less exact float, needs math.h
float redondeo(float num, int cantDecimales){
    return(floor( num * pow(10, cantDecimales) + 0.5) / pow(10, cantDecimales));
}

// requires an epsilon to be defined, being how close a number has to be to 0, to be considered 0
int isCero(float num){
    if(num>=0){
        if(EP>num){
            return 1;
        }
    }
    else if(EP>-num){
        return 1;
    }
    return 0;
}

// checks the stdv out of the elements of an array
float standartDeviation(int arr[], int len){
    int i;
    float sumMedian = 0, median = 0;
    for(i=0; i<len; i++){
        median+=arr[i];
    }
    median/=len;
    for(i=0; i<len; i++){
        sumMedian += ((arr[i]-median)*(arr[i]-median));
    }
    sumMedian/=len;
    sumMedian = sqrt(sumMedian);
    return sumMedian;
}