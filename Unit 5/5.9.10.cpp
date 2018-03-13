#include<string>
#include<iostream>
using namespace std;
int main()
{
	int i;
	cin >> i;
	for (int a = 0; a < i; a++) {
		for (int b = 0; b < i; b++) {
			if (b < i - a-1)
				cout << " ";
			else
				cout << "*";
		}
		cout << endl;
	}
	return 0;
}