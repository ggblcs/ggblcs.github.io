import{_ as n,p as i,q as e,a1 as l}from"./framework-96b046e1.js";const s={},d=l(`<h1 id="_10-数据库开篇" tabindex="-1"><a class="header-anchor" href="#_10-数据库开篇" aria-hidden="true">#</a> 10 -数据库开篇</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是数据库?
- 数据库就是存储数据的仓库
- 数据库和Excel很像, Excel本质是一个文件， 数据库本质上也是一个文件，
- 数据库和Excel很像, Excel文件中可以有很多的表, 一个数据库中也有很多的表
- 数据库和Excel很像, Excel文件的每张表就是用来存储数据的, 数据库文件的每张表也是用来存储数据的
- 所以学习数据库和学习Excel差不多,
  就是学习如何新建数据库文件,如何在数据库中新建表,如何往表中存储数据和操作表中的数据

2.什么是MySQL?
-  MySQL是由瑞典AB 公司开发&quot;关系型&quot;数据，目前属于 Oracle 旗下产品
-  由于MySQL是开源免费的, 所以现在是市面上最受欢迎的数据库之一

3.什么是关系型数据库?
- 3.1数据库萌芽阶段:
- 最初程序员们把磁盘上的文件当做数据库来使用,但是由于文件不方便管理和不安全，
  所以后来就有了第一代数据库(层次模型数据库和网状模型数据库)
  + 网状模型数据库是层次模型数据库的升级版
  + 层次模型数据库类似于HTML结构, 是通过树状结构来保存管理数据的
  + 在层次模型数据库中有且仅有一个结点没有父结点，它就是根结点
  + 在层次模型数据库中其它结点只能有一个父结点
  + 在层次模型数据库中所有的子节点不能脱离父节点而单独存在
- 后来由于层次模型和网状模型数据库的结构比较复杂，不利于数据库的维护和重建
  所以就有了第二代数据库(关系型数据库和非关系型数据库)

- 3.2第一代数据库:
- 层次模型数据库
    + 典型代表是IBM公司的IMS（Information Management System）数据库管理系统
- 网状模型数据库
    + 电信代表是HP公司的IMAGE、Cullinet Software公司的 IDMS、Univac公司的 DMS1100

- 3.3第二代数据库:
- 关系型数据库
    + 每个表都是独立的
    + 表与表之间通过公共字段来建立关系(例如ID字段)
    + 多表查询效率低
    + SQL Server/Oracle/MySQL

- 非关系型数据库
    + 解决了关系型数据库多表查询的效率问题
    + Redis、Mongodb等
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function a(c,r){return i(),e("div",null,v)}const u=n(s,[["render",a],["__file","10-数据库开篇.html.vue"]]);export{u as default};
