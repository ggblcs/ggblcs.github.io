import{_ as e,p as i,q as n,a1 as s}from"./framework-96b046e1.js";const l={},d=s(`<h1 id="_47-provide-plugin" tabindex="-1"><a class="header-anchor" href="#_47-provide-plugin" aria-hidden="true">#</a> 47 Provide-Plugin</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.模块各种引入方式
1.1在HTML中全局引入
&lt;script src=&quot;https://code.jquery.com/jquery-3.4.1.js&quot;&gt;&lt;/script&gt;
特点: 什么地方都可以使用
1.2通过npm安装通过import局部引入
特点: 只能在import导入的模块中使用

2.什么是Provide-Plugin?
https://www.webpackjs.com/plugins/provide-plugin/
自动加载模块，而不必到处 import 或 require
默认情况下模块中的数据都是私有的, 所以想要使用模块必须先导入模块
如果说在a.js中想要使用jQuery, 那么就必须在a.js中导入jQuery模块
如果说在b.js中想要使用jQuery, 那么就必须在b.js中导入jQuery模块
new Webpack.ProvidePlugin({
    $: &quot;jquery&quot;
})
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[d];function a(c,u){return i(),n("div",null,r)}const t=e(l,[["render",a],["__file","47Provide-Plugin.html.vue"]]);export{t as default};
