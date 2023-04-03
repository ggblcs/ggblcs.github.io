import{_ as e,p as n,q as i,a1 as a}from"./framework-96b046e1.js";const s={},l=a(`<h1 id="_56-打包多页应用上" tabindex="-1"><a class="header-anchor" href="#_56-打包多页应用上" aria-hidden="true">#</a> 56 打包多页应用上</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
0.需求利用webpack打包生成两个页面
一个页面叫做index, 一个页面叫做detail

1.如何打包多也应用?
1.1有多少个界面就指定多少个入口, 并给不同的入口指定不同的名称
1.2有多少个界面就创建多少个HtmlWebpackPlugin, 并给不同的界面配置不同的名称
1.3在HtmlWebpackPlugin中通过chunks属性告知需要插入到当前界面的文件
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[l];function c(t,r){return n(),i("div",null,d)}const m=e(s,[["render",c],["__file","56打包多页应用上.html.vue"]]);export{m as default};
