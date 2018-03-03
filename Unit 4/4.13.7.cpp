#include<string>
#include<iostream>
struct Pie {
	std::string Brand;
	double diameter;
	double weight;
};
int main()
{
	using namespace std;
	Pie pies[3];
	int i = 0;
	for (; i < 3; i++) {
		cout << "Enter the Brand of the " << i << " pie . ";
		getline(cin, pies[i].Brand);
		cout << "Enter the diameter of the " << i << " pie . ";
		cin >> pies[i].diameter;
		cout << "Enter the Weight of the " << i << " pie . ";
		cin >> pies[i].weight;
	}
	for (i = 0; i < 3; i++) {
		cout << "The " << i << " pie : ";
		cout << pies[i].Brand << '\t' << pies[i].diameter << '\t' << pies[i].weight << '\t' << endl;
	}
	return 0;
}