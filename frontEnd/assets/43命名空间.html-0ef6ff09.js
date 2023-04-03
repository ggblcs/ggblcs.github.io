import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_43-命名空间" tabindex="-1"><a class="header-anchor" href="#_43-命名空间" aria-hidden="true">#</a> 43 命名空间</h1><p>全都用<code>this.xxx</code>，store中不同模块有action同名怎么办?</p><p>命名空间，（讲的是怎么区分不同的模块）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token comment">// 使用</span>
$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>a<span class="token punctuation">.</span>xxx <span class="token comment">// 不变，与之前一样</span>
$store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span><span class="token string">&quot;a/xxx&quot;</span><span class="token punctuation">]</span> <span class="token comment">// getters 变化</span>
$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;a/xxx&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// mutations 变化</span>

<span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;xxxA&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">xxxA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>官网上有如何在组合式API中使用。</p>`,5),o=[e];function c(u,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","43命名空间.html.vue"]]);export{r as default};
