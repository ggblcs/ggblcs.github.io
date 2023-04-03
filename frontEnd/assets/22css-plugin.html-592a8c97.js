import{_ as i,p as e,q as n,a1 as s}from"./framework-96b046e1.js";const l={},a=s(`<h1 id="_22-css-plugin" tabindex="-1"><a class="header-anchor" href="#_22-css-plugin" aria-hidden="true">#</a> 22 css-plugin</h1><p>全称：<code>MiniCssExtractPlugin</code>。</p><p>作用：将css单独放在一个文件中而不是直接插入header</p><h2 id="_01-说明" tabindex="-1"><a class="header-anchor" href="#_01-说明" aria-hidden="true">#</a> 01 说明</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是mini-css-extract-plugin?
mini-css-extract-plugin是一个专门用于将打包的CSS内容提取到单独文件的插件
&gt; 前面我们通过style-loader打包的CSS都是直接插入到head中的

2.mini-css-extract-plugin使用
https://webpack.js.org/plugins/mini-css-extract-plugin/
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
2.1mini-css-extract-plugin安装
npm install --save-dev mini-css-extract-plugin

2.2配置mini-css-extract-plugin
const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);
new MiniCssExtractPlugin({
    filename: &#39;./css/[name].css&#39;,
})

2.3替换style-loader
loader: MiniCssExtractPlugin.loader,

注意点: 如果相关文件资源无法显示, 需要根据打包后的结构手动设置公开路径
options: {
    publicPath: &quot;xxx&quot;
}
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-注意" tabindex="-1"><a class="header-anchor" href="#_02-注意" aria-hidden="true">#</a> 02 注意</h2><ol><li>需要将<code>style-loader</code>（作用是将css代码插入header标签中）替换掉，替换为<code>MiniCssExtractPlugin.loader</code>（对象名.属性）。</li><li>该插件自动打包好单独的CSS文件后，会自动插入到<code>index.html</code>文件中。</li></ol>`,8),d=[a];function c(r,t){return e(),n("div",null,d)}const v=i(l,[["render",c],["__file","22css-plugin.html.vue"]]);export{v as default};
