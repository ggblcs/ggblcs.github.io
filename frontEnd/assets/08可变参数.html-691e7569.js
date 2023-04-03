import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},t=e(`<h1 id="_08-可变参数" tabindex="-1"><a class="header-anchor" href="#_08-可变参数" aria-hidden="true">#</a> 08 可变参数</h1><h2 id="_01-叙述" tabindex="-1"><a class="header-anchor" href="#_01-叙述" aria-hidden="true">#</a> 01 叙述</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
1.SASS中的可变参数
SASS中的可变参数和LESS中也一样,
只不过由于SASS不是使用JS实现的, 所以不能直接在混合中使用arguments
必须通过 $args...的格式来定义可变参数, 然后通过$args来使用

注意点: 和LESS一样可变参数必须写在形参列表的最后
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-示例" tabindex="-1"><a class="header-anchor" href="#_02-示例" aria-hidden="true">#</a> 02 示例</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/*
//不使用可变参数
@mixin transi($name, $time, $mode, $delay){
  transition: $name $time $mode $delay;
}
 */</span>

<span class="token comment">/*
//使用可变参数
@mixin transi($args...){
  transition: $args;
}
 */</span>

<span class="token comment">//使用可变参数的进一步完善，由于name和time是必须有的参数，其它参数可以省略</span>
<span class="token keyword">@mixin</span> <span class="token function">transi</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$time</span><span class="token punctuation">,</span> <span class="token variable">$args</span>...<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> <span class="token variable">$name</span> <span class="token variable">$time</span> <span class="token variable">$args</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> <span class="token function">transi</span><span class="token punctuation">(</span>all<span class="token punctuation">,</span> 1s<span class="token punctuation">,</span> linear<span class="token punctuation">,</span> 10s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div:hover</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[t];function c(p,d){return s(),a("div",null,l)}const u=n(i,[["render",c],["__file","08可变参数.html.vue"]]);export{u as default};
