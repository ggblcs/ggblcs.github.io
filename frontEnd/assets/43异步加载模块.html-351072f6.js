import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const d={},a=s(`<h1 id="_43-异步加载模块" tabindex="-1"><a class="header-anchor" href="#_43-异步加载模块" aria-hidden="true">#</a> 43 异步加载模块</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是异步加载模块?
同步加载: import $ from &#39;jquery&#39;;
例如: 在index.js中导入了10个模块, 那么只要index.js被执行, 就会一次性将10个模块加载进来
异步加载: import(&#39;jquery&#39;).then(({default: $ }) =&gt; {使用模块代码});
例如: 在index.js中导入了10个模块, 那么哪怕index.js被执行, 也要看是否满足加载条件才去加载

特点:
对于异步加载的模块无需配置, webpack会自动分割
https://webpack.js.org/guides/lazy-loading/
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[a];function r(t,c){return n(),i("div",null,l)}const v=e(d,[["render",r],["__file","43异步加载模块.html.vue"]]);export{v as default};
