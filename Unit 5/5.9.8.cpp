#include<cstring>
#include<iostream>
using namespace std;
int main()
{
	const char *t_word = "done";
	int num = -1;
	char word[100];
	do {
		num++;
		cin.get(word, 100).get();
	} while (strcmp(word, t_word) != 0);
	cout << num<<endl;
	return 0;
}