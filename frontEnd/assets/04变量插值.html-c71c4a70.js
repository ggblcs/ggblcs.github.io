import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_04-变量插值" tabindex="-1"><a class="header-anchor" href="#_04-变量插值" aria-hidden="true">#</a> 04 变量插值</h1><p><strong>了解</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@size<span class="token punctuation">:</span></span> 200px<span class="token punctuation">;</span>
<span class="token variable">@w<span class="token punctuation">:</span></span> width<span class="token punctuation">;</span>
<span class="token variable">@s<span class="token punctuation">:</span></span> div<span class="token punctuation">;</span>
<span class="token comment">/*
1.什么是变量插值?
在less中如果属性的取值可以直接使用变量, 但是如果是属性名称或者选择器名称并不能直接使用变量
如果属性名称或者选择器名称想使用变量中保存的值, 那么必须使用变量插值的格式

2.变量插值的格式
格式: @{变量名称}
*/</span>
<span class="token selector">@{s}</span><span class="token punctuation">{</span>
  <span class="token property">@{w}</span><span class="token punctuation">:</span> <span class="token variable">@size</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@size</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[i];function p(c,o){return s(),a("div",null,l)}const u=n(t,[["render",p],["__file","04变量插值.html.vue"]]);export{u as default};
