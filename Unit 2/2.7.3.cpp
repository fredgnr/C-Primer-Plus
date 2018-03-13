#include<iostream>
void print_one(void);
void print_two(void);
using namespace std;
int main()
{
    print_one();
	print_one();
	print_two();
	print_two();
	return 0;
}
void print_one(void)
{
	cout << "Three blind mouse" << endl;
}
void print_two(void)
{
	cout << "See how they run." << endl;
}