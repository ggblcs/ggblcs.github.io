import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_15-表增删改查" tabindex="-1"><a class="header-anchor" href="#_15-表增删改查" aria-hidden="true">#</a> 15 -表增删改查</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
注意点:
在对数据库的表进行操作的时候(增删改查), 都必须先告诉MySQL我们要操作的是哪一个数据库
use 数据库名称;

1.如何查看数据库中有哪些表?
show tables;

2.如何查看指定表的结构
desc 表名;
--&gt;</span>
<span class="token comment">&lt;!--
1.创建表
create table 表名(
  字段名称 数据类型,
  字段名称 数据类型,
  字段名称 数据类型,
  字段名称 数据类型,
);

示例一:
create table stu(
    id int,
    name text
);
注意点: 以上代码创建表, 如果表已经存在了, 那么就会报错

示例二:
create table if not exists person(
    id int,
    name text
);
注意点: 以上代码创建表, 没有就会创建一个新的, 有就会自动跳过
--&gt;</span>
<span class="token comment">&lt;!--
1.删除表
drop table 表名;
示例一:
drop table stu;
注意点: 以上语句, 如果删除的表不存在, 那么就会报错

示例二:
drop table if exists person;
注意点: 以上语句, 如果需要删除的表存在, 那么就直接删除, 如果不存在就跳过
--&gt;</span>
<span class="token comment">&lt;!--
1.修改表
6.0修改表名
rename table 原始名称 to 新的名称;
rename table stu to person;

6.1添加字段
alter table 表名 add 新增字段名称 新增字段数据类型 [位置];
alter table person add age int;
注意点: 默认情况下会将新增的字段放到原有字段的后面

alter table person add score float first;
注意点: 我们可以通过指定first将新增的字段放到原有字段的前面

alter table person add phone int after name;
注意点: 我们可以通过after指定将新增的字段放到哪个字段的后面

6.2删除字段
alter table 表名 drop 字段名称;
alter table person drop phone;

6.3修改字段
6.3.1修改字段的数据类型
alter table 表名 modify 需要修改的字段名称 新的数据类型
alter table person modify score double;

6.3.2修改字段的名称和数据类型
alter table 表名 change 原始字段名称 新的字段名称 新的数据类型;
alter table person change age addr text;
--&gt;</span>
<span class="token comment">&lt;!--
1.MySQL存储引擎
- MySQL中的存储引擎就好比我们现实生活中的银行, 不同的银行提供的安全级别、服务水平、存储功能不一样
  和现实生活中一样在MySQL也有各种各样不同的银行, 这些银行我们称之为存储引擎
  和现实生活中一样MySQL中不同的存储引擎提供的安全级别、服务水平、存储功能等也不一样

- MySQL中有三种存储引擎, 分别是:
    + MyISAM: 安全性低, 但不支持事务和外键, 适合频繁插入和查询的应用
    + InnoDB(默认): 安全性高, 支持事务和外键, 适合对安全性, 数据完整性要求较高的应用
    + Memory: 访问速度极快, 但不会永久存储数据, 适合对读写速度要求较高的应用
create table stu(
    id int,
    name text
)engine=引擎名称;

2.不同引擎本质
- 前面我们说过数据库的本质就是文件, 所以我们可以先观察一下
- 通过我们的观察, 我们发现只要创建一个数据库就会自动创建一个文件夹
- 通过我们的观察, 我们发现只要创建一张表就会在指定的数据库文件夹中创建一个文件
- 创建表的时候自动创建的这个文件就保存了这张表的结构

create table stu(
    id int,
    name varchar(20)
)engine=Memory;

InnoDB:
    - 如果表的存储引擎是InnoDB, 那么只要创建表就会自动创建一个文件, 这个文件就保存了这张表的结构
    - 如果往InnoDB的表中存储数据, 那么数据会被存储到ibdata1的文件中, 如果存储的数据比较多, 那么系统会自动再创建ibdata2, ibdata3, ...文件

MyISAM:
    - 如果表的存储引擎是MyISAM, 那么只要创建表就会自动创建三个文件
        + .sdi这个文件就保存了这张表的结构
        + .MYD这个文件就保存了这张表中存储的数据
        + .MYI这个文件就保存了这张表中的索引

Memory:
    - 如果表的存储引擎是Memory, 那么只要创建表就会自动创建一个文件, 这个文件就保存了这张表的结构
    - 注意点: 如果表的存储引擎是Memory, 那么就不会像InnoDB/MyISAM将数据保存到文件中了, 而是直接保存到内存中

--&gt;</span>
<span class="token comment">&lt;!--
alter table 表名 engine=引擎名称;
alter table stu engine=MyISAM;
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,c){return i(),e("div",null,v)}const b=n(l,[["render",a],["__file","15-表增删改查.html.vue"]]);export{b as default};
