import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},t=e(`<h1 id="_04-变量插值" tabindex="-1"><a class="header-anchor" href="#_04-变量插值" aria-hidden="true">#</a> 04 变量插值</h1><h2 id="_01-叙述" tabindex="-1"><a class="header-anchor" href="#_01-叙述" aria-hidden="true">#</a> 01 叙述</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.什么是变量插值?
如果是属性的取值可以直接使用变量,
但是如果是属性名称或者选择器名称并不能直接使用变量, 必须使用变量插值的格式

2.SASS中的变量插值
SASS中的变量插值和LESS中也一样, 只不过格式不一样
LESS变量插值格式: @{变量名称}
SASS变量插值格式: #{$变量名称}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-示例" tabindex="-1"><a class="header-anchor" href="#_02-示例" aria-hidden="true">#</a> 02 示例</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$size</span></span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token comment">//属性名称</span>
<span class="token property"><span class="token variable">$w</span></span><span class="token punctuation">:</span> width<span class="token punctuation">;</span>
<span class="token comment">//选择器</span>
<span class="token property"><span class="token variable">$s</span></span><span class="token punctuation">:</span> div<span class="token punctuation">;</span>

<span class="token selector"><span class="token variable">#{$s}</span></span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">#{$w}</span></span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[t];function l(p,d){return s(),a("div",null,c)}const o=n(i,[["render",l],["__file","04变量插值.html.vue"]]);export{o as default};
