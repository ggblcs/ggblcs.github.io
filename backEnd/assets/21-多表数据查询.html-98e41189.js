import{_ as n,p as e,q as i,a1 as s}from"./framework-96b046e1.js";const d={},l=s(`<h1 id="_21-多表数据查询" tabindex="-1"><a class="header-anchor" href="#_21-多表数据查询" aria-hidden="true">#</a> 21 -多表数据查询</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.多表查询
- 多表查询只需要在单表查询基础上增加一张表即可
select * from 表名1, 表名2;

select * from stu, grade;
注意点:
- 默认情况下多表查询的结果是笛卡尔集

2. union作用
在纵向上将多张表的结果结合起来返回给我们
select * from 表名1 union select * from 表名2;

select id, name from stu union select id, score from grade;
注意点:
- 使用union进行多表查询, 返回的结果集的表头的名称是第一张表的名称
- 使用union进行多表查询, 必须保证多张表查询的字段个数一致
  #select id, name from stu union select id, score, stuId from grade;
  #The used SELECT statements have a different number of columns
- 使用union进行多表查询, 默认情况下会自动去重
  #select id, name from stu union select id, name from person;
- 使用union进行多表查询, 如果不想自动去重, 那么可以在union后面加上all
  #select id, name from stu union all select id, name from person;
--&gt;</span>
<span class="token comment">&lt;!--
1.表的连接查询
- 将多张表中&#39;关联的字段&#39;&#39;连接&#39;在一起查询我们称之为&#39;表的连接查询&#39;
- 大白话: 查询多张表中满足条件的数据
1.1内连接 inner join
select * from stu, grade where stu.id = grade.stuId;
select * from 表名1 inner join 表名2 on 条件;
select * from stu inner join grade on stu.id = grade.stuId;
注意点:
- 在进行多表查询的时候, 如果想查询指定的字段, 那么必须在字段名称前面加上表名才行
  #select stu.id, stu.name, grade.score from stu inner join grade on stu.id = grade.stuId;
- 在内连接中只会返回满足条件的数据

1.2外连接
1.2.1左外连接 left join
- 在左外连接中, 左边的表是不看条件的, 无论条件是否满足, 都会返回左边表中所有的数据
- 在左外连接中, 只有右边的表会看条件, 对于右边的表而言, 只有满足条件才会返回对应的数据
#select stu.id, stu.name, grade.score from stu left join grade on stu.id = grade.stuId;
# 在以上的查询语句中stu表在左边, grade表在右边
# 所以stu表不看条件, 只有grade表看条件

1.2.2右外连接 right join
- 在右外连接中, 右边的表是不看条件的, 无论条件是否满足, 都会返回右边表中所有的数据
- 在右外连接中, 只有左边的表会看条件, 对于左边的表而言, 只有满足条件才会返回对应的数据
#select stu.id, stu.name, grade.score from stu right join grade on stu.id = grade.stuId;
# 在以上的查询语句中stu表在左边, grade表在右边
# 所以grade表不看条件, 只有stu表看条件

1.3交叉连接   cross join
- 如果没有指定条件, 那么返回笛卡尔集
#select stu.id, stu.name, grade.score from stu cross join grade;
- 如果指定了条件, 那么就等价于内连接
#select stu.id, stu.name, grade.score from stu cross join grade on stu.id = grade.stuId;

1.4全连接     full join(MySQL不支持全连接)
--&gt;</span>
<span class="token comment">&lt;!--
1.自然连接(natural)
自然连接是用来简化&#39;内连接和外连接&#39;的
如果多张表需要判断的条件字段名称一致, 那么不用编写条件, 自然连接会自动判断
1.1自然内连接
select * from 表名1 inner join 表名2 on 条件;
select * from stu inner join grade on stu.id = grade.stuId;
select * from 表名1 natural join 表名2;
select * from stu natural join grade;

1.2自然外连接
1.2.1自然左外连接
select * from stu natural left join grade;

1.2.1自然右外连接
select * from stu natural right join grade;

注意点:
- 如果没有指定条件, 也没有同名的字段, 那么就会返回笛卡尔集
- 在自然连接中, 返回的结果集会自动优化, 会自动去除重复的判断字段
--&gt;</span>
<span class="token comment">&lt;!--
1.using关键字
如果多张表需要判断的条件字段名称一致, 那么除了可以使用自然连接来简化以外
还可以使用using关键字来简化
1.1内连接
select * from stu inner join grade on stu.stuId = grade.stuId;
select * from stu inner join grade using(stuId);
1.2外连接
1.2.1左外连接
select * from stu left join grade on stu.stuId = grade.stuId;
select * from stu left join grade using(stuId);
1.2.2右外连接
select * from stu right join grade on stu.stuId = grade.stuId;
select * from stu right join grade using(stuId);
--&gt;</span>
<span class="token comment">&lt;!--
1.子查询
- 将一个查询语句查询的结果作为另一个查询语句的条件来使用
- 将一个查询语句查询的结果作为另一个查询语句的表来使用

2.将一个查询语句查询的结果作为另一个查询的条件来使用
2.1标准子查询(返回的结果只有一个)
select stuId from grade where score = 100;
select name from stu where stuId = 3;

select name from stu where stuId = (select stuId from grade where score = 100);

2.2非标准子查询(返回的结果有多个)
select stuId from grade where score &gt;= 60;
select name from stu where stuId = 3 OR stuId = 1;
select name from stu where stuId in(3, 1);

select name from stu where stuId in(select stuId from grade where score &gt;= 60);

3.将一个查询语句查询的结果作为另一个查询的表来使用
select name, city, score from person where score &gt;= 60;
select name, city, score from (select name, city, score from person where score &gt;= 60) as t;
注意点:
如果要将一个查询语句查询的结果作为另一个查询的表来使用, 那么必须给子查询起一个别名
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[l];function v(a,u){return e(),i("div",null,r)}const m=n(d,[["render",v],["__file","21-多表数据查询.html.vue"]]);export{m as default};
