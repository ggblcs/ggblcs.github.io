import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_25-作用域的练习" tabindex="-1"><a class="header-anchor" href="#_25-作用域的练习" aria-hidden="true">#</a> 25 作用域的练习</h1><ol><li><p>找出哪些是全局变量，那些是局部变量</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span><span class="token comment">//全局变量</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span><span class="token comment">//局部变量</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
	<span class="token keyword">var</span> num3 <span class="token operator">=</span> <span class="token number">789</span><span class="token punctuation">;</span><span class="token comment">//全局变量</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	num4 <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span><span class="token comment">//全局变量</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>找出哪些是全局变量，那些是局部变量</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> num1 <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span><span class="token comment">//全局变量</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">let</span> num2 <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span><span class="token comment">//局部变量</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
	<span class="token keyword">let</span> num3 <span class="token operator">=</span> <span class="token number">789</span><span class="token punctuation">;</span><span class="token comment">//局部变量</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	num4 <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span><span class="token comment">//全局变量</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下列代码运行是否会报错</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span><span class="token comment">//不会报错</span>
<span class="token comment">//=========================</span>
<span class="token punctuation">{</span>
	<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token comment">//不会报错</span>
<span class="token comment">//=========================</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//不会报错</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下列代码运行是否会报错</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span><span class="token comment">//会报错</span>
<span class="token comment">//=========================</span>
<span class="token punctuation">{</span>
	<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token comment">//不会报错</span>
<span class="token comment">//=========================</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//会报错</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下列代码运行是否会报错</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span><span class="token comment">//会报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意点：只要出现了let，在相同作用域内就不能出现同名变量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span><span class="token comment">//会报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),c=[t];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","25作用域的练习.html.vue"]]);export{r as default};
