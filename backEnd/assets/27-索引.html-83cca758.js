import{_ as n,p as e,q as i,a1 as s}from"./framework-96b046e1.js";const d={},l=s(`<h1 id="_27-索引" tabindex="-1"><a class="header-anchor" href="#_27-索引" aria-hidden="true">#</a> 27 -索引</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
需求: 往数据库里存储一万条数据
实现方案:
1.写一万条insert into语句
2.将insert into语句封装到存储过程或者函数中
将来怎么使用?
是配合其它SQL语句使用, 还是单独使用
单独使用--存储过程
配合其它SQL语句使用--自定义函数
--&gt;</span>
<span class="token comment">&lt;!--
create procedure add_stus(num int)
begin
declare currentId int default 0;
declare currentAge int default 0;
declare currentName varchar(255) default &#39;&#39;;

while currentId &lt; num do
set currentId = currentId + 1;
set currentAge = floor(rand() * 30);
set currentName = concat(&#39;it&#39;, currentAge);
insert into stu values(currentId,currentName,currentAge);
end while;
end;

call add_stus(10000); #48.428s
注意点:
以上封装存在的问题, 默认情况下每生成一条插入语句, 就会立即执行这条插入的语句
所以整个过程我们生成了一万条插入语句, 我们解析了一万条插入的语句, 我们编译了一万条插入的语句, 我们执行了一万条插入的语句
所以整个过程就比较耗时
--&gt;</span>
<span class="token comment">&lt;!--
create procedure add_stus2(num int)
begin
declare currentId int default 0;
declare currentAge int default 0;
declare currentName varchar(255) default &#39;&#39;;

set autocommit = 0;
while currentId &lt; num do
set currentId = currentId + 1;
set currentAge = floor(rand() * 30);
set currentName = concat(&#39;it&#39;, currentAge);
insert into stu values(currentId,currentName,currentAge);
end while;
commit;

end;

call add_stus2(10000); #1.713s
注意点:
只要在循环前面加上set autocommit = 0;, 在循环后面加上commit;
那么就不会生成一条插入语句就执行一条插入语句了
会等到所有的插入语句都生成之后, 再统一的解析, 统一的编译, 统一的执行
--&gt;</span>
<span class="token comment">&lt;!--
create procedure add_stus3(num int)
begin
set @currentId = 0;
set @currentAge = 0;
set @currentName = &#39;&#39;;
prepare stmt from &#39;insert into stu values(?,?,?);&#39;;

while @currentId &lt; num do
set @currentId = @currentId + 1;
set @currentAge = floor(rand() * 30);
set @currentName = concat(&#39;it&#39;, @currentAge);
execute stmt using @currentId, @currentName, @currentAge;
end while;

end;

call add_stus3(10000); #2.048s
--&gt;</span>
<span class="token comment">&lt;!--
create procedure add_stus4(num int)
begin
set @currentId = 0;
set @currentAge = 0;
set @currentName = &#39;&#39;;
prepare stmt from &#39;insert into stu values(?,?,?);&#39;;

set autocommit = 0;
while @currentId &lt; num do
set @currentId = @currentId + 1;
set @currentAge = floor(rand() * 30);
set @currentName = concat(&#39;it&#39;, @currentAge);
execute stmt using @currentId, @currentName, @currentAge;
end while;
commit;

end;
--&gt;</span>
<span class="token comment">&lt;!--
1.什么是索引?
- 索引就相当于字典中的目录(拼音/偏旁部首手)
  有了目录我们就能通过目录快速的找到想要的结果.
- 但是如果没有目录(拼音/偏旁部首手), 没有索引
  那么如果想要查找某条数据就必须从前往后一条一条的查找
- 所以索引就是用于帮助我们提升数据的查询速度的

2.索引的优缺点和使用原则
2.1优点
    + 大大加快数据的查询速度
    + 没有任何限制, 所有MySql字段都可以用作索引
2.2缺点
    + 索引是真实存在的会占空间, 会增加数据库体积
    + 如果对作为索引的字段进行增删修操作, 系统需要花费时间去更新维护索引
2.3原则
    + 对经常用于查询的字段应该创建索引(作为where条件字段、作为group by分组的字段, 作为order by排序的字段)
    + 对于主键和外键系统会自动创建索引, 无序我们手动创建
    + 对于数据量小的表不需要刻意使用索引
3.索引分类
    + 单值索引: 将某个字段的值作为索引
    + 复合索引: 将多个字段的值作为索引
    + 唯一索引(唯一键): 索引列中的值必须是唯一的，但是允许为空值
    + 主键索引:是一种特殊的唯一索引，不允许有空值
    + ... ...
--&gt;</span>
<span class="token comment">&lt;!--
1.查看当前查询是否使用索引
1.1查询没有索引的表
SELECT * FROM stu WHERE id=999999; #0.695s
1.2查询有索引的表
SELECT * FROM stu2 WHERE id=999999; #0.008s
1.3如何查看当前的查询语句有没有用到索引
EXPLAIN 查询语句;
如果返回的结果集中的key有值, 那么就表示当前的查询语句中用到了索引
如果返回的结果集中的key没有值, 那么就表示当前的查询语句中没有用到索引

2.如何添加索引
2.1给表设置主键, 只要设置了主键, 那么系统就会自动创建对应的索引
2.2给表设置外键, 只要设置了外键, 那么系统就会自动创建对应的索引
2.3给表设置唯一键, 只要设置了某一个字段的取值是唯一的, 也会自动创建对应的索引

2.4创建表的时候指定给哪个字段添加索引
create table test1(
    id int,
    name varchar(20),
    index idx_name(id) #创建索引
);
2.5创建好表之后再给指定字段添加索引
create table test2(
    id int,
    name varchar(20),
);
create index idx_name on test2(id); #创建索引

create table test3(
    id int,
    name varchar(20),
);
alter table test3 add index idx_name(id);

3.删除索引
drop index 索引名称 on 表名;
--&gt;</span>
<span class="token comment">&lt;!--
1.什么是索引算法?
索引算法决定了如何创建索引
索引算法决定了如何查找索引对应的数据

传统查找:
1, 2, 3, 4, 5

BTree查找:
            4
    |-------------|
    2             6
|----|----|  |----|----|
1         3  5         7

BTree索引:
BTree索引是基于平衡多叉排序树实现的, 能够缩短查找的次数

Hahs索引:
哈希索引是基于哈希表实现的, 只能用于memory存储引擎, 可以一次性定位到指定数据
https://dev.mysql.com/doc/refman/8.0/en/index-btree-hash.html
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function r(a,c){return e(),i("div",null,v)}const m=n(d,[["render",r],["__file","27-索引.html.vue"]]);export{m as default};
