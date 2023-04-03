import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},o=t(`<h1 id="_32-监听滚动" tabindex="-1"><a class="header-anchor" href="#_32-监听滚动" aria-hidden="true">#</a> 32 监听滚动</h1><p>对联广告练习</p><h2 id="_01-知识补充" tabindex="-1"><a class="header-anchor" href="#_01-知识补充" aria-hidden="true">#</a> 01 知识补充</h2><p>scroll监听网页滚动。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scroll</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.1获取网页滚动的偏移位</span>
    <span class="token keyword">var</span> offset <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;html,body&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scrollTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 1.2判断网页是否滚动到了指定的位置</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>offset <span class="token operator">&gt;=</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 1.3显示广告</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token comment">// 1.4隐藏广告</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[o];function e(i,u){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","32监听滚动.html.vue"]]);export{k as default};
