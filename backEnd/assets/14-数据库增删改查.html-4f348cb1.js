import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const a={},d=s(`<h1 id="_14-数据库增删改查" tabindex="-1"><a class="header-anchor" href="#_14-数据库增删改查" aria-hidden="true">#</a> 14 -数据库增删改查</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.创建数据库
create database [if not exists] 数据库名称 [charset=字符集];

示例一:
create database stu;
注意点: 以上语句, 如果MySQL中已经有了名称叫做stu的数据库, 再执行就会报错

示例二:
create database if not exists person;
注意点: 以上语句, 如果MySQL中已经有了名称叫做person的数据库, 并不会报错, 而是跳过这条语句

示例三:
create database if not exists it666 charset=utf8;
注意点: 为了避免将来读取的字符集和存储的字符集不一样导致乱码问题,
在创建数据库的时候, 我们还需要指定当前创建的数据库将来使用什么编码方式存储数据

2.如何查看数据库全局默认的编码
show variables like &#39;character_set_%&#39;;

3.如果查看某个数据库的编码
show create database person;

4.特殊的数据库名称处理
create database if not exists \`create\` charset=utf8;
注意点: 如果数据库的名称是SQL的关键字或者是一些特殊字符#~@*&amp;.., 这个时候就需要用反引号括起来
--&gt;</span>
<span class="token comment">&lt;!--
1.如何删除数据库
drop database [if exists] 数据库名称;

示例一:
drop database stu;
注意点: 以上语句, 如果MySQL中没有要删除的数据库, 那么就会报错

示例二:
drop database if exists person;
注意点: 以上语句, 如果MySQL中没有要删除的数据库, 那么就会跳过, 并不会报错
--&gt;</span>
<span class="token comment">&lt;!--
1.如何修改数据库
alter database 数据库名称 charset=字符集;
alter database it666 charset=utf8;

1.如何查看数据库
show create database 数据库名称;
show databases;
--&gt;</span>
<span class="token comment">&lt;!--
新建-- C/增加
create database [if not exists] 数据库名称 [charset=字符集];

删除-- D/删除
drop database [if exists] 数据库名称;

修改-- U/修改
alter database 数据库名称 charset=字符编码

读取-- R/查看
show databases;
show create database 数据库名称;
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[d];function v(r,c){return n(),i("div",null,l)}const b=e(a,[["render",v],["__file","14-数据库增删改查.html.vue"]]);export{b as default};
