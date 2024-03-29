import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_17-数据类型" tabindex="-1"><a class="header-anchor" href="#_17-数据类型" aria-hidden="true">#</a> 17 -数据类型</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.MySQL为什么要提供数据类型?
如果没有数据类型, 那么MySQL就不知道需要分配多大的存储空间来存储你的数据
过大会浪费会造成资源浪费, 体积变大效率变低, 过小可能导致数据溢出不能完整的保存数据
所以MySQL提供数据类型的目的是为了让我们合理的分配存储空间, 降低数据库的体积
                             为了让我们合理的分配存储空间, 完整的保存数据
                             为了更好的对数据库进行优化

2.MySQL中有哪些数据类型?
- 整型类型/浮点类型/定点类型/字符类型/文本类型/枚举类型/集合类型/日期类型/布尔类型

3.整数类型 - 专门用来保存整数的
TINYINT	        1 字节	(-128，127)	(0，255)	小整数值
SMALLINT	    2 字节	(-32 768，32 767)	(0，65 535)	大整数值
MEDIUMINT	    3 字节	(-8 388 608，8 388 607)	(0，16 777 215)	大整数值
INT或INTEGER	4 字节	(-2 147 483 648，2 147 483 647)	(0，4 294 967 295)	大整数值
BIGINT	        8 字节	(-9,223,372,036,854,775,808，9 223 372 036 854 775 807)	(0，18 446 744 073 709 551 615)	极大整数值

注意点:
    - MySQL中的整型和其它编程语言的整型一样, 也区分有符号和无符号
        + 默认情况下整型就是有符号的
        + 我们可以在数据类型的后面加上 unsigned 来将数据类型变成无符号的
    - 在设计数据库的时候一定要合理的使用数据类型
        + 例如: 我们要保存一个人的年龄 (整数)
        +       我们应该使用TINYINT类型, 因为人最多活到255岁已经上天了, 所以使用最小的整型即可
        +       如果使用其它的整型, 就会造成资源浪费, 数据库体积变大, 效率变低...
    - 在保存数据的时候, 如果超出了当前数据类型的范围, 那么就会报错
    - 在设置整型的时候, 还可以设置整型数据将来显示的位宽
        + 例如: 现在设置将来显示整型的位宽是2, 现在存储的数据1, 那么将来查询出来的数据就会显示成 1;
        + 2020-2-3 -- 2020-02-03
        + 注意点: 如果存储的数据没有指定的位宽宽, 那么就会自动补空格或者0, 如果大于或者等于了指定的位宽, 那么毛都不做
create table person(
    id int,
    age tinyint
);
insert into person values (1, -128);
insert into person values (1, 127);
insert into person values (1, 128); #报错

create table person2(
    id int,
    age tinyint unsigned
);
insert into person values (1, -128); #报错
insert into person values (1, 127);
insert into person values (1, 128);

create table person3(
    id int,
    age tinyint(2) zerofill
);
insert into person values (1, 1);   #01
insert into person values (1, 12);  #12
insert into person values (1, 123); #123
--&gt;</span>
<span class="token comment">&lt;!--
2.浮点类型 - 专门用来保存小数的
FLOAT(m, d)	    4 字节	单精度
DOUBLE(m, d)	8 字节	双精度
m总位数, d小数位数

- float和double的区别
    + 占用存储空间大小不一样
    + 默认保留的小数位数不同
    + 保存数据的有效精度也不同

- 浮点类型特点
    + 和其它编程语言中一样, 浮点类型是不准确的
    + 所以在企业开发中千万不要使用浮点数来保存用户的准确(珍贵)信息(RMB)

示例一: 默认保留的小数位数不同
create table person(
    id int,
    weight FLOAT,
    height DOUBLE
);
insert into person values (1, 1.12345678901234567890, 1.12345678901234567890);
weight: 1.12346
height: 1.1234567890123457

示例二: 手动指定小数的总位数和小数部分的位数
create table person2(
    id int,
    weight FLOAT(10, 6),
    height DOUBLE(10, 6)
);
insert into person2 values (1, 1.12345678901234567890, 1.12345678901234567890);
weight: 1.123457
height: 1.123457

示例三: 保存数据的有效精度也不同
create table person3(
    id int,
    weight FLOAT(20, 19),
    height DOUBLE(20, 19)
);
insert into person3 values (1, 1.12345678901234567890, 1.12345678901234567890);
weight: 1.123456-8357467651000
height: 1.123456789012345-7000
--&gt;</span>
<span class="token comment">&lt;!--
3.定点类型 - 也是用于存储小数的
decimal(M, D)
m总位数, d小数位数
定点类型的本质: 是将数据分为两个部分来存储, 每个部分都是整数
                所以定点数不要滥用, 因为非常消耗资源

create table person4(
    id int,
    weight decimal(21, 20),
    height decimal(21, 20)
);
insert into person4 values (1, 1.12345678901234567890, 1.12345678901234567890);
weight: 1.12345678901234567890
height: 1.12345678901234567890
--&gt;</span>
<span class="token comment">&lt;!--
 4.字符类型 - 专门用来存储字符的
 CHAR(size)	    0-255  字节	    定长字符串
 VARCHAR(size)	0-65535字节	    变长字符串

 - char和varchar区别
    + 能够保存数据的容量不一样
    + char不会回收多余的字符,  要多少给多少
    + varchar会回收多余的字符, 用多少给多少
        + 例如: 通过    char(2)存储存储数据&#39;a&#39;, 存储的结果是&#39; a&#39;;
        + 例如: 通过 varchar(2)存储存储数据&#39;a&#39;, 存储的结果是&#39;a&#39;;

