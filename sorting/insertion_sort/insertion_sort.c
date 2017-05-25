#include <stdio.h>

void swap(char* a, char* b);
void insertion_sort( char s[], int n );

int main() {
    char str[] = "Hello";

    int len = strlen( str );

    printf( "%d", len );

    insertion_sort( str, len );

    printf( str );

    return 0;
}

void swap( char* a, char* b ) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void insertion_sort( char s[], int n ) {
    int i, j;
    for ( i = 1; i < n; i++ ) {
        j = i;

        while ( ( j > 0 ) && ( s[j] < s[j-1] ) ) {
            swap( &s[j], &s[j-1] );
            j = j - i;
        }
    }
}


