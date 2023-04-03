import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},o=p(`<h1 id="_27-预解析练习" tabindex="-1"><a class="header-anchor" href="#_27-预解析练习" aria-hidden="true">#</a> 27 预解析练习</h1><p>预解析从外到内</p><ol><li><p>下面程序的执行结果是什么？</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//预解析之后</span>
<span class="token keyword">var</span> num<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> num<span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
	num <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
num <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下面程序的执行结果是什么？</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">777</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">888</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//预解析之后</span>
<span class="token keyword">var</span> a<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> b<span class="token punctuation">;</span>
	<span class="token keyword">var</span> a<span class="token punctuation">;</span>
	b <span class="token operator">=</span> <span class="token number">777</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//undefined</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//777</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//报错</span>
	a <span class="token operator">=</span> <span class="token number">888</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
a <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下列程序的执行结果是什么？</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出函数的定义</span>
<span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出123</span>

<span class="token comment">//==预解析后(老师讲的)</span>
<span class="token keyword">function</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> value<span class="token punctuation">;</span>
value <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//==我的理解</span>
<span class="token keyword">var</span> value<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出函数的定义</span>
value <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下列程序执行的结果是什么？（这道题了解，面试可能用得上，但写代码一定不能用，不要钻牛角尖）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
	<span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在ES6之前没有块级作用域，并且没有讲这两个函数定义到其它的函数中。所以这两个函数应该属于全局作用域。</p><p><strong>在高级浏览器中，不会对{}中定义的函数进行提升；只有在低级浏览器中，才会按照正常的方式解析</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//高级浏览器运行结果</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
	<span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//111</span>

<span class="token comment">//===</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
	<span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//222</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//低级浏览器运行结果与true和false无关，都是222</span>
<span class="token comment">//原因是进行了预解析</span>
<span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token operator">/</span>fale<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//显然预解析后，输出222的demo函数覆盖了第一个demo函数。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>个人理解：</p><p>之前不理解为什么说预解析函数优先级比变量优先级高，现在理解了，是因为理解不同。我理解的是一定先提升var a;所以变量优先。但是人家理解的是函数整体先被预解析出来，函数预解析出来之后才能解析a = 7;，所以函数优先。显然对知识的掌握都差不多，只不过理解有偏差。函数优先解析才是正道。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//function</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[o];function e(l,u){return s(),a("div",null,c)}const k=n(t,[["render",e],["__file","27预解析练习.html.vue"]]);export{k as default};
