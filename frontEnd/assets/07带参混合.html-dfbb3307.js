import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_07-带参混合" tabindex="-1"><a class="header-anchor" href="#_07-带参混合" aria-hidden="true">#</a> 07 带参混合</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// 这里就是带参数的混合</span>
<span class="token comment">/*
.whc(@w, @h, @c){
  width: @w;
  height: @h;
  background: @c;
}
 */</span>
<span class="token comment">// 这里就是带参数的混合, 并且带默认值</span>
<span class="token selector">.whc(<span class="token variable">@w</span>:100px, <span class="token variable">@h</span>:100px, <span class="token variable">@c</span>:pink)</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@h</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@c</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box1</span><span class="token punctuation">{</span>
  <span class="token comment">//width: 200px;</span>
  <span class="token comment">//height: 200px;</span>
  <span class="token comment">//background: red;</span>
  <span class="token comment">//.whc(200px, 200px, red);</span>

  <span class="token comment">// 这里是给混合的指定形参传递数据</span>
  .<span class="token function">whc</span><span class="token punctuation">(</span><span class="token variable">@c<span class="token punctuation">:</span></span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
  <span class="token comment">//width: 300px;</span>
  <span class="token comment">//height: 300px;</span>
  <span class="token comment">//background: blue;</span>
  .<span class="token function">whc</span><span class="token punctuation">(</span>300px<span class="token punctuation">,</span> 300px<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token mixin-usage function">.whc</span><span class="token punctuation">(</span><span class="token variable">@c<span class="token punctuation">:</span></span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//其它按照默认值来，只修改默认颜色。</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[p];function l(i,o){return s(),a("div",null,c)}const d=n(e,[["render",l],["__file","07带参混合.html.vue"]]);export{d as default};
