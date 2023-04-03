import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_13-条件判断" tabindex="-1"><a class="header-anchor" href="#_13-条件判断" aria-hidden="true">#</a> 13 条件判断</h1><blockquote><p>SASS中没有匹配模式，无法像LESS中那样封装三角形。</p><p>但SASS对条件判断比LESS支持的更彻底，可以使用条件判断来完成。</p></blockquote><h2 id="_01-说明" tabindex="-1"><a class="header-anchor" href="#_01-说明" aria-hidden="true">#</a> 01 说明</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
1.SASS中的条件判断
和LESS一样SASS中也支持条件判断, 只不过SASS中的条件判断支持得更为彻底
SASS中支持
@if(条件语句){}
@else if(条件语句){}
... ...
@else(条件语句){}
SASS中当条件不为false或者null时就会执行{}中的代码
和LESS一样SASS中的条件语句支持通过&gt; &gt;= &lt; &lt;= ==进行判断
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-举例" tabindex="-1"><a class="header-anchor" href="#_02-举例" aria-hidden="true">#</a> 02 举例</h2><blockquote><p>以封装三角形为例</p></blockquote><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">triangle</span><span class="token punctuation">(</span><span class="token variable">$dir</span><span class="token punctuation">,</span> <span class="token variable">$width</span><span class="token punctuation">,</span><span class="token variable">$color</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token comment">//三角方向朝上</span>
  <span class="token keyword">@if</span><span class="token punctuation">(</span><span class="token variable">$dir</span> <span class="token operator">==</span> Up<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent <span class="token variable">$color</span> transparent<span class="token punctuation">;</span>
  <span class="token comment">//  三角方向朝下</span>
  <span class="token punctuation">}</span><span class="token keyword">@else if</span><span class="token punctuation">(</span><span class="token variable">$dir</span> <span class="token operator">==</span> Down<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span> transparent transparent transparent<span class="token punctuation">;</span>
    <span class="token comment">//  三角方向朝左</span>
  <span class="token punctuation">}</span><span class="token keyword">@else if</span><span class="token punctuation">(</span><span class="token variable">$dir</span> <span class="token operator">==</span> Left<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> transparent <span class="token variable">$color</span> transparent transparent<span class="token punctuation">;</span>
    <span class="token comment">//  三角方向朝右</span>
  <span class="token punctuation">}</span><span class="token keyword">@else</span><span class="token punctuation">(</span><span class="token variable">$dir</span> <span class="token operator">==</span> Right<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent transparent <span class="token variable">$color</span> <span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//使用</span>
<span class="token selector">.father</span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">triangle</span><span class="token punctuation">(</span>Left<span class="token punctuation">,</span>50px<span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[p];function l(c,o){return s(),a("div",null,i)}const u=n(t,[["render",l],["__file","13条件判断.html.vue"]]);export{u as default};
