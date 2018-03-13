#include<iostream>
#include<cstdio>
#include<array>
int main()
{
	using namespace std;
	array<long int,100>x;
	long long int i = 1; x[0] = 1;
	for (int n = 0; n < 99; n++)
		x[n + 1] = x[n] * ++i;
	for (int n = 1; n < 99; n++)
		printf("%ld\n",x[n]);
	return 0;
}