#include<string>
#include<iostream>
using namespace std;
int main()
{
	string t_word="done",word;
	int num = -1;
	do {
		num++;
		(cin>>word).get();
	} while (t_word != word);
	cout << num << endl;
	return 0;
}