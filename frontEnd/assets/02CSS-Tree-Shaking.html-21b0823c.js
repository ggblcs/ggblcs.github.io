import{_ as e,p as n,q as i,a1 as s}from"./framework-96b046e1.js";const a={},l=s(`<h1 id="_02-css-tree-shaking" tabindex="-1"><a class="header-anchor" href="#_02-css-tree-shaking" aria-hidden="true">#</a> 02 CSS-Tree-Shaking</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.CSS模块Tree-Shaking
不光JS模块可以进行Tree-Shaking, CSS模块也可以进行Tree-Shaking

2.如何开启CSS模块Tree-Shaking
https://github.com/webpack-contrib/purifycss-webpack
2.1安装相关插件
npm i -D purifycss-webpack purify-css glob-all
2.2配置插件
const PurifyCSS = require(&quot;purifycss-webpack&quot;);
const glob = require(&quot;glob-all&quot;);

new PurifyCSS({
    paths: glob.sync([
        // 要做CSS Tree Shaking的路径文件
        path.resolve(__dirname, &quot;./*.html&quot;),
        path.resolve(__dirname, &quot;./src/js/*.js&quot;),
    ])
}),
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[l];function d(c,t){return n(),i("div",null,r)}const v=e(a,[["render",d],["__file","02CSS-Tree-Shaking.html.vue"]]);export{v as default};
