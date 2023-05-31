import{_ as i,p as e,q as s,a1 as n}from"./framework-96b046e1.js";const d={},l=n(`<h1 id="_09-imports-loader" tabindex="-1"><a class="header-anchor" href="#_09-imports-loader" aria-hidden="true">#</a> 09 imports-loader</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是imports-loader?
https://www.webpackjs.com/loaders/imports-loader/
https://www.npmjs.com/package/imports-loader
imports-loader和Provide-Plugin功能一样可以实现全局导入,
但是imports-loader的功能比Provide-Plugin更强大,
imports-loader除了可以实现全局导入以外, 还可以修改全局this指向
默认情况下模块中的this指向一个空对象, 我们可以通过imports-loader实现让this指向window

2.imports-loader注意点:
2.1在企业开发中如何需要实现全局导入, 更推荐使用ProvidePlugin来实现
   因为ProvidePlugin是webpack内置的官方插件更靠谱
2.2使用imports-loader修改this指向, 系统会自动将我们的代码放到一个立即执行函数中
这就导致了在打包时候import不在第一行, 会报错
2.3如何解决?
无需修改this指向, 直接在模块中使用window
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[l];function a(o,t){return e(),s("div",null,r)}const c=i(d,[["render",a],["__file","09imports-loader.html.vue"]]);export{c as default};
