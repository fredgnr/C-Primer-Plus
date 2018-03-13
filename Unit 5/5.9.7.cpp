#include<iostream>
#include<string>
#include<array>
using namespace std;
typedef struct car {
	string name;
	long int year;
}car;
int main()
{
	car *x;
	int n;
	cout << "Enter the number of the cars : ";
	cin >> n;
	x = new car[n];
	for (int i = 0; i < n; i++) {
		cin.get();
		cout << "Car #"<<i<<" : " << endl
			<< "Please enter the make : ";
		getline(cin, x[i].name);
		cout << "Please enter the year make :";
		cin >> x[i].year;
	}
	cout << "Here is your collection : " << endl;
	for (int i = 0; i < n; i++) {
		cout << x[i].year << "  " << x[i].name << endl;
	}
	return 0;
}