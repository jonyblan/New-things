void conseguirTiempo(int *h, int *m, int *s){
    *h=*s/3600;
    *m=(*s-*h*3600)/60;
    *s=*s-*m*60-*h*3600;
}  