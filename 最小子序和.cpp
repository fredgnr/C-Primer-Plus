#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
int minstr(int a[],int  left,int right);
int min(int a,int b,int c);
int main()
{
	int a[20];
	int n=0;
	printf("Enter the array : \n");
	while (n<20) {
		printf("Enter the %d number : ", n);
		scanf("%d", a + n++);
	}
	printf("The answer is %d\n", minstr(a, 0, 19));
	return 0;
}
int minstr(int a[], int left, int right)
{
	int mid = (left + right) / 2;
	int i;
	int thisleft, thisright,minleft,minright;
	int minrightstr, minleftstr;
	
	if (left = right) {
		if (a[left] < 0)
			return a[left];
		else return 0;
	}


	minrightstr = minstr(a, left, mid);
	minleftstr = minstr(a, mid + 1, right);
	
	minleft=thisleft = 0;
	for (i = mid; i >= left; i--) {
		thisleft += a[i];
		if (thisleft < minleft)
			minleft = thisleft;
	}

	minright = thisright = 0;
	for (i = mid + 1; i <= right; i++) {
		thisright += a[i];
		if (thisright < minright)
			minright = thisright;
	}

	return min(minright + minleft, minrightstr, minleftstr);
}
int min(int a, int b, int c)
{
	int min = a < b ? a : b;
	min = min < c ? min : c;
	return min;
}