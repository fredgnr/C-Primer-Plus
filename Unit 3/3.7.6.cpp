#include<iostream>
int main()
{
	using namespace std;
	cout << "command: u-gallon/mile  e-kg per 100-kilimeter" << endl<<"Enter the commands : ";
	char command;
	cin >> command;
	if (command == 'u' || command == 'u' + 'a' - 'A') {
		double miles, gallons;
		cout << "Enter the miles : ";
		cin >> miles;
		cout << "Enter the gallons : ";
		cin >> gallons;
		cout << "average oil comsumption : " << gallons / miles;

	}
	else if (command == 'e' || command == 'e' + 'a' - 'A') {
		double oil, distance;
		cout << "Enter the distance : ";
		cin >> distance;
		cout << "Enter the consumption of oil : ";
		cin >> oil;
		cout << "average oil consumption : " << oil / distance * 100 << endl;
	}
	return 0;
}