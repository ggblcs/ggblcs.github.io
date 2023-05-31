import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_06-重载函数的类型" tabindex="-1"><a class="header-anchor" href="#_06-重载函数的类型" aria-hidden="true">#</a> 06 重载函数的类型</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 重载函数的类型可以通过包含多个调用签名的对象类型来表示</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token number">0</span> <span class="token operator">|</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 也可用下面方式表示</span>
<span class="token keyword">let</span> f2<span class="token operator">:</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token number">0</span><span class="token operator">|</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// 注意点：函数实现的函数签名不属于重载函数的调用签名之一。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","06重载函数的类型.html.vue"]]);export{r as default};
