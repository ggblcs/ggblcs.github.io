import{_ as s,p as n,q as a,a1 as p}from"./framework-96b046e1.js";const e={},t=p(`<h1 id="_23-压缩css代码" tabindex="-1"><a class="header-anchor" href="#_23-压缩css代码" aria-hidden="true">#</a> 23 压缩CSS代码</h1><p>搭配css-plugin使用。</p><p>如果将<code>webpack.config.js</code>文件中的模式改为production模式，则 js 代码在打包时会自动被压缩。</p><p><strong>以下压缩也必须在production模式下进行</strong></p><blockquote><p>由于css代码压缩需要配置优化项optimization，这会覆盖默认配置</p><p>导致 js 代码在production模式下不会自动压缩</p><p>所以需要在配置项新下载 JS 代码压缩插件</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>
<span class="token number">3</span><span class="token punctuation">.</span>mini<span class="token operator">-</span>css<span class="token operator">-</span>extract<span class="token operator">-</span>plugin压缩css
<span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>npmjs<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token keyword">package</span><span class="token operator">/</span>mini<span class="token operator">-</span>css<span class="token operator">-</span>extract<span class="token operator">-</span>plugin

<span class="token number">3.1</span>安装<span class="token constant">JS</span>代码压缩插件
npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev terser<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin

<span class="token number">3.2</span>安装<span class="token constant">CSS</span>代码压缩插件
npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev optimize<span class="token operator">-</span>css<span class="token operator">-</span>assets<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin

<span class="token number">3.3</span>导入插件
<span class="token keyword">const</span> TerserJSPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;terser-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> OptimizeCSSAssetsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">3.4</span>配置webpack优化项<span class="token operator">--</span><span class="token operator">-</span>直接写在配置文件根部，第一个花括号里
<span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">TerserJSPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token literal-property property">注意</span><span class="token operator">:</span> 由于配置了webpack的optimization<span class="token punctuation">.</span>minimizer项目会覆盖默认的<span class="token constant">JS</span>压缩选项<span class="token punctuation">,</span>
所以<span class="token constant">JS</span>代码也需要通过插件自己压缩
<span class="token operator">--</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[t];function c(l,r){return n(),a("div",null,o)}const u=s(e,[["render",c],["__file","23压缩CSS代码.html.vue"]]);export{u as default};
