#include<iostream>
using namespace std;
double convert(double);
int main()
{
	double degree;
	cout << "Please enter the number of light years:";
	cin >> degree;
	cout << degree << " light years = " << convert(degree) << " astronomical units." << endl;
	return 0;
}
double convert(double degrees)
{
	return degrees*63240;
}