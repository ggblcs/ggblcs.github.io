import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_16-数据增删改查" tabindex="-1"><a class="header-anchor" href="#_16-数据增删改查" aria-hidden="true">#</a> 16 -数据增删改查</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.插入数据
insert into 表名 (字段名称1, 字段名称2) values (值1, 值2);

示例:
create table if not exists stu(
    id int,
    name varchar(20)
);
insert into stu (id, name) values (1, &#39;lnj&#39;);
# 注意点: 在插入数据的时候指定的字段名称的顺序不用和表中的字段名称的顺序一致
insert into stu (name, id) values (&#39;zs&#39;, 2);
# 注意点: 在插入数据的时候指定的取值顺序必须和指定的字段名称顺序一致
insert into stu (name, id) values (3, &#39;ls&#39;);
# 注意点: 如果插入数据时指定的取值顺序和表中的字段顺序是一致的, 那么可以不指定字段名称
insert into stu values (3, &#39;ls&#39;);
# 注意点: 我们可以通过values同时插入多条数据
insert into  stu values (4, &#39;ww&#39;), (5, &#39;zl&#39;);
--&gt;</span>

<span class="token comment">&lt;!--
3.更新数据
update 表名 set 字段名称=值 [where 条件];

示例:
# 注意点: 如果在更新数据的时候没有指定条件, 那么就会更新整张表中的数据
update stu set score=77;
# 注意点: 如果在更新数据的时候指定了条件, 那么只会更新满足条件的数据
update stu set score=88 where name=&#39;ls&#39;;
# 注意点: 在指定条件的时候, 我们可以通过AND来指定多个条件, AND===&amp;&amp;
update stu set score=100 where name=&#39;lnj&#39; AND id=5;
# 注意点: 在指定条件的时候, 我们可以通过OR来指定多个条件, OR===||
update stu set score=66 where name=&#39;zs&#39; OR name=&#39;ww&#39;;
# 注意点: 在更新数据的时候是可以同时更新多个字段的
update stu set name=&#39;it666&#39;, score=33 where id=5;
--&gt;</span>

<span class="token comment">&lt;!--
1.查询表
# 注意点: 以下方式会将表中所有的数据都查询出来, 所以性能比较差
# 注意点: 以下方式会将表中所有的数据都查询出来, 不能查询特定字段的值
select * from 表名;

# 以下才是查询数据完整的写法
select 字段名称1, 字段名称2 from 表名 [where 条件];
# 查询特定字段的数据
select name from stu;
# 查询满足条件的数据
select * from stu where score &gt; 60;
select id, name from stu where score &gt; 60;
select * from stu where score = 77 || score = 88;
select * from stu where score in (77, 88);
select * from stu where score BETWEEN 77 AND 88;
select * from stu where score IS NOT NULL;
select * from stu where score IS NULL;
--&gt;</span>
<span class="token comment">&lt;!--
where支持的运算符
=（等于）、!=（不等于）、&lt;&gt;（不等于）、&lt;（小于）、&lt;=（小于等于）、&gt;（大于）、&gt;=（大于等于）；
IN(set)；固定的范围值
BETWEEN…AND；值在什么范围
IS NULL；（为空） IS NOT NULL（不为空）
AND；与
OR；或
NOT；非
LIKE: 模糊查询
--&gt;</span>

<span class="token comment">&lt;!--
1.删除数据
delete from 表名 [where 条件];

# 删除满足条件的数据
delete from stu where score &gt; 60;
$ 删除所有的数据
delete from stu;
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(r,c){return n(),i("div",null,v)}const t=e(l,[["render",a],["__file","16-数据增删改查.html.vue"]]);export{t as default};
