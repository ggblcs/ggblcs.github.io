import{_ as a,p as n,q as e,a1 as s}from"./framework-96b046e1.js";const i={},t=s(`<h1 id="_07-三大家族等" tabindex="-1"><a class="header-anchor" href="#_07-三大家族等" aria-hidden="true">#</a> 07 三大家族等</h1><h2 id="_01-位置获取" tabindex="-1"><a class="header-anchor" href="#_01-位置获取" aria-hidden="true">#</a> 01 位置获取</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
event.xxx

offsetX/offsetY: 事件触发相对于当前元素自身的位置
clientX/clientY: 事件触发相对于浏览器可视区域的位置
注意点: 可视区域是不包括滚动出去的范围的
pageX/pageY:     事件触发相对于整个网页的位置
主要点: 整个网页包括滚动出去的范围的
screenX/screenY: 事件触发相对于屏幕的位置，企业开发一般用不上
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-获取元素宽高" tabindex="-1"><a class="header-anchor" href="#_02-获取元素宽高" aria-hidden="true">#</a> 02 获取元素宽高</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>oDiv<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">&quot;166px&quot;</span><span class="token punctuation">;</span>
<span class="token function">getComputedStyle</span><span class="token punctuation">(</span>oDiv<span class="token punctuation">)</span><span class="token punctuation">.</span>width<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-三大家族" tabindex="-1"><a class="header-anchor" href="#_03-三大家族" aria-hidden="true">#</a> 03 三大家族</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>oDiv<span class="token punctuation">.</span>offsetWidth<span class="token comment">//只能获取</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),d=[t];function c(l,r){return n(),e("div",null,d)}const u=a(i,[["render",c],["__file","07三大家族等.html.vue"]]);export{u as default};
