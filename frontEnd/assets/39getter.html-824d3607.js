import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_39-getter" tabindex="-1"><a class="header-anchor" href="#_39-getter" aria-hidden="true">#</a> 39 getter</h1><p>可以理解为store中的计算属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">reverseMsg</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> state<span class="token punctuation">.</span>msg<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

$store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>reverseMsg
$store<span class="token punctuation">.</span>reverseMsg <span class="token comment">// 有疑问，那个对？</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(i,u){return s(),a("div",null,o)}const l=n(e,[["render",c],["__file","39getter.html.vue"]]);export{l as default};
