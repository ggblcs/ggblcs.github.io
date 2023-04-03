import{_ as n,p as e,q as s,a1 as i}from"./framework-96b046e1.js";const l={},d=i(`<h1 id="_12-mongoose开篇" tabindex="-1"><a class="header-anchor" href="#_12-mongoose开篇" aria-hidden="true">#</a> 12 -mongoose开篇</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是Mongoose?
- Mongoose和MySQL的Sequelize一样, 都是NodeJS中操作数据库的对象模型工具
- Mongoose使用面向对象的思想对原生的mongoDB命令进行了封装
http://www.mongoosejs.net/
https://mongoosejs.com/

2.Mongoose和MongoDB映射关系
在Mongoose中JS中的一个模型就对应数据库中的一个集合
在Mongoose中JS中的一个对象就对应集合中的一个文档
在Mongoose中JS中的一个对象的属性就对应文档的一个字段

// 1.定义集合规则
cosnt 规则名称 = new Schema({
    name: String,
    age: Number
});

// 2.利用规则创建一个集合
let User = mongoose.model(&#39;User&#39;, userSchema);

// 3.创建一个文档
let u = new User({
    name:&#39;zs&#39;,
    age:18
});

// 4.操作集合和文档
只要是通过Mongoose定义的模型, 那么Mongoose就会自动给这个模型添加很多操作集合和文档的方法
以后我们就可以直接通过模型操作集合, 通过模型创建出来的对象操作数据
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[d];function a(v,c){return e(),s("div",null,o)}const r=n(l,[["render",a],["__file","12-mongoose开篇.html.vue"]]);export{r as default};
