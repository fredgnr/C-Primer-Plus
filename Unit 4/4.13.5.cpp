#define _CRT_SECURE_NO_WARNINGS// warning the compiler
#include<cstring>
#include<iostream>
#include<string>
struct Candybar {
	std::string brand;
	double weight;
	int calorie;
};
int main()
{
	using namespace std;
	Candybar snake{ "Mocha Munch",2.3,350 };
	cout << "Brand : " << snake.brand<<endl;
	cout << "Weight : " << snake.weight << endl;
	cout << "Calorie : " << snake.calorie << endl;
	return 0;
}