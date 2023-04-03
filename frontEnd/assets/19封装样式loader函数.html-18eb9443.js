import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_19-封装样式loader函数" tabindex="-1"><a class="header-anchor" href="#_19-封装样式loader函数" aria-hidden="true">#</a> 19 封装样式loader函数</h1><p>webpack中有很多重复配置，封装一下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getStyleLoader</span><span class="token punctuation">(</span><span class="token parameter">pre</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
        <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;poostcss-preset-env&quot;</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        pre
    <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span> <span class="token comment">// 没有参数时过滤掉undefined。</span>
<span class="token punctuation">}</span>

 <span class="token function">getStyleLoader</span><span class="token punctuation">(</span><span class="token string">&quot;sass-loader&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 调用函数获取loader</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","19封装样式loader函数.html.vue"]]);export{u as default};
