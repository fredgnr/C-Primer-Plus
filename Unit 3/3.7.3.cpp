#include<iostream>
int main()
{
	using namespace std;
	cout << "Enter a latitude in degrees , minutes ,seconds : "<< endl;
	cout << "First ,enter the degrees : ";
	double degrees, minutes, seconds;
	cin >> degrees;
	cout << "Second , enter the minutes of arc: ";
	cin >> minutes;
	cout << "Finally , enter the seconds of arc:";
	cin >> seconds;
	cout << degrees << " degrees " << minutes << " minutes " << seconds << " seconds = "
		<< degrees + minutes / 60 + seconds / 3600 << " degrees \n";
	return 0;
}