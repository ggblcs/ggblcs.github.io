import{_ as s,p as n,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_18-css兼容性处理" tabindex="-1"><a class="header-anchor" href="#_18-css兼容性处理" aria-hidden="true">#</a> 18 CSS兼容性处理</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> postcss postcss-loader postcss-preset-env <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>postcss-loader</code> 需要写在 <code>css-loader</code>的后面，<code>less-lodaer</code> 的前面。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;MiniCssExtractPlugin.loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// CSS 处理为一个单独文件</span>
        <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 不需配置的loader，写字符串</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;postcss-preset-env&quot;</span> <span class="token comment">// 能解决大多数样式兼容问题。</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&quot;less-loader&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>package.json</code> 配置兼容到什么程度。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">browserslint</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// &quot;ie &gt;= 8&quot;,</span>
    <span class="token string">&quot;last 2 version&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 所有浏览器最近两个版本。</span>
    <span class="token string">&quot;&gt;1%&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 覆盖99%的浏览器。</span>
    <span class="token string">&quot;not dead&quot;</span> <span class="token comment">// 不要已经倒闭的浏览器。</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function l(c,i){return n(),a("div",null,o)}const d=s(t,[["render",l],["__file","18CSS兼容性处理.html.vue"]]);export{d as default};
