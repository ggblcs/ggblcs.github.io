import{_ as n,p as e,q as i,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_20-单表数据查询" tabindex="-1"><a class="header-anchor" href="#_20-单表数据查询" aria-hidden="true">#</a> 20 -单表数据查询</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.单表查询
select * from 表名; #查询表中所有数据
select 字段1, 字段2 from 表名; #查询表中指定字段数据
select [* || 字段] from 表名 [where 条件]; #查询表中满足条件的数据

2.什么是结果集?
通过查询语句查询出来的结果我们就称之为结果集
结果集以表的形式将查询的结果返回给我们

注意点:
结果集返回的表和查询的表不是同一张表
被查询的表是真实存在的, 是存储在磁盘上的
而结果集不是真实存在的, 是存储到内存中的

3.如何给结果集的字段别名?
- 查询指定字段数据时, 我们可以通过as给指定字段取别名
SELECT name as MyName, age as MyAge FROM stu;

4.什么是字段表达式?
- 查询数据的时候, 除了可以查询指定字段的数据以外, 我们还可以查询表达式的结果
SELECT 6+6;

5.什么是伪表?
- 字段表达式虽然能够查询出表达式的结果, 但是不符合MySQL的规范
- 所以我们可以通过伪表(dual)的方式让字段表达式符合MySQL的规范
SELECT 6+6 from dual;
--&gt;</span>
<span class="token comment">&lt;!--
1.模糊查询
格式:
select 字段 from 表名 where 字段 like &#39;条件&#39;;

_通配符: 表示任意一个字符
%通配符: 表示任意0~n个字符

a_c: abc / adc
abc,adc,abbc,ac
_a_c: 1abc / 3adc
1abc,abc1,2abbc,3adc

a%c:abc / adc / abbc / ac
abc,adc,abbc,ac
%a%c: 1abc / 2abbc / 3adc
1abc,abc1,2abbc,3adc

select * from stu where name like &#39;z_&#39;;
select * from stu where name like &#39;z__&#39;;
select * from stu where name like &#39;z_%&#39;;
--&gt;</span>
<span class="token comment">&lt;!--
1.排序 order by
select 字段 from 表名 order by 字段 [asc | desc];
select * from stu order by age; #默认按照升序进行排序
select * from stu order by age asc; # 升序排序
select * from stu order by age desc; # 降序排序

select * from stu order by age desc, score asc; #如果年龄相同, 那么还可以继续按照其它字段来排序
--&gt;</span>
<span class="token comment">&lt;!--
 1.聚合函数:
count(); 统计
select count(*) from stu;
select count(*) from stu where score &gt;= 60;

sum(); 求和
select sum(id) from stu;

avg(); 求平均值
select avg(id) from stu; # 21 / 6 = 3.5
select avg(score) from stu;

max(); 获取最大值
select max(score) from stu;

min(); 获取最小值
select min(score) from stu;

 2.数值类
rand(); #生成随机数
select rand() from dual;
select * from stu order by rand();

round()#四舍五入
select round(3.1) from dual;
select round(3.5) from dual;

ceil(); #向上取整
select ceil(3.1) from dual;

floor(); #向下取整
select floor(3.9) from dual;

truncate(); #截取小数位
select truncate(3.1234567, 2) from dual;

 3.字符串类
ucase(); #转换为大写
select ucase(&#39;hello world&#39;) from dual;

lcase(); #转换为小写
select lcase(&#39;HELLO WORLD&#39;) from dual;

left(); #从左边开始截取到指定的位置
select left(&#39;1234567890&#39;, 3) from dual;

right();#从右边开始截取到指定的位置
select right(&#39;1234567890&#39;, 3) from dual;

substring(); #从指定位置开始截取指定个字符
select substring(&#39;1234567890&#39;, 3, 5) from dual;
--&gt;</span>
<span class="token comment">&lt;!--
 1. 数据分组 group by
select 分组字段 || 聚合函数 from 表名 group by 分组字段;
- 需求: 要求统计表中一共有多少个城市
select city from stu;
select city from stu group by city;

- 需求: 要求统计每个城市中有多少个人
select city, count(*) from stu group by city;

注意点:
- 在对数据进行分组的时候, select 后面必须是分组字段或者聚合函数, 否则就只会返回第一条数据
select city from stu group by city;
select name from stu group by city;
select city, group_concat(name) from stu group by city;
--&gt;</span>
<span class="token comment">&lt;!--
 1.条件查询 having:
- having和where很像都是用来做条件查询的
- 但是where是去数据库中查询符合条件的数据, 而having是去结果集中查询符合条件的数据

select * from stu where city=&#39;北京&#39;;
select * from stu having city=&#39;北京&#39;;

select name, age from stu where city=&#39;北京&#39;;
select name, age from stu having city=&#39;北京&#39;;
#Unknown column &#39;city&#39; in &#39;having clause&#39;

需求: select city from stu group by city;
需求: select city, avg(score) from stu group by city;
需求: select city, avg(score) as average from stu group by city;
需求: select city, avg(score) as average from stu group by city having average&gt;=60;
--&gt;</span>
<span class="token comment">&lt;!--
1.分页 limit:
select 字段 from 表 limit 索引, 个数;
select * from stu limit 0, 3;
select * from stu limit 3, 3;
--&gt;</span>
<span class="token comment">&lt;!--
1. 查询选项
select [查询选项] 字段名称 from 表名;
all:      显示所有查询出来的数据[默认]
distinct: 去除结果集中重复的数据之后再显示

select name from stu;
select all name from stu;
select distinct name from stu;
注意点:
如果是通过distinct来对结果集中重复的数据进行去重
那么只有所有列的数据都相同才会去重
select name, score from stu;
select distinct name, score from stu;
--&gt;</span>
<span class="token comment">&lt;!--
完整的查询语句
select [查询选项] 字段名称 [from 表名] [where 条件] [order by 排序] [group by 分组] [having 条件] [limit 分页];
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function c(a,r){return e(),i("div",null,v)}const u=n(l,[["render",c],["__file","20-单表数据查询.html.vue"]]);export{u as default};
