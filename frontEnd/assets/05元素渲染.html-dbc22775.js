import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_05-元素渲染" tabindex="-1"><a class="header-anchor" href="#_05-元素渲染" aria-hidden="true">#</a> 05 元素渲染</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> tiem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> temp <span class="token operator">=</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>time<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>hello88<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span> documet<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">setInterval</span><span class="token punctuation">(</span>tick<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token comment">// 只会更新变化的地方--算法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","05元素渲染.html.vue"]]);export{u as default};