示例一:
create table person(
    id int,
    name1 char(2),
    name2 varchar(2)
);
insert into person values (1, &#39;a&#39;, &#39;b&#39;);
insert into person values (1, &#39;12&#39;, &#39;34&#39;);
insert into person values (1, &#39;abc&#39;, &#39;def&#39;); #只要超出申请的范围就会报错

示例二:
注意点: 由于是字符类型, 所以传递值建议用单引号&#39;&#39;
注意点: VARCHAR理论上可以存储65535个字符, 但是实际会随着当前数据库的字符集改变
create table person2(
    id int,
    name1 char(255),
    name2 varchar(255)
);
# 65535 / 3 = 21845, 由于utf8一个字符占用3个字节, 所以varchar在utf8的表中最多只能存储21845个字符
# 65535 / 2 = 32767, 由于gbk一个字符占用2个字节,所以varchar在gbk的表中最多只能存储32767个字符
create table person3(
    id int,
    name1 char(255),
    name2 varchar(65535)
)charset=gbk;
Column length too big for column &#39;name2&#39; (max = 21845); use BLOB or TEXT instead
Column length too big for column &#39;name2&#39; (max = 32767); use BLOB or TEXT instead
--&gt;</span>
<span class="token comment">&lt;!--
 5.大文本类型
 5.1.MySQL中每一行存储的数据是有大小限制的, 每一行最多只能存储65534个字节
 create table person(
    #name1 char(3),
    name2 varchar(21844) #在UTF8中相当于65535个字节
)charset=utf8;
# Row size too large. The maximum row size for the used table type, not counting BLOBs, is 65535. This includes storage overhead, check the manual. You have to change some columns to TEXT or BLOBs

 5.2.大文本类型
 TINYTEXT	0-255字节	        短文本字符串
 TEXT	    0-65535字节	        长文本数据
 MEDIUMTEXT	0-16777215字节	    中等长度文本数据
 LONGTEXT	0-4294967295字节    极大文本数据
 create table person2(
    name1 char(3),
    name2 TEXT #不会报错, 因为没有超出显示, 实际只占用10个字节
)charset=utf8;
注意点:
大文本类型在表中并不会实际占用所能保存的字节数, 而是利用10个字节引用了实际保存数据的地址
--&gt;</span>
<span class="token comment">&lt;!--
6.枚举类型
和其它编程语言一样, 如果某个字段的取值只能是几个固定值中的一个, 那么就可以使用枚举
enum(值1, 值2, ...);

create table person(
    id int,
    gender enum(&#39;男&#39;, &#39;女&#39;, &#39;妖&#39;)
);
insert into person values (1, &#39;火&#39;); #会报错
insert into person values (1, &#39;男&#39;); #不会报错
insert into person values (2, &#39;女&#39;); #不会报错
insert into person values (3, &#39;妖&#39;); #不会报错

注意点:
- MySQL中的枚举类型和其它的编程语言一样, 底层都是使用整型来实现的
    + 和其它编程语言不太一样的是, 其它编程语言的枚举都是从0开始的, 而MySQL的枚举是从1开始的
select gender+0 from person;
- 由于MySQL的枚举底层是使用整型实现的, 所以我们在赋值的时候除了可以赋值固定的几个值其中的一个意外
  我们还可以赋值对应的整数
insert into person values (4, 1); #不会报错
insert into person values (4, 4); #会报错
--&gt;</span>
<span class="token comment">&lt;!--
 7.集合类型
和编程开发中一样, 如果某个字段的取值只能是几个固定值中的几个, 那么就可以使用集合类型
set(值1, 值2, ...)

create table person(
    id int,
    hobby set(&#39;篮球&#39;,&#39;足球&#39;,&#39;高尔夫球&#39;,&#39;足浴&#39;)
);
insert into person values (1, &#39;篮球,足球,高尔夫球&#39;); #不会报错
insert into person values (1, &#39;橄榄球&#39;);  #会报错

insert into person values (2, &#39;篮球&#39;); #不会报错  1
insert into person values (3, &#39;足球&#39;); #不会报错  2
insert into person values (4, &#39;高尔夫球&#39;); #不会报错  4
insert into person values (5, &#39;足浴&#39;); #不会报错  8
注意点:
- MySQL的集合类型也是使用整型来实现的
select hobby+0 from person;
- MySQL的集合类型是按照2(n)的方式来实现的
2(0) = 1
2(1) = 2
2(2) = 4
2(3) = 8
--&gt;</span>
<span class="token comment">&lt;!--
8.布尔类型 - 专门用来保存真假的

create table person(
    id int,
    flag boolean
);
insert into person values (1, &#39;男&#39;); #会报错
insert into person values (1, true); #不会报错
insert into person values (2, false); #不会报错

注意点:
- MySQL中的布尔类型也是使用整型来实现的, 0就表示假, 1就表示真
    + 底层的本质是因为MySQL是使用C/C++来实现的, 所以就是&#39;非零即真&#39;
insert into person values (3, 1); #不会报错
insert into person values (4, 0); #不会报错
insert into person values (5, 2); #不会报错
--&gt;</span>
<span class="token comment">&lt;!--
 8.日期类型 - 专门用来保存时间的
 DATE	    3字节	YYYY-MM-DD	日期值
 TIME	    3字节	HH:MM:SS	时间值或持续时间
 DATETIME	8字节	YYYY-MM-DD HH:MM:SS	混合日期和时间值
注意点: 在存储时间的时候, 需要用单引号将时间括起来
create table person(
    id int,
    filed1 DATE,
    filed2 TIME,
    filed3 DATETIME
);
insert into person values (1, &#39;2020-02-02&#39;, &#39;14:18:23&#39;, &#39;2020-02-02 14:18:23&#39;);
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,c){return i(),e("div",null,v)}const m=n(l,[["render",a],["__file","17-数据类型.html.vue"]]);export{m as default};
