create table writer
(
  w_name varchar(20) primary key,
  w_address varchar(40) not null,
  w_tele varchar(20) not null,
  w_sex char(3) not null,
)


create table press
(
  p_name varchar(40) primary key,
  propriety varchar(20) not null,
  p_address varchar(30),
  p_tele VARCHAR(20)
);

create table reader
(
  id varchar(20) primary key,
  reader_name varchar(10) not null,
  book_num int default 0,
  reader_kind varchar(10) not null,
);

CREATE TABLE book
(
  b_id VARCHAR(20) PRIMARY key,
  w_name varchar(20) references writer(w_name) not null,
  p_date datetime not null,
  p_name varchar(40) references press(p_name) not null,
  b_name VARCHAR(30) not NULL,
  is_out bit DEFAULT 0,
)


CREATE TABLE borrow_table
(
  b_id VARCHAR(20) REFERENCES book(b_id),
  id varchar(20) REFERENCES reader(id),
  b_date DATETIME not NULL,
  CONSTRAINT c1 PRIMARY KEY(b_id,id),
)
INSERT INTO writer
VALUES('张炅焱', '景山区景山大道12号', '18156982657', '男');
INSERT INTO writer
VALUES ('张旭','合肥包河大道112号', '05665222769', '男');
INSERT INTO writer
VALUES('杨秀雨', '苏州光全街11号', '17346454458', '女');
INSERT INTO writer
VALUES('罗轻雨', '北京朝阳区552号', '15156665758', '女');
INSERT INTO writer
VALUES ('杨谦', '合肥金寨路112号', '05515688765', '男');
INSERT INTO writer
VALUES('吴诗轩', '乌鲁木齐克赛路12号', '15456689872', '女');
INSERT INTO writer
VALUES ('山崎师休', '京都田下道14号', '02154558623', '男');
INSERT INTO writer
VALUES('朴玉慧', '津南道李舜臣街15号', '', '女');
INSERT INTO writer
VALUES('江幽醴', '成都都江堰路55号', '18654865486', '女');
INSERT INTO writer
VALUES('古民越', '金华守仁路225号', '354865782', '男');
INSERT INTO writer
VALUES('张全儒', '黄山宏村路255号', '18156656784', '男');

INSERT press
VALUES('中华书局', '徐俊', '丰台区太平桥西里38号', '01063458911');
INSERT press
VALUES('北方GIS科技出版社', '张旭', '西城区西长安街33号', '01023584436');
INSERT press
VALUES('华夏文新出版社', '刘赋远', '徐汇区洛河路332号', '18358869864');
INSERT press  
VALUES('时代快讯出版社', '江悠羽', '西安光合古路12号', '0012354865');
INSERT press
VALUES ('广东财经出版社', '文广华', '广州中山大道22号', '15148795693');
INSERT press
VALUES ('武汉大学出版社', '何建庆 ', '洪山区卓刀泉路108号', '02787215593');
INSERT press
VALUES ('旅朝出版社', '金光庆', '平壤领袖大道33号', '');
INSERT press
VALUES('旅日出版社', '山下秀庆文', '东京银座F22楼12号', '0212586462');

INSERT INTO reader
VALUES ('82111245', '郑冠华', 0, '技术文学类');
INSERT INTO reader
VALUES('82111246', '王建', 0, '文学类');
INSERT INTO reader  
VALUES('82111247', '周淑雨',0 , '新闻文学类');
INSERT INTO reader 
VALUES ('82111248', '梁文君', 0, '技术文学类');
INSERT INTO reader 
VALUES ('82111249', '李嗣勋',0, '旅游类');
INSERT INTO reader
VALUES ('82111250', '钱儒', 0, '文学类');
INSERT INTO reader  
VALUES ('82111251', '朗文道', 0, '技术类');
INSERT INTO reader 
VALUES ('82111252', '江熠', 0, '新闻类');
INSERT INTO reader 
VALUES ('82111253', '罗赋', 0, '技术类');

