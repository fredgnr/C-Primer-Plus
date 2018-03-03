#include<string>
#include<iostream>
int main()
{
	using namespace std;
	struct {
		char first_name[20];
		string last_name;
		int age;
		char grade;
	}a;
	cout << "What is your first name ? ";
	cin.getline(a.first_name,19);
	cout << "What is your last name ? ";
	cin >> a.last_name;
	cout << "What letter grade do you deserve ? ";
	cin >> a.grade;
	a.grade += 1;
	cout << "What is your age ? ";
	cin >> a.age;
	cout << "Name : " << a.first_name << ", " << a.last_name<<endl;
	cout << "Grade : " << a.grade<<endl;
	cout << "Age : " << a.age<<endl;
	return 0;
}