import{_ as e,p as s,q as n,a1 as i}from"./framework-96b046e1.js";const a={},d=i(`<h1 id="_21-js模块化使用" tabindex="-1"><a class="header-anchor" href="#_21-js模块化使用" aria-hidden="true">#</a> 21 js模块化使用</h1><p>跨模块使用方法：</p><p>独立性测试，是否能共享。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES6（并列）
a.js 变量aNum 方法 changeA
b.js 变量bNum 方法 changeB
mian.js 引入a.js b.js
判断能否在b.js中使用a.js的变量和方法。【不能，模块独立】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES6(层次)
a.js 变量aNum，方法changeA
b.js 引入a.js
main.js 引入b.js
判断能否在mian.js中使用a.js的变量和方法【不能】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>冗余测试
a.js 引入 c.js
b.js 引入 c.js
c.js 输出 helloC，自动执行
判断c.js中的语句能否自动输出【能，无论怎样引入】
main.js引入a.js b.js 引入c.js 看helloC是否输出，输出几次【输出，1次】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>多模块互动
a.js 导出数组 [&quot;m&quot;, &quot;n&quot;]
b.js 导入a.js 并给数组添加一项，&quot;w&quot;, &quot;q&quot;
main.js导入a.js b.js 会变成[&quot;m&quot;, &quot;n&quot;, &quot;w&quot;, &quot;q&quot;]? 【会变】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>结论
谁引用，谁能用，引用的引用不能用。
a. 在node环境中判断 【结果一样】
b. 在浏览器环境中判断 【结果一样】
c. 使用commonjs（require引入）判断【结果一样】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue全局用
在main.js导入后，其他组件都能用？【不能】
在App.js导入后，其他组件都能用？【不能】
只有use了，可以全局用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[d];function t(c,u){return s(),n("div",null,l)}const v=e(a,[["render",t],["__file","21js模块化使用.html.vue"]]);export{v as default};
