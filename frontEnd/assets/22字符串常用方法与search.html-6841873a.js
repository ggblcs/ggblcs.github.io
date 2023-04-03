import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_22-字符串常用方法与search" tabindex="-1"><a class="header-anchor" href="#_22-字符串常用方法与search" aria-hidden="true">#</a> 22 字符串常用方法与search</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 字符串常用方法与search</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;http://www.baidu.com&quot;</span>
<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">w</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;w&#39;, &#39;w&#39;, &#39;w&#39; ]</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> val <span class="token keyword">of</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
[ &#39;w&#39;, index: 7, input: &#39;http://www.baidu.com&#39;, groups: undefined ]
[ &#39;w&#39;, index: 8, input: &#39;http://www.baidu.com&#39;, groups: undefined ]
[ &#39;w&#39;, index: 9, input: &#39;http://www.baidu.com&#39;, groups: undefined ]
    */</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 7</span>
<span class="token comment">// 返回第一个w所在位置，从0开始，找不到返回-1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 7</span>
<span class="token comment">// 可以使用正则</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 7</span>
<span class="token comment">// 返回第一个w所在位置</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// -1</span>
<span class="token comment">// 不能使用正则</span>
<span class="token keyword">let</span> str_date <span class="token operator">=</span> <span class="token string">&quot;2022/12-03&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str_date<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\/-]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;2022&#39;, &#39;12&#39;, &#39;03&#39; ]</span>
<span class="token comment">// split支持正则表达式</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","22字符串常用方法与search.html.vue"]]);export{r as default};
