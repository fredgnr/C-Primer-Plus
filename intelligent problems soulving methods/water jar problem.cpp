#include<stdio.h>
#include<stdlib.h>
#include<time.h>
typedef struct water {
	int g4;
	int g3;
} water;
int f_num[8] = { 0 };
void operation_one(water *water);
void operation_two(water *water);
void operation_three(water *water);
void operation_four(water *water);
void operation_five(water *water);
void operation_six(water *water);
void operation_seven(water *water);
void operation_eight(water *water);
int main()
{
	water *x;
	void(*f[])(water *water) = {
	operation_one,operation_two,operation_three,operation_four,
	operation_five,operation_six,operation_seven,operation_eight
	};
	const char *name[8] = {
		"operation_one","operation_two","operation_three","operation_four",
		"operation_five","operation_six","operation_seven","operation_eight"
	};
	int ff;
	x = new water;
	x->g3 = 0;x->g4 = 0;
	srand(time(NULL));
	do {
		ff = rand() % 8;
		f_num[ff]++;
		(*f[ff])(x);
	} while(x->g4!=2);
	for (ff = 0; ff < 8; ff++) {
		printf("%s\t%d\n",name[ff], f_num[ff]);
	}
	delete[] x;
	return 0;
}
void operation_one(water *water)
{
	if (water->g4 < 4) {
		water->g4 = 4;
		f_num[0]++;
	}
}
void operation_two(water *water)
{
	if (water->g3 < 3) {
		water->g3 = 3;
		f_num[1]++;
	}
}
void operation_three(water *water)
{
	if (water->g4 > 0) {
		water->g4 = 0;
		f_num[2]++;
	}
}
void operation_four(water *water)
{
	if (water->g3 > 0) {
		water->g3 = 0;
		f_num[3]++;
	}
}
void operation_five(water *water)
{
	int g3 = water->g3, g4 = water->g4;
	if ((water->g3 + water->g4) > 4) {
		water->g4 = 4;
		water->g3 = g3 - (4 - g4);
		f_num[4]++;
	}
}
void operation_six(water *water) 
{
	int g3 = water->g3, g4 = water->g4;
	if ((water->g3 + water->g4) > 3) {
		water->g3 = 3;
		water->g4 = g3 + g4 - 3;
		f_num[5]++;
	}
}
void operation_seven(water *water)
{
	if ((water->g3 + water->g4) < 4 && water->g3 > 0) {
		water->g4 = water->g3 + water->g4;
		water->g3 = 0;
		f_num[6]++;
	}
}
void operation_eight(water *water)
{
	if ((water->g3 + water->g4) < 3 && water->g4 > 0) {
		water->g3 = water->g3 + water->g4;
		water->g4 = 0;
		f_num[7]++;
	}
}