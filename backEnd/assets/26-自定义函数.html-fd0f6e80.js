import{_ as n,p as e,q as i,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_26-自定义函数" tabindex="-1"><a class="header-anchor" href="#_26-自定义函数" aria-hidden="true">#</a> 26 -自定义函数</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是自定义函数
自定义函数和存储过程很像, 只不过自定义函数不需要手动通过call调用
而是和其它的聚合函数一样会在SQL语句中自动被调用
例如: select avg(score) from stu;
例如: select count(*) from stu where age &gt;=18;

2.创建自定义函数
create function 函数名(形参列表) returns 数据类型 函数特征
begin
sql语句;
... ...
return 值;
end;

函数特征
1 DETERMINISTIC 不确定的
2 NO SQL 没有SQl语句，当然也不会修改数据
3 READS SQL DATA 只是读取数据，不会修改数据
4 MODIFIES SQL DATA 要修改数据
5 CONTAINS SQL 包含了SQL语句

3.调用函数
select 函数名称(参数) from dual;

示例:
create function fn_add(a int, b int) returns int DETERMINISTIC
begin
declare sum int default 0;
set sum = a + b;
return sum;
end;

示例:
create function check_stu(stuId int) returns varchar(255) DETERMINISTIC
begin
declare stuName varchar(255) default &#39;&#39;;
select name into stuName from stu where id=stuId;
return stuName;
end;
--&gt;</span>
<span class="token comment">&lt;!--
1.查看函数
1.1查看所有函数
show function status;
1.2查看指定数据库中的函数
show function status where db=&#39;db_name&#39;;
1.3查看函数源代码
show create function show_stu;

2.删除存储过程
drop function show_stu;
--&gt;</span>
<span class="token comment">&lt;!--
1.IF语句
if 条件表达式 then
... ...
elseif 条件表达式 then
... ...
else
... ...
end if;

示例一:
create function fn_test(age int) returns varchar(255) DETERMINISTIC
begin
declare result varchar(255) default &#39;&#39;;
if age &gt;= 18 then
set result = &#39;成年人&#39;;
else
set result = &#39;未成年人&#39;;
end if;
return result;
end;

示例二:
create function fn_test2(score int) returns varchar(255) DETERMINISTIC
begin
declare result varchar(255) default &#39;&#39;;
if score &lt; 0 || score &gt; 100 then
set result = &#39;没有这个分数&#39;;
elseif score &lt; 60 then
set result = &#39;不及格&#39;;
elseif score &lt; 80 then
set result = &#39;良好&#39;;
else
set result = &#39;优秀&#39;;
end if;
return result;
end;
--&gt;</span>
<span class="token comment">&lt;!--
2.CASE语句
case
when 条件表达式 then
... ...
when 条件表达式 then
... ...
end case;

示例:
create function fn_test3(score int) returns varchar(255) DETERMINISTIC
begin
declare result varchar(255) default &#39;&#39;;
case
when score=100 then
set result = &#39;还需努力&#39;;
when score=0 then
set result = &#39;不需要努力了&#39;;
end case;
return result;
end;

--&gt;</span>
<span class="token comment">&lt;!--
3.循环语句
while 条件表达式 do
    ... ...
end while;

示例: 1 + n的和 / 1 + 2 + 3 + 4 + 5
create function fun_test4(num int)returns int DETERMINISTIC
begin
declare sum int default 0;
declare currentIndex int default 1;

while currentIndex &lt;= num do
    set sum = sum + currentIndex;
    set currentIndex = currentIndex + 1;
end while;

return sum;
end;
----
repeat
... ...
until 条件表达式 end repeat;

示例:
create function fun_test6(num int)returns int DETERMINISTIC
begin
declare sum int default 0;
declare currentIndex int default 1;

repeat
    set sum = sum + currentIndex;
    set currentIndex = currentIndex + 1;
until currentIndex &gt; num end repeat;

return sum;
end;
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function r(a,u){return e(),i("div",null,v)}const t=n(l,[["render",r],["__file","26-自定义函数.html.vue"]]);export{t as default};
