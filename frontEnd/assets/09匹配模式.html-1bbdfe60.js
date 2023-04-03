import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_09-匹配模式" tabindex="-1"><a class="header-anchor" href="#_09-匹配模式" aria-hidden="true">#</a> 09 匹配模式</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>被注释掉的css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 40px 40px 40px 40px<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> solid solid solid solid<span class="token punctuation">;</span>
    <span class="token comment">/*border-color: #000 #f00 #0f0 #00f;*/</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #000 transparent transparent transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">/*
@_: 表示通用的匹配模式

什么是通用的匹配模式?
无论同名的哪一个混合被匹配了, 都会先执行通用匹配模式中的代码
*/</span>
<span class="token selector">.triangle(<span class="token variable">@_</span>, <span class="token variable">@width</span>, <span class="token variable">@color</span>)</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid solid solid solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.triangle(Down, <span class="token variable">@width</span>, <span class="token variable">@color</span>)</span><span class="token punctuation">{</span>
  <span class="token comment">//width: 0;</span>
  <span class="token comment">//height: 0;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
  <span class="token comment">//border-style: solid solid solid solid;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">@color</span> transparent transparent transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.triangle(Top, <span class="token variable">@width</span>, <span class="token variable">@color</span>)</span><span class="token punctuation">{</span>
  <span class="token comment">//width: 0;</span>
  <span class="token comment">//height: 0;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
  <span class="token comment">//border-style: solid solid solid solid;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent <span class="token variable">@color</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.triangle(Left, <span class="token variable">@width</span>, <span class="token variable">@color</span>)</span><span class="token punctuation">{</span>
  <span class="token comment">//width: 0;</span>
  <span class="token comment">//height: 0;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
  <span class="token comment">//border-style: solid solid solid solid;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent <span class="token variable">@color</span> transparent transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.triangle(Right, <span class="token variable">@width</span>, <span class="token variable">@color</span>)</span><span class="token punctuation">{</span>
  <span class="token comment">//width: 0;</span>
  <span class="token comment">//height: 0;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
  <span class="token comment">//border-style: solid solid solid solid;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent transparent <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span><span class="token punctuation">{</span>
  <span class="token comment">/*
  混合的匹配模式
  就是通过混合的第一个字符串形参,来确定具体要执行哪一个同名混合
  */</span>
  <span class="token comment">//.triangle(Down, 80px, green);</span>
  <span class="token comment">//.triangle(Top, 80px, green);</span>
  <span class="token comment">//.triangle(Left, 80px, green);</span>
  .<span class="token function">triangle</span><span class="token punctuation">(</span>Right<span class="token punctuation">,</span> 80px<span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[p];function i(o,c){return s(),a("div",null,l)}const d=n(t,[["render",i],["__file","09匹配模式.html.vue"]]);export{d as default};
