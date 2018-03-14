#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include<malloc.h>
#include<time.h>
#include<stdlib.h>
int minstr(int a[],int x);
int min(int a,int b,int c);
int sort(void *a1, void *a2);
typedef struct num{
	int sum;
    int end;
}num;
int main()
{
	int a[20];
	int n = 0;
	srand((unsigned)time(NULL));
	/*for (; n < 20; n++) {
		a[n] = rand() % 100 - rand() % 100;
		printf("%d\n", a[n]);
	}*/  //这段是输入a[n]的区域，可自行替换。
	printf("The answer is %d\n", minstr(a, 20));
	return 0;
}
int sort(const void *a1,const void *a2)
{
	return ((num *)a1)->sum - ((num *)a2)->sum;
}
int minstr(int a[], int x)
{
	int n, thisnum=0;
	int min = 0;
	num * b = (num *)malloc(sizeof(num)*x);
	for (n = 0; n <x; n++) {
		thisnum += a[n];
		b[n].sum = thisnum;
		b[n].end = n;
	}
	
	qsort(b, x,sizeof(num), sort);
	for (n = 0; n < x - 1; n++) {
		if (b[n + 1].end > b[n].end) {
			min = b[n + 1].sum - b[n].sum;
			break;
		}
	}
	for (n=0; n < x - 1; n++) {
		if (b[n + 1].end > b[n].end) {
			thisnum = b[n + 1].sum - b[n].sum;
			if (thisnum < min)
			min = thisnum;
		}
	}
	free(b);
	return min;
}
int min(int a, int b, int c)
{
	int min = a < b ? a : b;
	min = min < c ? min : c;
	return min;
}