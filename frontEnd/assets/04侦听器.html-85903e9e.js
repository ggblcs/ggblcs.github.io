import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_04-侦听器" tabindex="-1"><a class="header-anchor" href="#_04-侦听器" aria-hidden="true">#</a> 04 侦听器</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">message</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 初始化时就调用函数，立即执行。</span>
        <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 监听不到对象的属性变化，需要使用深度监听。</span>
        <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;obj.name&#39;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 只监听name属性</span>
        <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 情况一：obj: {name: &#39;zs&#39;}</span>
<span class="token comment">// this.obj = { age: 22 } // 具有响应式 watch监听到</span>
<span class="token comment">// this.obj = {name: &#39;ls&#39;} // 响应式 watch监听到</span>
<span class="token comment">// this.obj.name = &#39;ls&#39; // 响应式 watch监听不到</span>
<span class="token comment">// this.obj.age = 33 // 响应式 watch监听不到</span>

<span class="token comment">// 情况二: obj:{person: {name: &#39;zs&#39;}}</span>
<span class="token comment">// this.obj = { age: 14 } // 响应式 watch监听到</span>
<span class="token comment">// this.obj = { person:  {name: &#39;ls&#39;}} // 响应式 watch监听到</span>
<span class="token comment">// this.obj.person.name = &#39;ls&#39; // 响应式 watch监不听到</span>
<span class="token comment">// this.obj.person.age = &#39;18&#39; // 响应式 watch监不听到</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">say2</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token comment">// 两个方法等效，都不是箭头函数，前者是ES6语法，后者是之前的语法。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","04侦听器.html.vue"]]);export{r as default};
