import{_ as e,p as n,q as s,a1 as a}from"./framework-96b046e1.js";const i={},d=a(`<h1 id="_11-noparse" tabindex="-1"><a class="header-anchor" href="#_11-noparse" aria-hidden="true">#</a> 11 noParse</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是noParse属性?
默认情况下无论我们导入的模块(库)是否依赖于其它模块(库), 都会去分析它的依赖关系
但是对于一些独立的模块(库)而言, 其根本不存在依赖关系, 但是webpack还是会去分析它的依赖关系
这样就大大降低了我们打包的速度.
所以对于一些独立的模块(库), 我们可以提前告诉webpack不要去分析它的依赖关系
这样就可以提升我们的打包速度.

那么如何告诉webpack这是一个独立的模块(库)呢?
我们可以通过noParse属性来告诉webpack
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[d];function r(c,t){return n(),s("div",null,l)}const v=e(i,[["render",r],["__file","11noParse.html.vue"]]);export{v as default};
