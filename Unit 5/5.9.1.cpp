#include<iostream>
int main()
{
	using namespace std;
	int a, b;
	int product=0;
	cout << "Enter the value of A : ";
	cin >> a;
	cout << "Enter the value of B : ";
	cin >> b;
	for (int i = a; i <= b; i++) {
		product += i;
	}
	cout << "The answer is " << product<<endl;
	return 0;
}