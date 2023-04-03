import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_07-带参混合" tabindex="-1"><a class="header-anchor" href="#_07-带参混合" aria-hidden="true">#</a> 07 带参混合</h1><h2 id="_01-叙述" tabindex="-1"><a class="header-anchor" href="#_01-叙述" aria-hidden="true">#</a> 01 叙述</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
1.SASS中带参数的混合
SASS中带参数的混合和LESS中也一样
1.1不带默认值形参
1.2带默认值形参
1.3给指定参数赋值
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-示例" tabindex="-1"><a class="header-anchor" href="#_02-示例" aria-hidden="true">#</a> 02 示例</h2><h3 id="_2-1-普通带参混合" tabindex="-1"><a class="header-anchor" href="#_2-1-普通带参混合" aria-hidden="true">#</a> 2.1 普通带参混合</h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">whc</span><span class="token punctuation">(</span><span class="token variable">$w</span><span class="token punctuation">,</span> <span class="token variable">$h</span><span class="token punctuation">,</span> <span class="token variable">$c</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$w</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$h</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$c</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box1</span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">whc</span><span class="token punctuation">(</span>300px<span class="token punctuation">,</span> 300px<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">whc</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span> 200px<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-1-使用默认值" tabindex="-1"><a class="header-anchor" href="#_2-1-使用默认值" aria-hidden="true">#</a> 2.1 使用默认值</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">whc</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$w</span></span><span class="token punctuation">:</span> 100px<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$h</span></span><span class="token punctuation">:</span> 100px<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$c</span></span><span class="token punctuation">:</span> black<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$w</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$h</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$c</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box1</span><span class="token punctuation">{</span>
  <span class="token comment">//全部不适用默认值</span>
  <span class="token keyword">@include</span> <span class="token function">whc</span><span class="token punctuation">(</span>300px<span class="token punctuation">,</span> 300px<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
  <span class="token comment">//宽高使用默认值，颜色不使用默认值</span>
  <span class="token keyword">@include</span> <span class="token function">whc</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$c</span></span><span class="token punctuation">:</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[t];function i(l,o){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","07带参混合.html.vue"]]);export{d as default};
