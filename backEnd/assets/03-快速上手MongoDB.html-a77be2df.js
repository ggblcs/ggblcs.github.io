import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const d={},l=s(`<h1 id="_03-快速上手mongodb" tabindex="-1"><a class="header-anchor" href="#_03-快速上手mongodb" aria-hidden="true">#</a> 03 -快速上手MongoDB</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
https://docs.mongodb.com/manual/
https://www.mongodb.org.cn/tutorial/
1.连接MongoDB服务器
通过mongo连接MongoDB服务器

2.查看数据库
show dbs
#和MySQL中的 show databases; 指令一样

3.创建数据库
use 数据库名称
#和MySQL中的 use 指令一样, 只不过MongoDB中的use数据库不存在会自动创建

4.查看数据库中有哪些集合
show collections
#和MySQL中的 show tables; 指令一样

5.创建集合
db.createCollection(&#39;集合名称&#39;);
#和MySQL中的 create table xxx(); 指令一样

6.插入数据
db.集合名称.insert(文档对象);
#和MySQL中的 insert into xxx values () 指令一样

7.查询数据
db.集合名称.find();
#和MySQL中的 select * from xxx; 指令一样

8.删除集合
db.集合名称.drop()
#和MySQL中的 drop table xxx; 指令一样

9.删除数据库
db.dropDatabase()
#在哪个数据库中就会删除哪个数据库
#和MySQL中的 drop database xxx; 指令一样

10.和MySQL的不同
- 没有MySQL中表的概念, 取而代之的是集合
- 创建集合时不用指定集合中有哪些字段
- 只要是一个合法的文档对象都可以往里面存储
- ... ...
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[l];function v(c,r){return i(),e("div",null,a)}const b=n(d,[["render",v],["__file","03-快速上手MongoDB.html.vue"]]);export{b as default};
