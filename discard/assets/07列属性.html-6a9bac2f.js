import{_ as i,p as e,q as l,a1 as n}from"./framework-96b046e1.js";const d={},a=n(`<h1 id="_07-列属性" tabindex="-1"><a class="header-anchor" href="#_07-列属性" aria-hidden="true">#</a> 07 列属性</h1><h2 id="_01列属性——自动增长" tabindex="-1"><a class="header-anchor" href="#_01列属性——自动增长" aria-hidden="true">#</a> 01列属性——自动增长</h2><ol><li><p>字段从1开始每次递增1，特点是字段中的数据不可能重复，适合记录生成唯一id。</p></li><li><p>自动增长都是无符号整数。</p></li><li><p><strong>在MySQL中，auto_increment必须是主键，但主键不一定自增</strong>。</p></li><li><p>如果要给自增的字段插入数据，使用null关键字。</p></li><li><p>自动增长列上的数据被删除，则默认情况下此记录的编号就不会再使用了。</p></li><li><p>字段从1开始</p></li></ol><h2 id="_02列属性——主键" tabindex="-1"><a class="header-anchor" href="#_02列属性——主键" aria-hidden="true">#</a> 02列属性——主键</h2><ol><li>主键是唯一标识表中记录的一个列或一组列。</li><li>主键特点：值不能重复，不能为空。</li><li>一个表只能有一个主键，一个主键可以由多个字段共同组成。</li><li>主键的创建： <ol><li>创建表时，在数据类型后直接写primary key。</li><li>创建表时，使用primary key(字段名) 语句创建一般主键或组合键。</li><li>修改表时，用语句 <code>alter table add 表名 primary key (字段名);</code>添加主键。</li><li>修改表时，使用modify或change关键字也可以添加主键。</li></ol></li><li>主键的删除： <code>alter table 表名 drop primary key;</code></li><li>主键的作用： <ol><li>保证数据完整性。</li><li>加快查询速度。</li></ol></li><li>选择主键的原则： <ol><li>最少性：尽量选择一个字段做主键。</li><li>稳定性：尽量选择更新少的列做主键。</li><li>尽量选择数字类型的列做主键。</li></ol></li><li>关于主键的一些思考题： <ol><li>在主键列输入数值，允许为空吗？——不可以</li><li>一个表可以有多个主键吗？——不可以</li><li>一个学校数据库中，如果一个学校内，允许学员重名，但是在班级内，不允许学员重名，可以组合班级和姓名做主键吗？——可以</li><li>标识列（自动增长列）允许为字符数据类型吗？——不允许</li><li>表中没有合适的列做主键怎么办？——添加自动增长列。</li><li>一个表可以有两个自动增长列吗？——不可以</li></ol></li></ol><p>例子（关于创建和删除主键）：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>/*
	一、创建表时添加主键
*/
# 4.a 在数据类型后直接写primary key。
create table t1(
	id int primary key,
    name varchar(10)
);
# 4.b 使用primary key(字段名) 语句创建一般主键或组合键。
create table t2(
	id int ,
    name varchar(10),
    primary key(id) -- 添加一个主键
); 
create table t3(
	id int ,
    name varchar(10),
    primary key(id,name) -- 添加一个组合键
); 
/*
	二、修改表时添加主键
*/
alter table t4 add primary key (id); -- 添加一个主键
alter table t4 add primary key (id,name) -- 添加一个组合键
/*
	三、删除主键
*/
alter table t6 drop primary key;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03列属性——唯一键" tabindex="-1"><a class="header-anchor" href="#_03列属性——唯一键" aria-hidden="true">#</a> 03列属性——唯一键</h2><ol><li><p>特点：</p><ol><li>不能重复，可以为空。</li><li>一个表可以有多个唯一键。</li></ol></li><li><p>作用：</p><ol><li>保证数据不能重复，保障数据完整性。</li><li>加快数据访问。</li></ol></li><li><p>查看唯一键：</p><p>语法： <code>show create table 表名 \\G;</code></p></li><li><p>添加唯一键：</p><ol><li>创建表时，直接在数据类型后写 <code>unique [key]</code>关键词。</li><li>创建表时，写 <code>unique (字段名);</code>创建一个唯一键。</li><li>创建表时，写 <code>unique (字段名1),unique (字段名2),……</code>创建多个唯一键。</li><li>创建表时，写 <code>unique (字段名1,字段名2,....)</code>创建组合唯一键。</li><li>修改表时使用 <code>alter table 表名 add unique (字段名);</code>添加一个唯一键。</li><li>修改表时使用 <code>alter table 表名 add unique (字段名1) , add unique(字段名2),....;</code>添加多个唯一键。</li><li>修改表时使用 <code>alter table 表名 add unique (字段名1,字段名2,....);</code>添加组合唯一键。</li><li>使用modify或change关键词也可以添加唯一键。</li></ol></li><li><p>删除唯一键： <code>alter table 表名 drop index 唯一键的名字;</code></p></li><li><p>查询唯一键的名字：<code>show create table 表名 \\G;</code>，唯一键可以自己命名，在适当位置命名即可。</p></li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 唯一键的创建与删除
/*
	一、创建表时创建唯一键
*/
# 4.a 创建表时，直接在数据类型后写 unique [key]关键词。
create table t1(
	id int,
    stuid char(11) unique comment &#39;学号&#39;,
    name varchar(10) unique,
);
# 4.b 创建表时，写 unique (字段名);创建一个唯一键。
create table t2(
	id int ,
    stuid char(11),
    name varchar(10),
    unique(stuid)
);
# 4.c 创建表时，写 unique (字段名1),unique (字段名2),……创建多个唯一键。
create table t3(
	id int ,
    stuid char(11),
    name varchar(10),
    unique(stuid),
    unique(name)
);
# 4.d 创建表时，写 unique (字段名1,字段名2,....)创建组合唯一键。
create table t4(
	id int,
    stuid char(11),
    name varchar(10),
     unique(stuid,name)
)
/*
	二、修改表时创建唯一键
*/
# 4.e 修改表时使用 alter table 表名 add unique (字段名);添加唯一键。
alter table t5 add unique (stuid);
# 4.f 修改表时使用 alter table 表名 add unique (字段名1)  , add unique(字段名2),....;添加多个唯一键。
alter table t6 add unique (stuid),add unique(name);
# 4.g 修改表时使用 alter table 表名 add unique (字段名1,字段名2,....);添加组合唯一键。
alter table t7 add unique (stuid,name);
/*
	三、删除唯一键
*/
alter table 表名 drop index 唯一键的名字;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04列属性——备注" tabindex="-1"><a class="header-anchor" href="#_04列属性——备注" aria-hidden="true">#</a> 04列属性——备注</h2><p>为了程序员之间的交流，使用comment在创建表时进行备注。实用查询显示创建表的语句查看备注，没啥可说的。</p><h2 id="_05注释" tabindex="-1"><a class="header-anchor" href="#_05注释" aria-hidden="true">#</a> 05注释</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 这是一个单行注释
-- 这是一个单行注释
/*
	这是一个多行注释
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),s=[a];function r(v,u){return e(),l("div",null,s)}const t=i(d,[["render",r],["__file","07列属性.html.vue"]]);export{t as default};