INSERT INTO book 
VALUES ('0111234522','张炅焱',convert(datetime,'2028-05-02'),'北方GIS科技出版社','GIS空间数学原理',0);
INSERT INTO book 
VALUES ('0111234987','张炅焱',convert(datetime,'2028-05-02'),'北方GIS科技出版社','GIS空间数学原理',0);
INSERT INTO book
VALUES ('0111234523','张炅焱',convert(datetime,'2027-03-04'),'北方GIS科技出版社','GIS编程基础（C++篇）',0);
INSERT INTO book
VALUES ('0111238978','张炅焱',convert(datetime,'2027-03-04'),'北方GIS科技出版社','GIS编程基础（C++篇）',0);
INSERT INTO book
VALUES ('0111234524','张炅焱',convert(datetime,'2026-05-30'),'北方GIS科技出版社','GIS编程基础（Python篇）',0);
INSERT INTO book
VALUES ('0187974524','张炅焱',convert(datetime,'2026-05-30'),'北方GIS科技出版社','GIS编程基础（Python篇）',0);
INSERT INTO book 
VALUES ('0111234525','张炅焱',convert(datetime,'2030-02-08'),'北方GIS科技出版社','GIS编程基础（Javascript篇）',0);
INSERT INTO book
VALUES ('0111234526','张炅焱',convert(datetime,'2029-12-03'),'中华书局','《汉书》考异研究',0);
INSERT INTO book
VALUES ('0111234527','张炅焱',convert(datetime,'2027-08-07'),'广东财经出版社','经典计量体系和数学基础',0);
INSERT INTO book 
VALUES ('0111234528','张旭',convert(datetime,'2028-07-22'),'北方GIS科技出版社','遥感矢量提取和空间数据库',0);
INSERT INTO book 
VALUES ('0111564428','张旭',convert(datetime,'2028-07-22'),'北方GIS科技出版社','遥感矢量提取和空间数据库',0);
INSERT INTO book
VALUES ('0111234529','张旭',convert(datetime,'2026-06-13'),'北方GIS科技出版社','地面平坦度的光谱分析',0);
INSERT INTO book
VALUES ('0111234530','杨秀雨',convert(datetime,'2032-05-05'),'中华书局','汉字演变史全史',0);
INSERT INTO book
VALUES ('0189489990','杨秀雨',convert(datetime,'2032-05-05'),'中华书局','汉字演变史全史',0);
INSERT INTO book 
VALUES ('0111234531','罗轻雨',convert(datetime,'2025-04-08'),'华夏文新出版社','生活与命运（全译）',0);
INSERT INTO book 
VALUES ('0111234564','罗轻雨',convert(datetime,'2025-04-08'),'华夏文新出版社','生活与命运（全译）',0);
INSERT INTO book 
VALUES ('0159849864','罗轻雨',convert(datetime,'2025-04-08'),'华夏文新出版社','生活与命运（全译）',0);
INSERT INTO book 
VALUES ('0111234532','罗轻雨',convert(datetime,'2028-04-12'),'华夏文新出版社','高原、生活、爱',0);
INSERT INTO book
VALUES ('0111234533','杨谦',convert(datetime,'2026-08-13'),'广东财经出版社','边缘经济理论通解',0);
INSERT INTO book 
VALUES ('0111234534','吴诗轩',convert(datetime,'2027-11-12'),'时代快讯出版社','77周年阅兵全纪',0);
INSERT INTO book 
VALUES ('0111234535','吴诗轩',convert(datetime,'2030-07-13'),'时代快讯出版社','新闻人员的素质和修养',0);
INSERT INTO book
VALUES ('0111234536','山崎师休',convert(datetime,'2028-09-23'),'旅日出版社','京都文化考据',0);
INSERT INTO book 
VALUES ('0111234537','山崎师休',convert(datetime,'2028-03-13'),'旅日出版社','畅游银座',0);
INSERT INTO book
VALUES ('0111234538','朴玉慧',convert(datetime,'2028-04-14'),'旅朝出版社','津南道历史沿革',0);
INSERT INTO book
VALUES ('0111235948','朴玉慧',convert(datetime,'2028-04-14'),'旅朝出版社','津南道历史沿革',0);
INSERT INTO book 
VALUES ('0111234539','朴玉慧',convert(datetime,'2028-02-15'),'武汉大学出版社','社会学概论（全国统一）',0);
INSERT INTO book 
VALUES ('0111234540','江幽醴',convert(datetime,'2028-07-24'),'华夏文新出版社','当代的人际变化',0);
INSERT INTO book 
VALUES ('0111234541','江幽醴',convert(datetime,'2028-08-21'),'华夏文新出版社','古秦记',0);
INSERT INTO book
VALUES ('0111234542','古民越',convert(datetime,'2028-09-16'),'时代快讯出版社','记者30年',0);
INSERT INTO book
VALUES ('0111897987','古民越',convert(datetime,'2028-09-16'),'时代快讯出版社','记者30年',0);
INSERT INTO book
VALUES ('0111234543','张全儒',convert(datetime,'2028-10-15'),'华夏文新出版社','各国社会简析',0);
INSERT INTO book
VALUES ('0146549883','张全儒',convert(datetime,'2028-10-15'),'华夏文新出版社','各国社会简析',0);
INSERT INTO book
VALUES ('0111234546','江幽醴',convert(datetime,'2028-11-13'),'时代快讯出版社','津南道历史沿革',0);
GO


