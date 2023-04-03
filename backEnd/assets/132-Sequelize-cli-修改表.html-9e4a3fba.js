import{_ as e,p as i,q as n,a1 as s}from"./framework-96b046e1.js";const a={},l=s(`<h1 id="_32-sequelize-cli-修改表" tabindex="-1"><a class="header-anchor" href="#_32-sequelize-cli-修改表" aria-hidden="true">#</a> 32 -Sequelize-cli-修改表</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.如何修改表?
使用Sequelize-CLI管理数据库的目的就是为了监控数据库的变化
所以我们不能直接修改表的结构, 如果要修改, 必须通过migration文件修改
这样我们就能记录修改操作, 就能追踪修改过程, 就能回退到指定版本

2.修改表步骤
2.1 通过 migration:generate 创建迁移文件
2.2 在迁移文件中编写修改的内容
2.3 通过 db:migrate 执行编写好的迁移文件
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[l];function c(r,t){return i(),n("div",null,d)}const u=e(a,[["render",c],["__file","132-Sequelize-cli-修改表.html.vue"]]);export{u as default};
