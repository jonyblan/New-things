<<<<<<< HEAD
/*
Execute:
    cd /mnt/c/Users/Usuario/desktop/PI/TPS
    gcc [name].c -o [nameNewFile]
    -lm: math.h

Basic Program:
    #include <stdio.h>
    int main(void){
        int num, a = 9, b = 2;
        div = a/(double)b;
        scanf("%d", &num);
        char char1 = getchar();
        printf("%d - %c - %d\n", num, char1, div);
        return 0;
    }

%:
    - d: decimal    ✓
    - f: float      ✓
    - c: char       ✓
    - i: int
    - o: octal
    - u: unsigned int
    - x: hexa
    - s: string
    - e: double (exponential)
    - g: double (chooses between f and e)

dataTypes:
    Type	                Size (bytes)	                     Format Specifier
    int	                    at least 2, usually 4	             %d, %i
    char	                1	                                 %c
    float	                4	                                 %f
    double	                8	                                 %lf
    short int	            2 usually	                         %hd
    unsigned int            at least 2, usually 4	             %u
    long int	            at least 4, usually 8	             %ld, %li
    long long int	        at least 8	                         %lld, %lli
    unsigned long int	    at least 4	                         %lu
    unsigned long long int	at least 8	                         %llu
    signed char           	1	                                 %c
    unsigned char	        1	                                 %c
    long double	            at least 10, usually 12 or 16	     %Lf

\:
    - n: new line   ✓
    - t: tab        ✓

Const: 
    #define AGE_MAYORITY 18l (could be a long value)    ✓
    const num = 1; (cant be changed)
    enum week {Monday = 0, Tuesday, Wednesday}; --> Wednesday = 2
    enum week day;
    day = Tuesday; --> day = 1
    typedef enum {False = 0, True} bool; [typedef enum {data} newName]

int x = 2; --> type, name, left value (dir memory), right value (value)

Bit Manipulation (int only):
    - ~: bit level complement [(~01010 = 10101) (~10 = -11)]
    - <<: shifts to the left (bigger number) [110<<2 = 110000]
    - >>: shifts to the right (smaller number) [110>>2 = 1]
    - &: bit level and [(101) & (100) = (001)]
    - |: bit level or
    - ^: bit level xor

Extra facts:
    - ++x: x = 1 --> y = x++ --> y = 1, x = 2
    - x++: x = 1 --> y = ++x --> y = 2, x = 2

=======
/*
Execute:
    cd /mnt/c/Users/Usuario/desktop/PI/TPS
    gcc [name].c -o [nameNewFile]
    -lm: math.h

Basic Program:
    #include <stdio.h>
    int main(void){
        int num, a = 9, b = 2;
        div = a/(double)b;
        scanf("%d", &num);
        char char1 = getchar();
        printf("%d - %c - %d\n", num, char1, div);
        return 0;
    }

%:
    - d: decimal    ✓
    - f: float      ✓
    - c: char       ✓
    - i: int
    - o: octal
    - u: unsigned int
    - x: hexa
    - s: string
    - e: double (exponential)
    - g: double (chooses between f and e)

dataTypes:
    Type	                Size (bytes)	                     Format Specifier
    int	                    at least 2, usually 4	             %d, %i
    char	                1	                                 %c
    float	                4	                                 %f
    double	                8	                                 %lf
    short int	            2 usually	                         %hd
    unsigned int            at least 2, usually 4	             %u
    long int	            at least 4, usually 8	             %ld, %li
    long long int	        at least 8	                         %lld, %lli
    unsigned long int	    at least 4	                         %lu
    unsigned long long int	at least 8	                         %llu
    signed char           	1	                                 %c
    unsigned char	        1	                                 %c
    long double	            at least 10, usually 12 or 16	     %Lf

\:
    - n: new line   ✓
    - t: tab        ✓

Const: 
    #define AGE_MAYORITY 18l (could be a long value)    ✓
    const num = 1; (cant be changed)
    enum week {Monday = 0, Tuesday, Wednesday}; --> Wednesday = 2
    enum week day;
    day = Tuesday; --> day = 1
    typedef enum {False = 0, True} bool; [typedef enum {data} newName]

int x = 2; --> type, name, left value (dir memory), right value (value)

Bit Manipulation (int only):
    - ~: bit level complement [(~01010 = 10101) (~10 = -11)]
    - <<: shifts to the left (bigger number) [110<<2 = 110000]
    - >>: shifts to the right (smaller number) [110>>2 = 1]
    - &: bit level and [(101) & (100) = (001)]
    - |: bit level or
    - ^: bit level xor

Extra facts:
    - ++x: x = 1 --> y = x++ --> y = 1, x = 2
    - x++: x = 1 --> y = ++x --> y = 2, x = 2

>>>>>>> 86ceaeeec2ad18d16e396390387907a48c2aabcd
*/