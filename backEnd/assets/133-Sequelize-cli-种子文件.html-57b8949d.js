import{_ as e,p as i,q as n,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_33-sequelize-cli-种子文件" tabindex="-1"><a class="header-anchor" href="#_33-sequelize-cli-种子文件" aria-hidden="true">#</a> 33 -Sequelize-cli-种子文件</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
0.什么是种子文件?
Sequelize-CLI中的种子文件是专门用于编写测试数据的
我们知道在Sequelize-CLI中不同的阶段会创建不同的数据库
但是刚创建出来的数据库是没有数据的, 所以为了方便我们在不同的阶段演示和调试
我们可以在种子文件中提前编写测试数据, 以便于我们在不同的阶段中使用

1.创建种子文件
npx  sequelize seed:generate --name xxx

2.执行种子文件
npx sequelize db:seed --seed=[fileName, ...]; // 执行指定文件
npx sequelize db:seed:all // 执行所有种子文件

3.记录种子文件操作记录
&quot;seederStorage&quot;: &quot;sequelize&quot;

4.回退到某个时刻
npx sequelize db:seed:undo --seed=[fileName, ...];  // 回退指定种子操作
npx sequelize db:seed:undo:all  // 回退所有
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function c(u,v){return i(),n("div",null,a)}const m=e(l,[["render",c],["__file","133-Sequelize-cli-种子文件.html.vue"]]);export{m as default};
