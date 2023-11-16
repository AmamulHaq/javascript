#include <stdio.h>
#include <stdlib.h>

int main() {
    int x, i = 0, comp, c = 0, n = 0;
    char name[24];

    printf("Do you know how to play RPS? Enter your name: ");
    scanf("%s", name);

    while (i < 3) {
        printf("\nEnter 0 for rock \t Enter 1 for paper \t Enter 2 for scissors: ");
        scanf("%d", &x);

        if (x >= 0 && x <= 2) {
            comp = rand() % 3;

            if (x == comp) {
                printf("It's a draw!\n");
            } else if ((x == 0 && comp == 2) || (x == 1 && comp == 0) || (x == 2 && comp == 1)) {
                printf("%s wins this round!\n", name);
                n++;
            } else {
                printf("Computer wins this round!\n");
                c++;
            }

            i++;
        } else {
            printf("Invalid input. Please enter 0, 1, or 2.\n");
        }
    }

    if (c > n) {
        printf("Computer wins the game!\n");
    } else if (n > c) {
        printf("%s wins the game!\n", name);
    } else {
        printf("The game is a draw!\n");
    }

    return 0;
}