CREATE PROCEDURE INSERT_BOOK
  @u_w_name VARCHAR(20),
  @u_p_date DATETIME,
  @u_p_name VARCHAR(40),
  @u_b_name VARCHAR(30)
AS
declare  @u_b_id VARCHAR(20);
SELECT @u_b_id= convert(varchar(20),(max(convert(bigint,b_id))+1))
FROM book;
INSERT into book
VALUES(@u_b_id, @u_w_name, @u_p_date, @u_p_name, @u_b_name,0);
GO


CREATE PROCEDURE SEARCH_BOOK
@s_bookname VARCHAR(30)='null',
@s_writer VARCHAR(20)='null' ,
@s_publisher VARCHAR(40)='null'
AS
SELECT *
FROM dbo.book
WHERE (b_name=@s_bookname OR @s_bookname='null')
AND (w_name=@s_writer OR @s_writer='null')
AND (p_name=@s_publisher OR @s_publisher='null');
GO


CREATE PROCEDURE BORROW_BOOK
@b_b_id varchar(20),
@b_id varchar(20)
AS
DECLARE @temp VARCHAR(20)
SELECT @temp=b_id FROM book WHERE b_id=@b_b_id AND is_out=0;
IF @temp is null
BEGIN
PRINT('failed')
RETURN
END
/*update book
set is_out+=1
WHERE b_id=@temp;*/
INSERT INTO borrow_table
VALUES (@b_b_id,@b_id,getdate());
/*update reader
set book_num+=1
WHERE id=@b_id;*/
GO

CREATE PROCEDURE INSERT_READER
@m_read_name varchar(20),
@m_kind varchar(10),
@m_num INT
as
DECLARE @id varchar(10);
SELECT @id=convert(varchar(20),(max(convert(bigint,id)+1)))
FROM reader
INSERT INTO reader
VALUES(@id,@m_read_name,@m_num,@m_kind)
GO 


CREATE PROCEDURE BORROW_WATCH
@id VARCHAR(20)
AS
SELECT book.b_id AS '图书码', book.b_name AS '书籍名称',p_name AS'出版社',p_date AS'出版日期',b_date AS'借出时间'
FROM borrow_table,book
WHERE borrow_table.id=@id AND borrow_table.b_id=book.b_id
GO

create view READER_VIEW
as 
SELECT reader_name as'读者姓名',reader.id as '借书号',book_num as' 同时借阅本数',reader_kind as '读者类型'
FROM reader
GO

CREATE VIEW ALL_BOOK
AS
select b_name as '书名',w_name as '作者',p_name as '出版社名称',p_date as '出版日期',
count(*) as '馆藏本数'
from book 
group by  b_name,w_name,p_name,p_date
GO

CREATE VIEW ALL_BORROW
AS
select book.b_name AS'书籍名称',book.b_id AS'书籍号',book.p_name AS'出版社名称',
book.p_date AS '出版日期',reader.reader_name as'借阅读者姓名',
reader.id AS'借阅读者读者证号',borrow_table.b_date as '借阅日期'
FROM book,reader,borrow_table
WHERE borrow_table.b_id=book.b_id AND reader.id=borrow_table.id
GO

CREATE PROCEDURE UPDATE_WRITE
@w_name varchar(20),
@w_address varchar(40),
@w_tele varchar(20),
@w_sex char(3)
As
update writer
set w_address=@w_address,
w_tele=@w_tele,
w_sex=@w_sex
WHERE w_name=@w_name

GO

CREATE PROCEDURE RETURN_BOOK
@id varchar(20),
@b_id varchar(20)
as
DECLARE @temp VARCHAR(20);
select @temp=b_id FROM borrow_table
WHERE id=@id AND b_id=@b_id;
if @temp is NULL
BEGIN
return;
end
DELETE FROM borrow_table 
WHERE b_id=@b_id AND id=@id;
GO

CREATE trigger update_change on borrow_table
after INSERT
AS
DECLARE @b_id VARCHAR(20),@id VARCHAR(20)
select @b_id=b_id, @id=id
from inserted;
update reader
set book_num+=1
WHERE id=@id;
update book
set is_out=1
WHERE b_id=@b_id;
GO

CREATE PROCEDURE BOOK_RETURN
@b_id VARCHAR(20),
@id VARCHAR(20)
AS
delete from borrow_table 
WHERE b_id=@b_id and id=@id;

GO

CREATE TRIGGER book_return_t ON borrow_table
after DELETE
as
declare @b_id varchar(20),@id VARCHAR(20);
select @b_id=id,@id=id from deleted;
update reader
set book_num-=1
WHERE id =@id;
update book
set is_out=0
WHERE b_id=@b_id;