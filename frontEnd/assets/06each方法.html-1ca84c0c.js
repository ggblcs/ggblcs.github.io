import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_06-each方法" tabindex="-1"><a class="header-anchor" href="#_06-each方法" aria-hidden="true">#</a> 06 each方法</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token operator">:</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token operator">:</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token literal-property property">length</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">/*
第一个参数: 遍历到的元素
第二个参数: 当前遍历到的索引
注意点:
原生的forEach方法只能遍历数组, 不能遍历伪数组
*/</span>
<span class="token comment">// arr.forEach(function (value, index) {</span>
<span class="token comment">//     console.log(index, value);</span>
<span class="token comment">// });</span>
<span class="token comment">// obj.forEach(function (value, index) {</span>
<span class="token comment">//     console.log(index, value);</span>
<span class="token comment">// });</span>

<span class="token comment">// 1.利用jQuery的each静态方法遍历数组</span>
<span class="token comment">/*
第一个参数: 当前遍历到的索引
第二个参数: 遍历到的元素
注意点:
jQuery的each方法是可以遍历伪数组的
*/</span>
<span class="token comment">// $.each(arr, function (index, value) {</span>
<span class="token comment">//     console.log(index, value);</span>
<span class="token comment">// });</span>
$<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义一个对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token operator">:</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token operator">:</span><span class="token string">&#39;q&#39;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token operator">:</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li><p>对象中的key加引号与不加引号是一样的。只不过如果不加引号，key如果是数字，访问时只能用<code>obj[&quot;33&quot;]</code>的形式访问。</p></li><li><p>如果对象中加了length属性，遍历出的结果是不一样的。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>let obj = {1:&#39;o&#39;, 2:&#39;p&#39;, 3:&#39;q&#39;, 4:&#39;r&#39;};//不加length遍历结果：1 o 2 p 3 q 4 r
let obj = {1:&#39;o&#39;, 2:&#39;p&#39;, 3:&#39;q&#39;, 4:&#39;r&#39;, length:4} //加了length后0 undefined 1 o 2 p 3 q 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,5),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","06each方法.html.vue"]]);export{r as default};
