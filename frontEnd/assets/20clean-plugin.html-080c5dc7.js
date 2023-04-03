import{_ as n,p as e,q as a,a1 as s}from"./framework-96b046e1.js";const l={},i=s(`<h1 id="_20-clean-plugin" tabindex="-1"><a class="header-anchor" href="#_20-clean-plugin" aria-hidden="true">#</a> 20 clean-plugin</h1><blockquote><p>清除上一次打包留下来的（但这次打包不会用到的）（位于dist/bundle目录下的）垃圾。</p><p>原理：先清空打包目录再打包。</p></blockquote><p><strong>webpack官网没，但常用</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.什么是clean-webpack-plugin?
webpack-clean-plugin会在打包之前将我们指定的文件夹清空
应用场景每次打包前将dist目录清空, 然后再存放新打包的内容, 避免新老混淆问题

3.clean-webpack-plugin使用（文档链接）
https://github.com/johnagan/clean-webpack-plugin
--&gt;</span>

<span class="token comment">&lt;!--
3.1安装clean-webpack-plugin
npm install --save-dev clean-webpack-plugin
3.2配置clean-webpack-plugin
const { CleanWebpackPlugin } = require(&#39;clean-webpack-plugin&#39;);
plugins: [new CleanWebpackPlugin()]
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置<code>webpack.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[i];function p(t,d){return e(),a("div",null,c)}const o=n(l,[["render",p],["__file","20clean-plugin.html.vue"]]);export{o as default};
