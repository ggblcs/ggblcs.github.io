import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},c=e(`<h1 id="_02-小程序页面背景色" tabindex="-1"><a class="header-anchor" href="#_02-小程序页面背景色" aria-hidden="true">#</a> 02 小程序页面背景色</h1><p>一看设计图，与默认背景色不一样，在配置中根本无法修改背景色。</p><p>方案一（建议）：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">page</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方案二(设置容器的最小高度为满屏，设置背景色)：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.jy-my-report-container</span> <span class="token punctuation">{</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #F3F4F6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[c];function o(i,l){return s(),a("div",null,p)}const u=n(t,[["render",o],["__file","02小程序页面背景色.html.vue"]]);export{u as default};
