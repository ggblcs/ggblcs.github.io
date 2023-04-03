import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_14-条件判断" tabindex="-1"><a class="header-anchor" href="#_14-条件判断" aria-hidden="true">#</a> 14 条件判断</h1><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
less中可以通过when给混合添加执行限定条件, 只有条件满足(为真)才会执行混合中的代码
when表达式中可以使用比较运算符(&gt; &lt; &gt;= &lt;= =)、逻辑运算符、或检查函数来进行条件判断
*/</span>
<span class="token comment">/*
.size(@width,@height) when (@width = 100px){
  width: @width;
  height: @height;
}
 */</span>
// <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span>相当于JS中的||
<span class="token comment">/*
.size(@width,@height) when (@width = 100px),(@height = 100px){
  width: @width;
  height: @height;
}
 */</span>
// <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>相当于JS中的&amp;&amp;
<span class="token comment">/*
.size(@width,@height) when (@width = 100px)and(@height = 100px){
  width: @width;
  height: @height;
}
 */</span>
.<span class="token function">size</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@width</span><span class="token punctuation">,</span>@height<span class="token punctuation">)</span> when <span class="token punctuation">(</span><span class="token function">ispixel</span><span class="token punctuation">(</span>@width<span class="token punctuation">)</span><span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@width</span><span class="token punctuation">;</span></span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@height</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
<span class="token selector">div</span><span class="token punctuation">{</span>
  .<span class="token function">size</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[i];function c(l,u){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","14条件判断.html.vue"]]);export{d as default};
