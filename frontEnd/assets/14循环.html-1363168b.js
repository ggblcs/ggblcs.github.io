import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_14-循环" tabindex="-1"><a class="header-anchor" href="#_14-循环" aria-hidden="true">#</a> 14 循环</h1><h2 id="_01-说明" tabindex="-1"><a class="header-anchor" href="#_01-说明" aria-hidden="true">#</a> 01 说明</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
1.SASS中的循环
SASS比LESS牛逼的地方就在于SASS中直接支持循环语句, 而LESS中需要通过混合+条件判断自己实现
SASS中支持两种循环, 分别是for循环和while循环

2.for循环
@for $i from 起始整数 through 结束整数{}
@for $i from 起始整数 to 结束整数{}
两者的区别 through包头包尾, to包头不包尾

3.while循环
@while(条件语句){}
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-示例" tabindex="-1"><a class="header-anchor" href="#_02-示例" aria-hidden="true">#</a> 02 示例</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-for循环through" tabindex="-1"><a class="header-anchor" href="#_2-1-for循环through" aria-hidden="true">#</a> 2.1 for循环through</h3><blockquote><p>@for $i from 起始整数 through 结束整数{}</p></blockquote><blockquote><p>目标：把5、6、7、8这几个 li 的背景色变为蓝色</p></blockquote><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">ul</span><span class="token punctuation">{</span>
  <span class="token selector">li</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>

    <span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 5 <span class="token keyword">through</span> <span class="token selector">8</span><span class="token punctuation">{</span>
      &amp;<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span><span class="token variable">#{$i}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-for循环to" tabindex="-1"><a class="header-anchor" href="#_2-2-for循环to" aria-hidden="true">#</a> 2.2 for循环to</h3><blockquote><p>@for $i from 起始整数 to 结束整数{}</p></blockquote><blockquote><p>目标：把5、6、7、8这几个 li 的背景色变为蓝色</p></blockquote><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">ul</span><span class="token punctuation">{</span>
  <span class="token selector">li</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>

    <span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> <span class="token selector">5 to 9</span><span class="token punctuation">{</span>
      &amp;<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span><span class="token variable">#{$i}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-while循环" tabindex="-1"><a class="header-anchor" href="#_2-3-while循环" aria-hidden="true">#</a> 2.3 while循环</h3><blockquote><p>@while(条件语句){}</p></blockquote><blockquote><p>目标：把5、6、7、8这几个 li 的背景色变为蓝色</p></blockquote><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">ul</span><span class="token punctuation">{</span>
  <span class="token selector">li</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>

    <span class="token property"><span class="token variable">$i</span></span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
    <span class="token keyword">@while</span><span class="token punctuation">(</span><span class="token variable">$i</span>&lt;=8<span class="token punctuation">)</span><span class="token punctuation">{</span>
      &amp;<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span><span class="token variable">#{$i}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token property"><span class="token variable">$i</span></span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">+</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[e];function c(i,o){return s(),a("div",null,l)}const d=n(p,[["render",c],["__file","14循环.html.vue"]]);export{d as default};
