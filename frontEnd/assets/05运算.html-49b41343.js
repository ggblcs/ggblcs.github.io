import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_05-运算" tabindex="-1"><a class="header-anchor" href="#_05-运算" aria-hidden="true">#</a> 05 运算</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">div</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token comment">/*less中的运算和CSS3中新增的calc函数一样, 都支持+ - * / 运算*/</span>
  <span class="token comment">//margin-left: (-200px * 0.5);</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token operator">-</span>200px <span class="token operator">/</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>less中计算必须要带上单位，可以写在前面成(-200px * 0.5)，也可以写在后面(-200 * 0.5px)，还可以两个都写(-200px * 0.5px)。</p><p>css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token comment">/*以下的方式不利于编码, 因为需要我们自己口算元素宽度的一半是多少*/</span>
    <span class="token comment">/*margin-left: -100px;*/</span>
    <span class="token comment">/*以下的方式不利于兼容, 因为transform属性是CSS3新增的, 只有支持C3属性的浏览器才可以使用*/</span>
    <span class="token comment">/*transform: translateX(-50%);*/</span>
    <span class="token comment">/*在CSS3中新增了一个calc函数, 可以实现简单的+ - * / 运算*/</span>
    <span class="token comment">/*margin-left: calc(-200px / 2);*/</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>-200px * 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[p];function l(i,o){return s(),a("div",null,c)}const r=n(t,[["render",l],["__file","05运算.html.vue"]]);export{r as default};
