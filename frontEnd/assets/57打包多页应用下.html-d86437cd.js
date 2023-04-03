import{_ as e,p as n,q as i,a1 as l}from"./framework-96b046e1.js";const s={},a=l(`<h1 id="_57-打包多页应用下" tabindex="-1"><a class="header-anchor" href="#_57-打包多页应用下" aria-hidden="true">#</a> 57 打包多页应用下</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.当前打包多页面应用存在的问题
1.1有多少个界面就要编写多少个入口
1.2有多少个界面就要创建多少个HtmlWebpackPlugin
   并且每个HtmlWebpackPlugin中的配置都不一样

2.如何解决以上问题
2.1入口还是必须手动指定, 但是创建多少个HtmlWebpackPlugin和
如何配置HtmlWebpackPlugin可以通过代码动态生成
也就是原理和动态创建AddAssetHtmlPlugin/DllReferencePlugin一样
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[a];function c(t,r){return n(),i("div",null,d)}const u=e(s,[["render",c],["__file","57打包多页应用下.html.vue"]]);export{u as default};
