import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_02-结构体" tabindex="-1"><a class="header-anchor" href="#_02-结构体" aria-hidden="true">#</a> 02 结构体</h1><hr><h2 id="title-02-结构体" tabindex="-1"><a class="header-anchor" href="#title-02-结构体" aria-hidden="true">#</a> title: 02 结构体</h2><h2 id="_01-三种表示" tabindex="-1"><a class="header-anchor" href="#_01-三种表示" aria-hidden="true">#</a> 01 三种表示</h2><p>一：常用</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">struct</span> <span class="token class-name">xy</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> x<span class="token punctuation">;</span>
	<span class="token keyword">int</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>xy1 <span class="token punctuation">,</span>xy2<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>xy是结构体的名字。</li><li>xy1和xy2相当于结构体的实例化.</li><li>结构体既可以写在函数体中，也可以写在函数体外。</li><li>结构体最外一定要加分号。</li></ol><p>二：没有结构体名字。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">struct</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> x<span class="token punctuation">;</span>
	<span class="token keyword">int</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>xy1 <span class="token punctuation">,</span>xy2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">struct</span> <span class="token class-name">xy</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> x<span class="token punctuation">;</span>
	<span class="token keyword">int</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-初始化" tabindex="-1"><a class="header-anchor" href="#_02-初始化" aria-hidden="true">#</a> 02 初始化</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">date</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> month<span class="token punctuation">;</span>
	<span class="token keyword">int</span> day<span class="token punctuation">;</span>
	<span class="token keyword">int</span> year<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">struct</span> <span class="token class-name">date</span> today <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">07</span><span class="token punctuation">,</span><span class="token number">31</span><span class="token punctuation">,</span><span class="token number">2019</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//	struct date tomorrow = {.month=8, .year=20};</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;今天的日期是：%i-%i-%i.\\n&quot;</span><span class="token punctuation">,</span>today<span class="token punctuation">.</span>year<span class="token punctuation">,</span>today<span class="token punctuation">.</span>month<span class="token punctuation">,</span>today<span class="token punctuation">.</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//	printf(&quot;明天的日期是：%i-%i-%i.\\n&quot;,tomorrow.year,tomorrow.month,tomorrow.day);</span>
<span class="token punctuation">}</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和数组不同，结构变量的名字并不是结构变量的地址，必须使用&amp;运算符。</p>`,14),p=[i];function c(o,l){return s(),a("div",null,p)}const u=n(t,[["render",c],["__file","02结构体.html.vue"]]);export{u as default};
