#include<iostream>
int main()
{
	using namespace std;
	cout << "Enter a length in inch : ___\b\b\b";
	int inch;
	cin >> inch;
	cout << inch / 12 << " feets " << inch % 12 << " inches " << endl;
	return 0;
}