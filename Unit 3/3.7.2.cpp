#include<iostream>
int main()
{
	using namespace std;
	cout << "Enter your height :"<<"__ inch\b\b\b\b\b\b\b";
	float inches, foots;
	cin >> inches;
	cout << "__ foot\b\b\b\b\b\b\b";
	cin >> foots;
	cout << "Enter your weight";
	float weight;
	cin >> weight;
	cout << "IBM : " << (foots * 12 + inches) / weight<<endl;
	return 0;
}