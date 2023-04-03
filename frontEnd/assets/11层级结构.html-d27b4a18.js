import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_11-层级结构" tabindex="-1"><a class="header-anchor" href="#_11-层级结构" aria-hidden="true">#</a> 11 层级结构</h1><blockquote><p>提炼：和LESS一样，支持&amp;（听懂了就没必要往下看了）</p></blockquote><h2 id="_01-叙述" tabindex="-1"><a class="header-anchor" href="#_01-叙述" aria-hidden="true">#</a> 01 叙述</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
1.SASS中的层级结构
和LESS一样支持嵌套, 默认情况下嵌套的结构会转换成后代选择器
和LESS一样也支持通过&amp;符号不转换成后代选择器（交集选择器）
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-示例" tabindex="-1"><a class="header-anchor" href="#_02-示例" aria-hidden="true">#</a> 02 示例</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.father</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:hover</span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[i];function l(p,d){return s(),a("div",null,c)}const r=n(t,[["render",l],["__file","11层级结构.html.vue"]]);export{r as default};
