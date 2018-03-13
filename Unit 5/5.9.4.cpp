#include<iostream>
#include<cstdio>
#include<array>
int main()
{
	using namespace std;
	long double x1 = 0.1, x2 = 0.05;
	long double  money1 = 100, money2 = 100;
	int years;
	for(years=0;((money1+=(1+x1)*100)>(money2*=(1+x2)));years++);
	cout<<"Years : "<<years<<endl;
	cout<<"Daphne : "<<money1<<endl;
	cout<<"Cole : "<<money2<<endl;
	return 0;
}