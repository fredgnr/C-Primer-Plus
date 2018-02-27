#include<iostream>
int main()
{
	using namespace std;
	long long  world_population, US_population;
	cout << "Enter the world's population: ";
	cin >>world_population;
	cout << "Enter the population of the US :";
	cin >> US_population;
	cout << "The population of the US is " <<(double) US_population /(double) world_population*100 << "% of the world population ." << endl;
	return 0;
}