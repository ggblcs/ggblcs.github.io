import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},p=e(`<h1 id="_21-copy-plugin" tabindex="-1"><a class="header-anchor" href="#_21-copy-plugin" aria-hidden="true">#</a> 21 copy-plugin</h1><h2 id="_1-说明" tabindex="-1"><a class="header-anchor" href="#_1-说明" aria-hidden="true">#</a> 1 说明</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是copy-webpack-plugin?
在打包项目的时候除了JS/CSS/图片/字体图标等需要打包以外, 可能还有一些相关的文档也需要打包
文档内容是固定不变的, 我们只需要将对应的文件拷贝到打包目录中即可
那么这个时候我们就可以使用copy-plugin来实现文件的拷贝

3.copy-webpack-plugin使用
https://www.webpackjs.com/plugins/copy-webpack-plugin/

3.1安装copy-webpack-plugin
npm install --save-dev copy-webpack-plugin

3.2配置copy-webpack-plugin
const CopyWebpackPlugin = require(&#39;copy-webpack-plugin&#39;);
plugins: [new CopyWebpackPlugin([
            {from:&quot;doc&quot;, to:&quot;./doc&quot;} //从doc目录拷贝到dist/bundle下的doc目录
        ])];
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-参数报错" tabindex="-1"><a class="header-anchor" href="#_2-参数报错" aria-hidden="true">#</a> 2 参数报错</h2><p>新版本的copyPlugin传入的参数不再是数组，而是对象，否则报错，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">CopyWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">patterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&quot;./src/static&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">&quot;static&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>from路径是基于配置文件<code>webpack.config.js</code>所在的路径作为根据。</p>`,7),c=[p];function l(t,o){return s(),a("div",null,c)}const r=n(i,[["render",l],["__file","21copy-plugin.html.vue"]]);export{r as default};
