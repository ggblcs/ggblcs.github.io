import{_ as n,p as i,q as e,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_01-mongodb开篇" tabindex="-1"><a class="header-anchor" href="#_01-mongodb开篇" aria-hidden="true">#</a> 01 -MongoDB开篇</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是MongoDB?
MongoDB和MySQL一样都是数据库, 都是存储数据的仓库,
不同的是MySQL是关系型数据库, 而MongoDB是非关系型数据库

2.什么是非关系型数据库?
- 在&#39;关系型数据库&#39;中, 数据都是存储在表中的, 对存储的内容有严格的要求
  因为在创建表的时候我们就已经规定了表中有多少个字段,
                          已经规定了每个字段将来要存储什么类型数据,
                          已经规定了每个字段将来是否可以为空,是否必须唯一等等

- 在&#39;非关系型数据库&#39;中, 没有表概念, 所以存储数据更加灵活
  因为不需要创建表,所以也没有规定有哪些字段,
                       也没有规定每个字段数据类型,
                       也没有规定每个字段将来是否可以为空,是否必须唯一等等

- &#39;关系型数据库&#39;由于操作的都是结构化的数据, 所以我们需要使用结构化语言SQL来操作
- &#39;非关系型数据库&#39;由于数据没有严格的结构要求, 所以无需使用SQL来操作

3.什么是MongoDB?
存储文档(BSON)的非关系型数据库
--&gt;</span>
<span class="token comment">&lt;!--
例如在MySQL中:
|--------------------------------------------------------|
|   name(varchar(255) not null)   |    age(int unique)   |
|--------------------------------------------------------|
我们可以把            &#39;zs&#39;, 33        保存到表中
但是我们不能将         33, &#39;zs&#39;       保存到表中
但我们不能能将         null, 33       保存到表中
但是我们不能将         &#39;zs&#39;, 33,  &#39;男&#39; 保存到表中
但是我们不能再次将     &#39;zs&#39;, 33        保存到表中
--&gt;</span>
<span class="token comment">&lt;!--
例如在MongoDB中:
我们可以把         {name: &#39;zs&#39;, age: 33};              保存到集合中
我们也可以把       {name: 33, age: &#39;zs&#39;};              保存到集合中
我们也可以把       {name: null, age: 33};              保存到集合中
我们也可以把       {name: &#39;zs&#39;, age: 33, gender:&#39;男&#39;}; 保存到集合中
但是我们可以再次将 {name: &#39;zs&#39;, age: 33};              保存到集合中

- &#39;非关系型数据库&#39;可以看做是&#39;关系型数据库&#39;的功能阉割版本,
  通过减少用不到或很少用的功能，从而提升数据库的性能
--&gt;</span>
<span class="token comment">&lt;!--
4.MongoDB是如何存储文档的?
MySQL中所有的数据都是存储在表中的, 而MongoDB中所有的数据都是存储在集合中的
4.1MySQL

                |--行1
        |--表1--|--行2
数据库--|       |--行3
        |--表2
        |--... ...

4.2MongoDB

                  |--文档1
        |--集合1--|--文档2
数据库--|         |--文档3
        |--集合2
        |--... ...
--&gt;</span>
<span class="token comment">&lt;!--
5.企业开发如何选择?
- 关系型数据库和非关系型数据库之间并不是替代关系, 而是互补关系
所以在企业开发中大部分情况是结合在一起使用.
- 对于数据模型比较简单、数据性能要求较高、数据灵活性较强的数据, 我们存储到非关系型数据库中
相反则存储到关系型数据库中
- 具体使用: 会在项目中实现
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(c,m){return i(),e("div",null,v)}const u=n(l,[["render",a],["__file","01-MongoDB开篇.html.vue"]]);export{u as default};
