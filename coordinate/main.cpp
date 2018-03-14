#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include"header.h"
int main()
{
	char command,ch;
	long double X, Y, Z;
	printf("s--space to geodetic\tg--geodetic to space\tc-compute the distance\te-exit\n");
	for (;;) {
		printf("Enter the command : ");
		while(ch=getchar())
			if (ch != '\n') {
				command = ch;
				break;
			}
		if (command == 's') {	
			printf("Enter your data in (X,Y,Z): \n");
			printf("Enter X : ");
			scanf("%lf", &X);
			printf("Enter Y : ");
			scanf("%lf", &Y);
			printf("Enter Z : ");
			scanf("%lf", &Z);
			space_into_geodetic(X, Y, Z);
		}
		else if (command == 'g') {
			printf("Enter your data in (B,L,H):\n");
			geodetic_into_space();
		}
		else if (command == 'c') {
			distance_compute();
		}
		else if (command == 'e') {
			return 0;
		}
	}
}