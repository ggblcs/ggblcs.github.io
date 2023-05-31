import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const a={},d=s(`<h1 id="_01-js-tree-shaking" tabindex="-1"><a class="header-anchor" href="#_01-js-tree-shaking" aria-hidden="true">#</a> 01 JS-Tree-Shaking</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是Tree-Shaking?
过滤掉无用的JS代码和CSS代码, 我们称之为Tree-Shaking
例如: 在a.js中引入了b模块, b模块中有2个方法, 但是我只用到了1个方法
默认情况下会将b模块中所有代码都打包到a.js中,
为了提升网页性能降低打包体积, 我们可以只将用到的方法打包到a.js中

2.webpack中如何开启Tree-Shaking?
https://www.webpackjs.com/guides/tree-shaking/
2.1开发环境
webpack.config.js配置, 告诉webpack只打包导入模块中用到的内容
optimization: {
   usedExports: true
},
package.json配置, 告诉webpack哪些文件不做Tree-Shaking
&quot;sideEffects&quot;: [&quot;*.css&quot;, &quot;*.less&quot;, &quot;*.scss&quot;],

2.2生产环境
无需进行任何配置, webpack默认已经实现了Tree-Shaking

注意点:
- 只有ES Modle导入才支持Tree-Shaking
- 任何导入的文件都会受到 tree shaking 的影响。
这意味着，如果在项目中使用类似 css-loader 并导入 CSS 文件，
则需要将其添加到 side effect 列表中，以免在生产模式中无意中将它删除：
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[d];function c(r,v){return n(),i("div",null,l)}const u=e(a,[["render",c],["__file","01JS-Tree-Shaking.html.vue"]]);export{u as default};
