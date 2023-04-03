import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_48-数组高级api过滤" tabindex="-1"><a class="header-anchor" href="#_48-数组高级api过滤" aria-hidden="true">#</a> 48 数组高级API过滤</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//1 filter将满足条件的元素(返回true)添加到一个新数组中</span>
 <span class="token keyword">let</span> newArray <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">currentValue<span class="token punctuation">,</span> currentIndex<span class="token punctuation">,</span> currentArray</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span><span class="token punctuation">(</span>currentValue <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>

 <span class="token comment">//2 map方法将数组中满足条件的元素映射到新数组中。</span>
 <span class="token comment">//映射就是先创建一个长度一样的数组，里面全是undefined，</span>
 <span class="token comment">// 当有元素条件满足时，相对应的undefined变为数组值</span>
<span class="token keyword">let</span> newArray2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">currentValue<span class="token punctuation">,</span> currentIndex<span class="token punctuation">,</span> currentArray</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>currentValue <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> currentValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArray2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[3, 9]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(l,u){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","48数组高级API过滤.html.vue"]]);export{r as default};
