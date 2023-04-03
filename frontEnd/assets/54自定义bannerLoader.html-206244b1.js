import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_54-自定义bannerloader" tabindex="-1"><a class="header-anchor" href="#_54-自定义bannerloader" aria-hidden="true">#</a> 54 自定义bannerLoader</h1><p>给文件加上作者信息</p><p><code>webpack.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;./loaders/banner-loader&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">&#39;老王&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>schema.json</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;Object&quot;</span><span class="token punctuation">,</span> <span class="token comment">// options值类型</span>
    <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token comment">// anthor 类型</span>
    <span class="token literal-property property">additionalProperties</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 不允许在options 上附加 额外属性，否则报错</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>banber-loader/index.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./schema.json&quot;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// schema 对options 的验证规则</span>
    <span class="token comment">// schema 符合 JSON schema 规范</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span>
    <span class="token keyword">const</span> prefix <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    /*
    * Author </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>options<span class="token punctuation">.</span>author<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
    */
   </span><span class="token template-punctuation string">\`</span></span>
   <span class="token keyword">return</span> prefix <span class="token operator">+</span> content
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(r,l){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","54自定义bannerLoader.html.vue"]]);export{u as default};
