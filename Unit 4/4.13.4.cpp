#define _CRT_SECURE_NO_WARNINGS// warning the compiler
#include<cstring>
#include<iostream>
int main()
{
	using namespace std;
	char first_name[20], last_name[20];
	cout << "Enter your first name : ";
	cin.getline(first_name, 19);
	cout << "Enter your last name : ";
	cin.getline(last_name, 19);
	char combination[42];
	strcpy(combination,(const char *) first_name);
	strcat(combination, ", ");
	strcat(combination,(const char *) last_name);
	cout << "Here's the information in a single string : "
		<< combination << endl;
	return 0;
}