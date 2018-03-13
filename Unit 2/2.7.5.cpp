#include<iostream>
using namespace std;
double convert(double);
int main()
{
	double degree;
	cout << "Please enter a Celsius degree :";
	cin >> degree;
	cout << degree << " degrees Celsius is " << convert(degree) << " degrees Fahrenheit" << endl;
	return 0;
}
double convert(double degrees)
{
	return 1.8*degrees + 32;
}