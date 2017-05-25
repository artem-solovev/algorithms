#include <stdio.h>

void insertion_sort( int arr[], int n );
void print_array( int arr[], int n );

int main() {
    int str[] = {12, 11, 13, 5, 6, 324234, 23, 0, -1};
    int len = sizeof(str)/sizeof(str[0]);

    insertion_sort( str, len );
    print_array( str, len );

    return 0;
}

void insertion_sort( int arr[], int n ) {

    int i, key, j;

    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i-1;

        while ( j >= 0 && arr[j] > key ) {
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    }
}

void print_array( int arr[], int n ) {
    int i;
    for ( i=0; i < n; i++ ) {
        printf("%i ", arr[i]);
    }
    printf("\n");
}
