import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_05-运算" tabindex="-1"><a class="header-anchor" href="#_05-运算" aria-hidden="true">#</a> 05 运算</h1><h2 id="_01-叙述" tabindex="-1"><a class="header-anchor" href="#_01-叙述" aria-hidden="true">#</a> 01 叙述</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.SASS中的运算?
SASS中的运算和LESS也一样, 都支持+ - * / 运算
注意点: 无论是LESS中的运算还是SASS中的运算都需要加上()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-示例" tabindex="-1"><a class="header-anchor" href="#_02-示例" aria-hidden="true">#</a> 02 示例</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">div</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token comment">//运算</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>-200px <span class="token operator">*</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[i];function c(l,o){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","05运算.html.vue"]]);export{r as default};
