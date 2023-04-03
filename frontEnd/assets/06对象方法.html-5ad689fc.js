import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},o=e(`<h1 id="_06-对象方法" tabindex="-1"><a class="header-anchor" href="#_06-对象方法" aria-hidden="true">#</a> 06 对象方法</h1><p>028 对象方法写的比较啰嗦，特此总结</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 对象的操作</span>
obj<span class="token punctuation">.</span>xxx
obj<span class="token punctuation">[</span><span class="token constant">XXX</span><span class="token punctuation">]</span>
obj<span class="token punctuation">[</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">]</span>

<span class="token keyword">delete</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span>
assign 深拷贝

<span class="token comment">// 对象合并</span>
<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[o];function c(i,l){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","06对象方法.html.vue"]]);export{d as default};
