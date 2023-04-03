import{_ as s,p as n,q as a,a1 as e}from"./framework-96b046e1.js";const l={},i=e(`<h1 id="_14-sass-loader" tabindex="-1"><a class="header-anchor" href="#_14-sass-loader" aria-hidden="true">#</a> 14 sass-loader</h1><p>需要安装<code>node-sass</code>和<code>sass-loader</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev sass-loader
<span class="token function">npm</span> <span class="token function">install</span> --save-dev sass-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--
1.scss-loader
自动将scss转换为CSS

2.scss-loader使用:
2.0安装scss
npm install --save-dev node-sass
2.1安装less-loader
npm install --save-dev sass-loader
2.2配置less-loader
{
  test: /\\.scss$/,
  use: [{
      loader: &quot;style-loader&quot; // 将 JS 字符串生成为 style 节点
  }, {
      loader: &quot;css-loader&quot; // \b将 CSS 转化成 CommonJS 模块
  }, {
      loader: &quot;sass-loader&quot; // 将 Sass 编译成 CSS
  }]
}
// use: [&#39;style-loader&#39;,&#39;css-loader&#39;, &#39;sass-loader&#39;] 
注意点:
因为loader是从右至左从下至上,所以必须先由sass-loader处理往后才能交给其他loader处理
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 打包SCSS规则</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;style-loader&quot;</span> <span class="token comment">// 将 JS 字符串生成为 style 节点</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span> <span class="token comment">// \b将 CSS 转化成 CommonJS 模块</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;sass-loader&quot;</span> <span class="token comment">// 将 Sass 编译成 CSS</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[i];function o(d,r){return n(),a("div",null,t)}const p=s(l,[["render",o],["__file","14sass-loader.html.vue"]]);export{p as default};
