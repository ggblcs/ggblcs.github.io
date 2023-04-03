import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_01-概念" tabindex="-1"><a class="header-anchor" href="#_01-概念" aria-hidden="true">#</a> 01 概念</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.什么是SASS(Syntactically Awesome Stylesheets Sass)?
SASS是一套利用Ruby实现的, 最早最成熟的CSS预处理器, 诞生于2007年.
它扩展了 CSS 语言，增加了变量、Mixin(混合)、嵌套、函数和运算等特性，使 CSS 更易维护和扩展

2.如何学习SASS?
LESS是一套利用JavaScript实现的CSS预处理器, 诞生于2009年.
由于LESS的诞生比SASS要晚, 并且LESS受到了Sass的影响, 所以在LESS中能看到大量SASS中的特性.
所以只要学会了LESS就等同于学会了大部分的SASS

3.LESS和SASS文件后缀名区别
LESS以.less结尾
SASS以.sass或者.scss结尾
两种不同结尾方式区别: .sass结尾以缩进替代{}表示层级结构, 语句后面不用编写分号
                      .scss以{}表示层级结构, 语句后面需要写分号
                      企业开发中推荐使用.scss结尾
注意点: 如果需要使用考拉编译sass文件, 项目目录结构中(包含文件名)不能出现中文和特殊字符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_01-sass示例" tabindex="-1"><a class="header-anchor" href="#_01-sass示例" aria-hidden="true">#</a> 01 SASS示例</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>@mixin center
  <span class="token property">position</span><span class="token punctuation">:</span> absolute
  <span class="token property">left</span><span class="token punctuation">:</span> 50%
  <span class="token property">top</span><span class="token punctuation">:</span> 50%
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span>

.father
  <span class="token property">width</span><span class="token punctuation">:</span> 300px
  <span class="token property">height</span><span class="token punctuation">:</span> 300px
  <span class="token property">background-color</span><span class="token punctuation">:</span> red
  @include center
  .son
    <span class="token property">width</span><span class="token punctuation">:</span> 200px
    <span class="token property">height</span><span class="token punctuation">:</span> 200px
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue
    @include center
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-scss示例" tabindex="-1"><a class="header-anchor" href="#_02-scss示例" aria-hidden="true">#</a> 02 scss示例</h2><blockquote><p>与.sass结尾的文件相比，更建议使用.scss。前者较老，后者较新</p></blockquote><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">center</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.father</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> center<span class="token punctuation">;</span>
  <span class="token selector">.son</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token keyword">@include</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-less回忆" tabindex="-1"><a class="header-anchor" href="#_03-less回忆" aria-hidden="true">#</a> 03 less回忆</h2><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.center</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span>50%<span class="token punctuation">,</span> <span class="token operator">-</span>50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.father</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.center</span><span class="token punctuation">;</span>
  <span class="token selector">.son</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token mixin-usage function">.center</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[t];function c(l,o){return s(),a("div",null,i)}const r=n(p,[["render",c],["__file","01概念.html.vue"]]);export{r as default};
