import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="_03-变量" tabindex="-1"><a class="header-anchor" href="#_03-变量" aria-hidden="true">#</a> 03 变量</h1><h2 id="_01-叙述" tabindex="-1"><a class="header-anchor" href="#_01-叙述" aria-hidden="true">#</a> 01 叙述</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
1.SASS中的变量
SASS中的变量和LESS中一样, 只是定义格式不同
LESS中定义变量   @变量名称: 值;
SASS中定义办理   $变量名称: 值;
*/
/*
2.SASS中变量特点
SASS中变量特点和LESS中几乎一样
2.1后定义覆盖先定义
2.2可以把变量赋值给其它变量
2.3区分全局变量和局部变量(访问采用就近原则)

注意点: LESS中变量是延迟加载, 可以先使用后定义
        SASS中变量不是延迟加载, 不可以先使用后定义
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-示例" tabindex="-1"><a class="header-anchor" href="#_02-示例" aria-hidden="true">#</a> 02 示例</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$w</span></span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$h</span></span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token comment">//后定义的覆盖先定义的</span>
<span class="token comment">//$w: 600px;</span>

<span class="token comment">//可以把变量赋值给其它变量</span>
<span class="token comment">//$h: $w;</span>

<span class="token selector">.box1</span><span class="token punctuation">{</span>
  <span class="token comment">//区分全局变量和局部变量</span>
  <span class="token property"><span class="token variable">$w</span></span><span class="token punctuation">:</span> 666px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$w</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$h</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$w</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$h</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[l];function p(c,d){return s(),a("div",null,t)}const r=n(i,[["render",p],["__file","03变量.html.vue"]]);export{r as default};
