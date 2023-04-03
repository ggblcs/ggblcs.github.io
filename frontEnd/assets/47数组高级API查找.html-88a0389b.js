import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_47-数组高级api查找" tabindex="-1"><a class="header-anchor" href="#_47-数组高级api查找" aria-hidden="true">#</a> 47 数组高级API查找</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//1 indexOf从左往右查找，找到返回索引，找不到返回-1</span>
<span class="token keyword">let</span> index1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//2 lastIndexOf从右往左查找，找到返回索引，找不到返回-1</span>
<span class="token keyword">let</span> index2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//3 includes从左往右查找，找到返回true，找不到返回fals</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//==新学方法==</span>
<span class="token comment">//4 findIndex方法，定制版的indexOf，找到返回索引，找不到返回-1</span>
<span class="token keyword">let</span> index3 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">currentValue<span class="token punctuation">,</span> currentIndex<span class="token punctuation">,</span> currentArray</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(currentValue, currentIndex, currentArray);</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">===</span> currentValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//找数组中的10</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">//5 find方法返回找到的元素，找不到就返回undefined</span>
<span class="token keyword">let</span> value <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">currentValue<span class="token punctuation">,</span> currentIndex<span class="token punctuation">,</span> currentArray</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(currentValue, currentIndex, currentArray);</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">===</span> currentValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//找数组中的10</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// console.log(value);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>作业：手撸find和findIndex。</p>`,3),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","47数组高级API查找.html.vue"]]);export{r as default};
