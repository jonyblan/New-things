<<<<<<< HEAD
#include <stdio.h>
#include <math.h>
// returns the higher number between 2
int higher2(int num1, int num2){
    if(num1 > num2){
        return num1;
    }
    return num2;
}

// returns the lower number between 2
int lower2(int num1, int num2){
    if(num1 > num2){
        return num2;
    }
    return num1;
}

// returns the higher number between 3
int higher3(int num1, int num2, int num3){
    if(num1 > num2){
        if(num1 > num2){
            return num1;
        }
        return num2;
    }
    if(num2 > num3){
        return num2;
    }
    return num3;
}

// returns the lower number between 3
int lower3(int num1, int num2, int num3){
    if(num1 < num2){
        if(num1 < num2){
            return num1;
        }
        return num2;
    }
    if(num2 < num3){
        return num2;
    }
    return num3;
}

// returns eulers number with an exactitud of 18 decimal places
long double eulersNum(){
    int exactitud = 19 , i;
    long double e = 1, divisor=1;
    for(i = 1;i<=exactitud;i++){
        divisor*=i;
        e+=1/divisor;
    }
    return e;
}

// needs all sides as input, needs math.h, done up to 3 sides, checked up to 3 sides, NC
double area(int sides[], int cantSides){
    int perim, semiPerim;
    switch (cantSides)
    {
    case 3:
        semiPerim = (sides[0]+sides[1]+sides[2])/2;
        printf("%d\n", semiPerim);
        return (sqrt(semiPerim*(semiPerim-sides[0])*(semiPerim-sides[1])*(semiPerim-sides[2])));
        break;
    
    default:
        break;
    }
}

// checked

// gets an ammount of seconds and return an array with {hours, minutes, seconds}
void timeSecondHour(int seconds){
    int time[3];
    time[0] = seconds%3600;
    seconds-=3600*time[0];
    time[1] = seconds%60;
    seconds-=60*time[1];
    time[2] = seconds;
    return time;
}

// gets an ammount of hours, minutes and seconds and returns the seconds passed
int timeHourSecond(int hours, int minutes, int seconds){
    seconds+=minutes*60;
    seconds+=hours*3600;
    return seconds;
=======
#include <stdio.h>
#include <math.h>
// returns the higher number between 2
int higher2(int num1, int num2){
    if(num1 > num2){
        return num1;
    }
    return num2;
}

// returns the lower number between 2
int lower2(int num1, int num2){
    if(num1 > num2){
        return num2;
    }
    return num1;
}

// returns the higher number between 3
int higher3(int num1, int num2, int num3){
    if(num1 > num2){
        if(num1 > num2){
            return num1;
        }
        return num2;
    }
    if(num2 > num3){
        return num2;
    }
    return num3;
}

// returns the lower number between 3
int lower3(int num1, int num2, int num3){
    if(num1 < num2){
        if(num1 < num2){
            return num1;
        }
        return num2;
    }
    if(num2 < num3){
        return num2;
    }
    return num3;
}

// returns eulers number with an exactitud of 18 decimal places
long double eulersNum(){
    int exactitud = 19 , i;
    long double e = 1, divisor=1;
    for(i = 1;i<=exactitud;i++){
        divisor*=i;
        e+=1/divisor;
    }
    return e;
}

// needs all sides as input, needs math.h, done up to 3 sides, checked up to 3 sides, NC
double area(int sides[], int cantSides){
    int perim, semiPerim;
    switch (cantSides)
    {
    case 3:
        semiPerim = (sides[0]+sides[1]+sides[2])/2;
        printf("%d\n", semiPerim);
        return (sqrt(semiPerim*(semiPerim-sides[0])*(semiPerim-sides[1])*(semiPerim-sides[2])));
        break;
    
    default:
        break;
    }
}

// checked

// gets an ammount of seconds and return an array with {hours, minutes, seconds}
void timeSecondHour(int seconds){
    int time[3];
    time[0] = seconds%3600;
    seconds-=3600*time[0];
    time[1] = seconds%60;
    seconds-=60*time[1];
    time[2] = seconds;
    return time;
}

// gets an ammount of hours, minutes and seconds and returns the seconds passed
int timeHourSecond(int hours, int minutes, int seconds){
    seconds+=minutes*60;
    seconds+=hours*3600;
    return seconds;
>>>>>>> 86ceaeeec2ad18d16e396390387907a48c2aabcd
}