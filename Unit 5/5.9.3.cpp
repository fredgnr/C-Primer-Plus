#include<iostream>
#include<cstdio>
#include<array>
int main()
{
	using namespace std;
	int a, sum = 0;
	do {
		cin >> a;
		sum += a;
		if (a == 0)
			break;
		cout << sum << endl;
	} while (1);
	return 0;
}