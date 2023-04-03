import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},t=e(`<h1 id="_08-可变参数" tabindex="-1"><a class="header-anchor" href="#_08-可变参数" aria-hidden="true">#</a> 08 可变参数</h1><p>梗概</p><ol><li>... 。</li><li>arguments收集所有参数。</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">/*
.animate(@name, @time, @mode, @delay){
  //transition: @name @time @mode @delay;
  transition: @arguments;
}
 */</span>
<span class="token comment">/*
.animate(...){
  //transition: @name @time @mode @delay;
  transition: @arguments;
}
*/</span>
<span class="token comment">/*
.animate(@name, ...){
  //transition: @name @time @mode @delay;
  transition: @arguments;
}
 */</span>
<span class="token comment">/*
less中的@arguments和js中的arguments一样, 可以拿到传递进来的所有形参
*/</span>
<span class="token comment">/*
less中的...表示可以接收0个或多个参数
如果形参列表中使用了..., 那么...必须写在形参列表最后
*/</span>
<span class="token comment">/*下面表示至少传递一个参数*/</span>
<span class="token selector">.animate(<span class="token variable">@name</span>, <span class="token variable">@time</span>, ...)</span><span class="token punctuation">{</span>
  <span class="token comment">//transition: @name @time @mode @delay;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> <span class="token variable">@arguments</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token comment">//transition: all 4s linear 0s;</span>
  <span class="token comment">//.animate(all, 4s, linear, 0s);</span>
  .<span class="token function">animate</span><span class="token punctuation">(</span>all<span class="token punctuation">,</span> 4s<span class="token punctuation">,</span> linear<span class="token punctuation">,</span> 0s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div:hover</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[t];function c(p,o){return s(),a("div",null,l)}const u=n(i,[["render",c],["__file","08可变参数.html.vue"]]);export{u as default};
