import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_18-数据库完整性" tabindex="-1"><a class="header-anchor" href="#_18-数据库完整性" aria-hidden="true">#</a> 18 -数据库完整性</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是数据的完整性?
保证保存到数据库中的数据都是正确的。

2.如何保证数据完整性?
- 数据的完整性可以分为三类: 实体完整性、域完整性、参照完整性
- 无论是哪一种完整性都是在创建表时给表添加约束即可

3.实体完整性
3.1什么是实体?
	表中的一行数据就是一个实体（entity）
3.2如何保证实体完整性?
    保证实体完整性就是保证每一行数据的唯一性

4.实体完整性的约束类型
	主键约束（primary key）
	唯一约束(unique)
	自动增长列(auto_increment)

5.主键约束（primary key）
主键用于唯一标识表中的每一条数据, 和现实生活中的身份证很像

create table person2(
    id int primary key,
    name varchar(20)
);
insert into person2 values (1, &#39;lnj&#39;);
insert into person2 values (2, &#39;lnj&#39;);

主键的特征:
- 如果将某一个字段设置成了主键, 那么这个字段的取值就不能重复了
- 如果将某一个字段设置成了主键, 那么这个字段的取值就不能是null了
- 一张表中只能有一个主键, 不能出现多个主键
create table person3(
    id int primary key,
    name varchar(20) primary key
);
- 我们除了可以在字段数据类型后面添加primary key, 将这个字段变成主键以外,
  还可以通过在最后写上primary key(字段名称)的方式来指定主键
create table person3(
    id int,
    name varchar(20),
    primary key(id)
);
insert into person3 values (1, &#39;lnj&#39;);
insert into person3 values (1, &#39;lnj&#39;);
--&gt;</span>
<span class="token comment">&lt;!--
1.什么是联合主键?
我们通过将表中的某个永远不重复的字段设置为主键, 从而达到保证每一行数据的唯一性(实体完整性)
但是在企业开发中有时候我们可能找不到不重复的字段, 此时我们还可以通过联合主键的方式来保证每一行数据的唯一性
联合主键就是同时将多个字段作为一个主键来使用
 ________
|name| age|
|lnj | 88 |
|zs  | 88 |
|lnj | 33 |

create table person(
    name varchar(20),
    age int,
    primary key(name, age)
);
insert into person values (&#39;lnj&#39;, 88);
insert into person values (&#39;lnj&#39;, 88);

注意点:
联合主键并不是添加多个主键, 而是将多个字段的值作为主键来使用
也就是过去我们指定id为主键, 那么id的取值不能重复
而现在如果我们指定 name和age为主键, 那么name+age的值不能重复
--&gt;</span>
<span class="token comment">&lt;!--
1.唯一约束(unique)
唯一约束用于保证某个字段的值永远不重复
create table person(
    id int unique,
    name varchar(20)
);
insert into person values (1, &#39;lnj&#39;);
insert into person values (1, &#39;lnj&#39;);
主键和唯一键异同:
- 唯一约束和主键约束一样, 被约束的字段的取值都不能够重复
- 主键在一张表中只能有一个, 而唯一约束在一张表中可以有多个
create table person2(
    id int unique,
    name varchar(20) unique
);
insert into person2 values (1, &#39;lnj&#39;);
insert into person2 values (2, &#39;lnj&#39;);
- 主键的取值不能为Null, 而唯一约束的取值可以是Null

--&gt;</span>
<span class="token comment">&lt;!--
1.自动增长约束(auto_increment)
自动增长约束的作用是让某个字段的取值从1开始递增, 从而保证实体完整性

create table person(
    id int auto_increment,
    name varchar(20)
);
#Incorrect table definition; there can be only one auto column and it must be defined as a key
注意点:
如果某个字段是自动增长的, 那么这个字段必须是主键才可以
create table person(
    id int auto_increment primary key,
    name varchar(20)
);
insert into person values (1, &#39;lnj&#39;);
如果仅仅是主键, 那么取值不能是null, 但是如果主键还是自动增长的, 那么取值就可以是null或者default

在企业开发中我们应该如何选择主键
最少性: 能用一个字段作为主键, 就不要使用多个字段
稳定性: 能用不被操作(修改)的字段作为主键, 就不要使用会被操作的字段作为主键
一般情况下我们会定义一个名称叫做id的字段, 并且这个字段是整型的, 并且这个字段是自动增长的来作为主键
--&gt;</span>
<span class="token comment">&lt;!--
1.如何修约束
1.1如何修改主键约束
alter table 表名 add primary key(字段);
create table person(
    id int,
    name varchar(20)
);
alter table person add primary key(id);
insert into person values (1, &#39;lnj&#39;);

1.2如何修改唯一约束
alter table 表名 add unique(字段);
create table person2(
    id int,
    name varchar(20)
);
alter table person2 add unique(name);
insert into person2 values (1, &#39;lnj&#39;);

1.3如何修改自动增长约束
alter table 表名 modify 字段名称 数据类型 auto_increment;
create table person3(
    id int,
    name varchar(20)
);
alter table person3 modify id int auto_increment;
insert into person3 values (null, &#39;lnj&#39;);
--&gt;</span>
<span class="token comment">&lt;!--
1.域完整性
1.1什么是域?
  一行数据中的每个单元格都是一个域
1.2如何保证域的完整性?
   保证域的完整性就是保证每个单元格数据的正确性
-使用正确的数据类型
    + 例如: 人的年龄不可能超过255岁, 而且不能是负数, 所以我们就可以使用 TINYINT UNSIGNED
    + 例如: 人的性别只能是男/女或者妖, 所以我们就可以使用枚举类型
    + 例如: 要存储比较多的文字, 为了保证不超出每一行最大的存储限制, 我们就可以使用大文本类型
-使用非空约束（not null）
-使用默认值约束(default)

示例:
create table person(
    id int,
    name varchar(20) not null
);
insert into person values (1, null);

create table person2(
    id int,
    name varchar(20) default &#39;it666&#39;
);
insert into person2 values (1, null);
insert into person2 values (1, default);
insert into person2 values (1, &#39;zs&#39;);
注意点: 哪怕设置了默认值, 传入null之后也不会使用默认值
--&gt;</span>
<span class="token comment">&lt;!--
1.参照完整性
  参照完整性又称引用完整性, 主要用于保证多表之间引用关系的正确性

2.为什么要创建多张表?
示例: 定义一张表保存2个学生3门课程的成绩
|---------------------------------|
| id | name | gender | km | score |
| 1  | 张三 |   男   |语文|  100  |
| 2  | 张三 |   男   |数学|   99  |
| 3  | 张三 |   男   |英语|   98  |
| 4  | 李四 |   女   |语文|   60  |
| 5  | 李四 |   女   |数学|   59  |
| 6  | 李四 |   女   |英语|   58  |
|---------------------------------|
如果将所有的数据都放到一张表中, 会出现大量冗余数据
所以为了降低数据库的体积, 提升数据库的效率, 我们需要根据自身需求对表进行拆分

|--------------------|      |-----------------------|
| id | name | gender |      | id | km | score | uid |
| 1  | 张三 |   男   |      |  1 |语文|  100  |  1  |
| 2  | 李四 |   女   |      |  2 |数学|   99  |  1  |
|--------------------|      |  3 |英语|   98  |  1  |
                            |  4 |语文|   60  |  2  |
                            |  5 |数学|   59  |  2  |
                            |  6 |英语|   58  |  2  |
                            |-----------------------|

3.什么时候会出现冗余数据?
- 表与表之间的关系可以分为三种: 一对一、一对多、多对多
3.1一对一(一般不需要拆分):
- 一夫一妻制
|-----------------------------|
| id | name | gender | mateId |
| 1  | 张三 |   男   |    2   |
| 2  | 李四 |   女   |    1   |
| 3  | 王五 |   男   |    4   |
| 4  | 赵六 |   女   |    2   |
|-----------------------------|

3.2一对多(一般需要拆分):
- 一个人有多个汽车
- 一个班有多个学生
- 一个人有多们成绩
|---------------------------------|
| id | name | gender | km | score |
| 1  | 张三 |   男   |语文|  100  |
| 2  | 张三 |   男   |数学|   99  |
| 3  | 张三 |   男   |英语|   98  |
| 4  | 李四 |   女   |语文|   60  |
| 5  | 李四 |   女   |数学|   59  |
| 6  | 李四 |   女   |英语|   58  |
|---------------------------------|

|--------------------|      |-----------------------|
| id | name | gender |      | id | km | score | uid |
| 1  | 张三 |   男   |      |  1 |语文|  100  |  1  |
| 4  | 李四 |   女   |      |  2 |数学|   99  |  1  |
|--------------------|      |  3 |英语|   98  |  1  |
                            |  4 |语文|   60  |  2  |
                            |  5 |数学|   59  |  2  |
                            |  6 |英语|   58  |  2  |
                            |-----------------------|
3.3多对多(一般需要拆分):
- 一个学生有多个老师, 一个老师有多个学生
|--------------------------------------------|
| id | stuName | gender | teacherName | 性别 |
| 1  |   张三  |   男   |     王五    |  男  |
| 2  |   张三  |   男   |     赵六    |  女  |
| 3  |   张三  |   男   |     周七    |  男  |
| 4  |   李四  |   女   |     王五    |  男  |
| 5  |   李四  |   女   |     赵六    |  女  |
| 6  |   李四  |   女   |     周七    |  男  |
|--------------------------------------------|

|-----------------------|  |---------------------|   |-----------------------|
| id | stuName | gender |  | stuId  | teacherId  |   | id | stuName | gender |
| 1  |   张三  |   男   |  |    1   |     1      |   | 1  |   王五  |   男   |
| 2  |   李四  |   女   |  |    1   |     2      |   | 2  |   赵六  |   女   |
|-----------------------|  |    1   |     3      |   | 3  |   周七  |   男   |
                           |    2   |     1      |   |-----------------------|
                           |    2   |     2      |
                           |    2   |     3      |
                           |---------------------|
--&gt;</span>
<span class="token comment">&lt;!--
1.如何保证参照完整性?
默认情况下表与表之间是独立存在的, 不会相互影响
也正是因为如此, 默认情况下也不会检查表与表之间的依赖关系
所以为了保证表与表之间参照完整性, 我们可以通过&#39;外键&#39;来保证参照完整性

create table stu(
    id int auto_increment primary key,
    name varchar(20),
    gender enum(&#39;男&#39;,&#39;女&#39;,&#39;妖&#39;)
);
create table grade(
    id int auto_increment primary key,
    km varchar(20),
    score double,
    uid int
);

insert into stu values (null, &#39;zs&#39;, &#39;男&#39;);
insert into stu values (null, &#39;ls&#39;, &#39;女&#39;);

insert into grade values (null, &#39;语文&#39;, 100, 1);
insert into grade values (null, &#39;数学&#39;, 99, 1);
insert into grade values (null, &#39;英语&#39;, 98, 1);
insert into grade values (null, &#39;语文&#39;, 100, 3);
insert into grade values (null, &#39;数学&#39;, 99, 3);
insert into grade values (null, &#39;英语&#39;, 98, 3);

2.什么是外键?
如果一张表中有一个字段指向了别一张表中的主键，就将该字段叫做外键
例如: 成绩表中的uid引用了学生表中的id, 那么成绩表中的uid我们就称之为外键
|--------------------|      |-----------------------|
| id | name | gender |      | id | km | score | uid |
| 1  | 张三 |   男   |      |  1 |语文|  100  |  1  |
| 2  | 李四 |   女   |      |  2 |数学|   99  |  1  |
|--------------------|      |  3 |英语|   98  |  1  |
                            |  4 |语文|   60  |  2  |
                            |  5 |数学|   59  |  2  |
                            |  6 |英语|   58  |  2  |
                            |-----------------------|

create table grade2(
    id int auto_increment primary key,
    km varchar(20),
    score double,
    uid int,
    foreign key(uid) references stu(id)
);
insert into grade2 values (null, &#39;语文&#39;, 100, 1);
insert into grade2 values (null, &#39;数学&#39;, 99, 1);
insert into grade2 values (null, &#39;英语&#39;, 98, 1);
insert into grade2 values (null, &#39;语文&#39;, 100, 3);
insert into grade2 values (null, &#39;数学&#39;, 99, 3);
insert into grade2 values (null, &#39;英语&#39;, 98, 3);

3.外键注意点:
- 只有InnoDB的存储引擎才支持外键约束
- 外键的数据类型必须和指向的主键一样
- 在一对多的关系中, 外键一般定义在多的一方(一个学生有多门成绩, 那么外键定义在成绩表中)
- 定义外键的表我们称之为从表, 被外键引用的表我们称之为主表

4.创建表时定义外键
foreign key(外键字段名称) references 主表名称(主表主键名称);
--&gt;</span>
<span class="token comment">&lt;!--
1.如何动态添加外键
alter table 从表名称 add foreign key(外键字段名称) references 主表名称(主表主键名称);
create table grade(
    id int auto_increment primary key,
    km varchar(20),
    score double,
    uid int
);
insert into grade values (null, &#39;语文&#39;, 100, 3);
alter table grade add foreign key(uid) references stu(id);
insert into grade values (null, &#39;语文&#39;, 100, 3);

2.如何查看外键是谁
show create table 从表名称;
show create table grade;
CREATE TABLE \`grade\` (
  \`id\` int NOT NULL AUTO_INCREMENT,
  \`km\` varchar(20) DEFAULT NULL,
  \`score\` double DEFAULT NULL,
  \`uid\` int DEFAULT NULL,
  PRIMARY KEY (\`id\`),
  KEY \`uid\` (\`uid\`),
  CONSTRAINT \`grade_ibfk_1\` FOREIGN KEY (\`uid\`) REFERENCES \`stu\` (\`id\`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8
注意点:
- CONSTRAINT \`grade_ibfk_1\` FOREIGN KEY (\`uid\`) REFERENCES \`stu\` (\`id\`)含义
    + 将uid变成外键, 外键的名称是grade_ibfk_1
    + uid的取值引用的是stu这张表中的id字段的值

3.如何动态删除外键
alter table 从表名称 drop foreign key 外键名称;
alter table grade drop foreign key grade_ibfk_1;
insert into grade values (null, &#39;语文&#39;, 100, 3);
--&gt;</span>
<span class="token comment">&lt;!--
1.外键的操作:
- 严格操作: (前面讲解的都是严格操作)
    + 主表不存在对应数据,从表不允许添加
        + insert into grade values (null, &#39;语文&#39;, 100, 3);
    + 从表引用着数据,主表不允许删除
        + delete from stu where id=1;
    + 从表引用这数据, 主表不允许修改
        + update stu set id=3 where id=1;
- 置空操作(null)   :
    + 在企业开发中, 我们可能必须要删除主表中的数据, 但是如果主表被删除了从表就不完整了
    + 所以在企业开发中, 我们可以通过置空操作, 在删除主表数据的同时删除从表关联的数据

create table grade2(
    id int auto_increment primary key,
    km varchar(20),
    score double,
    uid int,
    foreign key(uid) references stu(id) on delete set null
);
insert into grade values (null, &#39;语文&#39;, 100, 1);
delete from stu where id=1;

- 级联操作(cascade):
    + 在企业开发中, 我们可能必须要修改主表中的数据, 但是如果主表被修改了从表就不完整了
    + 所以在企业开发中, 我们可以通过&#39;级联操作&#39;, 在修改主表数据的同时修改从表关联的数据
create table grade3(
    id int auto_increment primary key,
    km varchar(20),
    score double,
    uid int,
    foreign key(uid) references stu(id) on update cascade
);
insert into grade values (null, &#39;语文&#39;, 100, 1);
update stu set id=1 where id=3;

[constraint 外键名称] foreign key(外键字段) references 主表(主键)[主表删除的动作][主表更新的动作]
一般情况下主表删除时从表置空, 主表更新时从表级联
--&gt;</span>
<span class="token comment">&lt;!--
1.多对多外键
        学生表                     关系表                     教师表
|-----------------------|  |---------------------|   |-----------------------|
| id | stuName | gender |  | stuId  | teacherId  |   | id | stuName | gender |
| 1  |   张三  |   男   |  |    1   |     1      |   | 1  |   王五  |   男   |
| 2  |   李四  |   女   |  |    1   |     2      |   | 2  |   赵六  |   女   |
|-----------------------|  |    1   |     3      |   | 3  |   周七  |   男   |
                           |    2   |     1      |   |-----------------------|
                           |    2   |     2      |
                           |    2   |     3      |
                           |---------------------|

create table stu(
    id int auto_increment primary key,
    name varchar(20),
    gender enum(&#39;男&#39;,&#39;女&#39;,&#39;妖&#39;)
);
insert into stu values (null, &#39;张三&#39;, &#39;男&#39;);
insert into stu values (null, &#39;李四&#39;, &#39;女&#39;);

create table teacher(
    id int auto_increment primary key,
    name varchar(20),
    gender enum(&#39;男&#39;,&#39;女&#39;,&#39;妖&#39;)
);
insert into teacher values (null, &#39;王五&#39;, &#39;男&#39;);
insert into teacher values (null, &#39;赵六&#39;, &#39;女&#39;);
insert into teacher values (null, &#39;周七&#39;, &#39;男&#39;);

create table rel(
    stuId int,
    teacherId int
);
insert into rel values (1, 1);
insert into rel values (1, 2);
insert into rel values (1, 3);
insert into rel values (2, 1);
insert into rel values (2, 2);
insert into rel values (2, 3);

insert into rel values (3, 1);#报错
insert into rel values (1, 4);#报错

alter table rel add foreign key(stuId) references stu(id);
alter table rel add foreign key(teacherId) references teacher(id);
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,u){return i(),e("div",null,v)}const m=n(l,[["render",a],["__file","18-数据库完整性.html.vue"]]);export{m as default};
