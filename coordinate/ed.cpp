#ifndef _CRT_SECURE_NO_WARNINGS
#define _CRT_SECURE_NO_WARNINGS
#endif // _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include<math.h>
#include"header.h"
 long double a = 6378137;
 long double f = ((long double)1) / (long double)298.257222101;
 long double b = a - a * f;
 long double e = sqrt(1 -(b*b)/(a*a));
void geodetic_into_space(void)
{
	long double B_d, B_m, B_s;
	long double L_d, L_m, L_s;
	long double H=0;
	long double B, L;
	printf("Enter the L :");
	scanf("%lf %lf %lf", &L_d, &L_m, &L_s);
	printf("Enter the B : ");
	scanf("%lf %lf %lf", &B_d, &B_m, &B_s);
	printf("Enter the H : ");
	scanf("%lf", &H);
	B = (B_d+B_m/60.0+B_s/3600) /((long double) 360)*(2*PI);
	L = (L_d+L_m/60.0+L_s/3600) /((long double) 360)*(2*PI);
	printf("X=%lf\t", (N(B) + H)*cos(B)*cos(L));
	printf("Y=%lf\t", (N(B) + H)*cos(B)*sin(L));
	printf("Z=%lf\n", (N(B)*(1 - e * e) + H)*sin(B));
}
long double N(long double B)
{
	return a / sqrt(1 - e * e*sin(B)*sin(B));
}
void space_into_geodetic(long double X, long double Y, long double Z)
{
	long double B = 0; int tag = 0;
	long double L,H;
	L= atan(Y / X) / (2 * PI) * 360;
	if (L < 0)
		L +=(long double)180;
	long double B1 = atan(Z / sqrt(X*X + Y * Y));
	 while (fabs(B1 - B) >(long double) 0.00000000000000000000001){
		 if (tag)B1 = B;
		 tag = 1;
		B = atan((Z+N(B1)*e*e*sin(B1))/sqrt(X*X+Y*Y));
	}
	 H = sqrt(X*X + Y * Y) / cos(B) - N(B);
	 B = B / (2 * PI) * 360;
	 printf("（");
	 put_into_radian(L);
	 printf(",");
	 put_into_radian(B);
	 printf(",");
	 printf("%lf", H);
     printf("）\n");	 
	 getchar();
}
void put_into_radian(long double X)
{
	int hour = X;
	long double a = X - (long double)hour;
	int minute = a * 60;
	a *= (long double)60;
	long double second = a - minute;
	printf("%d°%d'%lf''", hour, minute, second*60);
}
void distance_compute(void)
{
	coordinate x1, x2;
	printf("Enter the coordinat of X1 : ");
	scanf("%lf %lf %lf",& (x1.x), &(x1.y), &(x1.z));
	printf("Enter the coordinat of X2 : ");
	scanf("%lf %lf %lf", &(x2.x), &(x2.y), &(x2.z));
	printf("The distance is %.6lf\n", sqrt((double)((x1.x - x2.x)*(x1.x - x2.x) + (x1.y - x2.y)*(x1.y - x2.y) + (x1.z - x2.z)*(x1.z - x2.z))));
}