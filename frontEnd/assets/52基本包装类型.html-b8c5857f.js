import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_52-基本包装类型" tabindex="-1"><a class="header-anchor" href="#_52-基本包装类型" aria-hidden="true">#</a> 52 基本包装类型</h1><p>引用类型与包装类型的区别</p><p>https://blog.csdn.net/weixin_39037804/article/details/102467562</p><ol><li><p>基本数据类型</p><ol><li>字符串类型</li><li>数值类型</li><li>布尔类型</li><li>空类型</li><li>未定义类型</li><li>symbol类型（ES6新增）</li></ol><p>通过字面量创建的基本数据类型的数据都是常量。</p></li><li><p>常量的特点和注意点</p><ol><li>常量不能被修改。</li><li>每次修改或拼接都生成一个新的。</li><li><strong>replace</strong>方法</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//不信邪，就要改常量，改字符串</span>
str<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;m&#39;</span><span class="token punctuation">;</span><span class="token comment">//把b改成m</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//依然输出abc，证明修改不了</span>

<span class="token comment">//修改方法二</span>
<span class="token keyword">let</span> newStr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;m&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//把b替换成m</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//依然输出abc，证明修改不了</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newStr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//&#39;amc&#39;</span>
<span class="token comment">/*
这说明修改常量本质上是生成了一个新的。
注意点：
我们常用字符串拼接，str1+str2本质上也是生成了新的字符串，
每次生成新的字符串都要新开辟一块内存，影响性能，
所以企业开发中不要经常拼接或修改字符串。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>基本类型特点</p><ol><li>没有属性和方法</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;lnj&#39;</span><span class="token punctuation">;</span>
str<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">34</span><span class="token punctuation">;</span>
str<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ss&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//undefined</span>
str<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//报错not a function</span>

<span class="token comment">//验证了基本类型没有属性和方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么字符串的strength属性，还有字符串的方法怎么解释？？？？原因是以前之所以能够访问基本数据类型的属性和方法，是因为在运行的时候系统自动将基本数据类型包装成了对象类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;sss&#39;</span><span class="token punctuation">;</span>
<span class="token comment">/*
在我们调用str.xxx时系统自动做了一件事.
那就是let str = new String(str);
通过new创建了一个对象。对象才有属性和方法
这就是把基本数据类型包装成了包装类型。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>常见的包装类型</p><ol><li>String()</li><li>Number()</li><li>Boolean()</li></ol></li></ol>`,4),l=[p];function i(c,o){return s(),a("div",null,l)}const r=n(e,[["render",i],["__file","52基本包装类型.html.vue"]]);export{r as default};
