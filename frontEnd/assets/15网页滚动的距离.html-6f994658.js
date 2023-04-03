import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},o=t(`<h1 id="_15-网页滚动的距离" tabindex="-1"><a class="header-anchor" href="#_15-网页滚动的距离" aria-hidden="true">#</a> 15 网页滚动的距离</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onscroll</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.IE9以及IE9以上的浏览器</span>
    <span class="token comment">// console.log(window.pageXOffset);</span>
    <span class="token comment">// console.log(window.pageYOffset);</span>

    <span class="token comment">// 2.标准模式下浏览器</span>
    <span class="token comment">// console.log(document.documentElement.scrollTop);</span>
    <span class="token comment">// console.log(document.documentElement.scrollLeft);</span>

    <span class="token comment">// 3.混杂(怪异)模式下浏览器</span>
    <span class="token comment">// console.log(document.body.scrollTop);</span>
    <span class="token comment">// console.log(document.body.scrollLeft);</span>

    <span class="token keyword">let</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getPageScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">getPageScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>pageXOffset<span class="token punctuation">)</span><span class="token punctuation">{</span>
            x <span class="token operator">=</span> window<span class="token punctuation">.</span>pageXOffset<span class="token punctuation">;</span>
            y <span class="token operator">=</span> window<span class="token punctuation">.</span>pageYOffset<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>compatMode <span class="token operator">===</span> <span class="token string">&quot;BackCompat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            x <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollLeft<span class="token punctuation">;</span>
            y <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            x <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollLeft<span class="token punctuation">;</span>
            y <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span> x<span class="token punctuation">,</span>
            <span class="token literal-property property">y</span><span class="token operator">:</span> y
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[o];function c(l,i){return s(),a("div",null,p)}const d=n(e,[["render",c],["__file","15网页滚动的距离.html.vue"]]);export{d as default};
