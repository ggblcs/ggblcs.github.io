import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_07-弹窗广告练习" tabindex="-1"><a class="header-anchor" href="#_07-弹窗广告练习" aria-hidden="true">#</a> 07 弹窗广告练习</h1><p>神奇用法：动画队列，依次执行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.ad&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slideDown</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fadeOut</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fadeIn</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),c=[e];function o(u,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","07弹窗广告练习.html.vue"]]);export{r as default};
