import{_ as n,p as i,q as e,a1 as l}from"./framework-96b046e1.js";const s={},d=l(`<h1 id="_13-数据库sql简介" tabindex="-1"><a class="header-anchor" href="#_13-数据库sql简介" aria-hidden="true">#</a> 13 -数据库SQL简介</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.如何使用MySQL
1.0学习MySQL和学习Excel差不多
使用Excel步骤: 安装Excel-创建Excel文件-创建表-在表中存储数据
使用MySQL步骤: 安装MySQL-创建数据库----创建表-在表中存储数据

1.1学习MySQL本质上就是学习数据库的增删改查(CRUD)
1.2在MySQL中主要有三种类型的增删改查, 分别是:
1.2.1数据库的增删改查
1.2.2表的增删改查
1.2.3数据的增删改查
MySQL中可以有0~N个数据库, 数据库中可以有0~N个表, 表中可以有0~N个数据

2.什么是SQL？
结构化查询语言(Structured Query Language)简称
是用来操作关系型数据库的一门语言
是一个关系型数据库通用的操作语言

注意点:
各大厂商为了更多的占用市场份额, 都会在标准的SQL基础上扩展一些自己的东西
例如: SQL Server  使用T-SQL
      Oracle      使用PL/SQL
      MySQL       使用MySQL

3.SQL语句功能划分
- DDL:数据定义语句
	用来定义数据库对象：创建库，表，列等。
- DML：数据操作语句
	用来操作数据库表中的记录
- DQL：数据查询语句
	用来查询数据
- DCL：数据控制语句
	用来定义访问权限和安全级别

4.SQL数据类型
和常见的编程语言一样, 数据库中存储的数据也是区分类型的
MySQL中支持的数据类型大致可以分为三类: 数值类型、字符串类型和日期和时间类型
https://dev.mysql.com/doc/refman/8.0/en/data-types.html
MySQL中常用的数据类型如下:
double：浮点型，例如double(5,2)表示最多5位，其中必须有2位小数，即最大值为999.99；
char：固定长度字符串类型； char(10)  &#39;lnj       &#39;
varchar：可变长度字符串类型；varchar(10) &#39;lnj&#39;
text：字符串类型;
blob：二进制类型；
date：日期类型，格式为：yyyy-MM-dd；
time：时间类型，格式为：hh:mm:ss
datetime:日期时间类型 yyyy-MM-dd hh:mm:ss
注意点: 在mysql中，字符串类型和日期类型都要用单引号括起来。&#39;lnj&#39;  &#39;2022-02-02&#39;
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(c,r){return i(),e("div",null,v)}const u=n(s,[["render",a],["__file","13-数据库SQL简介.html.vue"]]);export{u as default};
