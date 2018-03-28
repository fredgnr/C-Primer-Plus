#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include<malloc.h>
#include<stdlib.h>
#include<time.h>
#include"header.h"
int main()
{
	int i, j;
	long int operation = 0, twt = 0, straight = 0;
	hand_card *h1, *h2;
	srand((unsigned int)time(NULL));
	while (1) {
		operation++;
		for (i = 0; i < rank_num; i++)
			for (j = 0; j < suit_num; j++)
				card_exit[i][j] = false;

		printf("h1:");
		h1 = Create_Cards();
		printf("h2:");
		h2 = Create_Cards();
		put_out(h1, h2);
		if (is_straight(h1) && is_straight(h2)) {
			straight++;//手牌已经完成排序
			put_into_txt((char *)"两副牌都是顺子\n");
			printf("两副牌都是顺子\n");
			compare_straight(h1, h2);
		}
		else {
			printf("两副牌不都是顺子\n");
			put_into_txt((char *)"两副牌不都是顺子\n");
		}
		if (is_Three_with_Two(h2) && is_Three_with_Two(h1)) {
			put_into_txt((char *)"两副牌都是三带二\n");
			printf("两副牌都是三带二\n");
			compare_twt(h1, h2);
			twt++;
		}
		else {
			printf("两副牌不都是三带二\n");
			put_into_txt((char *)"两副牌不都是三带二\n\n");
		}
		printf("Operation: %ld\n", operation);
		printf("Three_with_two: %ld\n", twt);
		printf("straight: %ld\n\n", straight);
		if (h1) free(h1);
		if (h2) free(h2);
	}
	return 0;
}
int order(const void *h1, const void *h2)//qsort 调用
{
	return ((hand_card *)h1)->rank - ((hand_card *)h2)->rank;
}
hand_card *Create_Cards(void)
{
	int i = 0;
	int rank, suit;
	hand_card * hand;
	hand = (hand_card *)malloc(Hand_num * sizeof(hand_card));
	while (i < Hand_num) {
		rank = rand() % rank_num;
		suit = rand() % suit_num;
		if (!card_exit[rank][suit]) {
			hand[i].rank = All_rank[rank];
			hand[i].suit = All_suit[suit];
			card_exit[rank][suit] = true;
			i++;
		}
	}
	qsort(hand, Hand_num, sizeof(hand_card), order);
	for (i = 0; i < Hand_num; i++) {
		if (hand[i].rank < 10)
			printf("%c", hand[i].rank + '1' - 1);
		else if (hand[i].rank == 10)
			printf("10");
		else if (hand[i].rank == 11) {
			printf("J");
		}
		else if (hand[i].rank == 12)
			printf("Q");
		else if (hand[i].rank == 13)
			printf("K");
		else
			printf("A");
		printf("%c ", hand[i].suit);
	}
	printf("\n");
	return hand;
}
void put_out(hand_card*h1, hand_card *h2)
{
	int i;
	FILE *fp = fopen(str, "a+");
	for (i = 0; i < Hand_num; i++) {
		if (h1[i].rank < 10)
			fprintf(fp, "%c", h1[i].rank + '1' - 1);
		else if (h1[i].rank == 10)
			fprintf(fp, "10");
		else if (h1[i].rank == 11)
			fprintf(fp, "J");
		else if (h1[i].rank == 12)
			fprintf(fp, "Q");
		else if (h1[i].rank == 13)
			fprintf(fp, "K");
		else
			fprintf(fp, "A");
		fprintf(fp, "%c ", h1[i].suit);
	}
	fprintf(fp, "\n");
	for (i = 0; i < Hand_num; i++) {
		if (h2[i].rank < 10)
			fprintf(fp, "%c", h2[i].rank + '1' - 1);
		else if (h2[i].rank == 10)
			fprintf(fp, "10");
		else if (h2[i].rank == 11) {
			fprintf(fp, "J");
		}
		else if (h2[i].rank == 12)
			fprintf(fp, "Q");
		else if (h2[i].rank == 13)
			fprintf(fp, "K");
		else
			fprintf(fp, "A");
		fprintf(fp, "%c ", h2[i].suit);
	}
	fprintf(fp, "\n");
	fclose(fp);
}
bool is_straight(hand_card *hand)
{
	int i, x, n;//n记录手牌中有多少张牌连续
	x = hand[0].rank;
	for (i = 1, n = 1; i < Hand_num; i++) {
		if (hand[i].rank == ++x)
			n++;
	}
	if (n == 5)
		return true;
	else
		return false;
}
void compare_straight(hand_card *h1, hand_card *h2)
{
	const char *words[] = {
		"is bigger than h2\n\n",
		"is the same as h2\n\n",
		"is smaller than h2\n\n"
	};
	printf("h1 ");
	put_into_txt((char *)"h1 ");
	if (h1->rank > h2->rank) {
		printf("%s", words[0]);
		put_into_txt((char *)words[0]);
	}
	else if (h1->rank == h2->rank) {
		printf("%s", words[1]);
		put_into_txt((char *)words[1]);
	}
	else {
		printf("%s", words[2]);
		put_into_txt((char *)words[2]);
	}
	printf("\n");
}
bool is_Three_with_Two(hand_card *hand)
{
	int ncards[rank_num] = { 0 };
	int i;
	for (i = 0; i < Hand_num; i++) {
		ncards[hand[i].rank - 2]++;
	}
	for (i = 0; i < rank_num; i++) {
		if (ncards[i] == 3)
			for (i = 0; i < rank_num; i++)
				if (ncards[i] == 2)
					return true;
	}
	return false;
}
void compare_twt(hand_card *h1, hand_card *h2)
{
	int Three1, Three2, Two1, Two2;
	int ncard1[rank_num] = { 0 }, ncard2[rank_num] = { 0 };
	int i;
	for (i = 0; i < Hand_num; i++) {
		ncard1[h1[i].rank - 2]++;
		ncard2[h2[i].rank - 2]++;
	}
	for (i = 0; i < rank_num; i++) {
		if (ncard1[i] == 3)
			Three1 = i + 2;
		else if (ncard1[i] == 2)
			Two1 = i + 2;
		if (ncard2[i] == 3)
			Three2 = i + 2;
		else if (ncard2[i] == 2)
			Two2 = i + 2;
	}
	if (Three1 > Three2) {
		printf("h1 is bigger than h2.\n");
		put_into_txt((char *)"h1 is bigger than h2.\n\n");
	}
	else if (Three1 < Three2) {
		printf("h1 is smaller than h2.\n");
		put_into_txt((char *)"h1 is smaller than h2.\n\n");
	}
	else {
		if (Two1 > Two2) {
			printf("h1 is bigger than h2.\n");
			put_into_txt((char *)"h1 is bigger than h2.\n\n");
		}
		else if (Two2 > Two1) {
			printf("h1 is smaller than h2.\n");
			put_into_txt((char *)"h1 is smaller than h2.\n\n");
		}
	}
}
void put_into_txt(char *aa)
{
	FILE *fp = fopen(str, "a+");
	fprintf(fp, aa);
	fclose(fp);
}
