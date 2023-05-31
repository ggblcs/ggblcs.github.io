import{_ as a,p as n,q as s,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_19-获取触发事件的元素" tabindex="-1"><a class="header-anchor" href="#_19-获取触发事件的元素" aria-hidden="true">#</a> 19 获取触发事件的元素</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentSong.url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>audio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@timeupdate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>timeupdate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">timeupdate</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentTime <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>currentTime
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code> e.target</code>可以获取到元素</p>`,4),c=[p];function o(u,l){return n(),s("div",null,c)}const r=a(e,[["render",o],["__file","19获取触发事件的元素.html.vue"]]);export{r as default};
