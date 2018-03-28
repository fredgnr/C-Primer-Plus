#ifndef HEAD
#define HEAD
#define Hand_num 5
#define rank_num 13
#define suit_num 4
typedef struct hand_card {
	int rank;
	char suit;
} hand_card;
//the name of the file to be created
extern const char *str = "a.txt";
//the range of the suits
extern char All_suit[suit_num] = { 'a', 'b', 'c', 'd' };
//the range of the ranks(all in int)
extern int All_rank[rank_num] = { 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 };
//an array to record if a certain card has been put into hand
extern bool card_exit[rank_num][suit_num] = {};
//judgement in the qsort
int order(void *a, void *b);
//create a pack of cards and  return the starting address of the card(using malloc)
hand_card *Create_Cards(void);
//put the two packs of cards inot a.txt
void put_out(hand_card *h1, hand_card *h2);
//to judge if one pack of cards is straight
bool is_straight(hand_card *hand);
//when both of the packs are straight,compare the size of them
void compare_straight(hand_card *h1, hand_card *h2);
//to judge if one pack of cards is three with two
bool is_Three_with_Two(hand_card *hand);
//if both of the packs are three with two,compare the size of them
void compare_twt(hand_card *h1, hand_card *h2);
//put a center string into a.txt
void put_into_txt(char *aa);
#endif