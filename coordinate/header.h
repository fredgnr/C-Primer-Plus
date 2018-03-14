#ifndef _HEAD
#define _HEAD
#define PI 3.1415926535898
void geodetic_into_space(void);
void space_into_geodetic(long double X, long double Y, long double Z);
void put_into_radian(long double X);
long double N(long double);
typedef struct {
	long double x;
	long double y;
	long double z;
}coordinate;
void distance_compute(void);
#endif