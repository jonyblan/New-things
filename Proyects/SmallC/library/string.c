
// Prints str1 until stop appears, then stops printing and prints str2
void printSince(char *str1, char *str2, char stop){
    int i=0;
    while(str1[i]!='\0' && str1[i]!=stop){
        printf("%c", str1[i]);
        i++;
    }
    if(str1[i]!='\0'){
        int i=0;
        while(str2[i]!='\0'){
            printf("%c", str2[i]);
            i++;
        }
    }
    printf("\n");
}