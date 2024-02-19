void sortBubbleSort(int arr[], int size){
    int done = 0, i, aux;
    while(done!=1){
        done = 1;
        for(i = 0; i<size-1;i++){
            if(arr[i]>arr[i+1]){
                aux = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = aux;
                done = 0;
            }
        }
    }
}