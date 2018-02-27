#include<iostream>
int main()
{
	using namespace std;
	long int seconds;
	cout << "Enter the number of seconds : ";
	cin >> seconds;
	cout << seconds << " seconds = ";
	long int days, hours, minutes;
	days = seconds / (60 * 24*60);
	seconds -= days * 24 * 60*60;
	hours = seconds / (60*60);
	seconds -= hours * 60*60;
	minutes = seconds / 60;
	seconds %= 60;
	cout << days << " days, " << hours << " hours , " << minutes << " minutes, " << seconds << " seconds." << endl;
	return 0;
}