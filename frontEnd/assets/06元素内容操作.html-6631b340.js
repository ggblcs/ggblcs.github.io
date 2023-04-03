import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_06-元素内容操作" tabindex="-1"><a class="header-anchor" href="#_06-元素内容操作" aria-hidden="true">#</a> 06 元素内容操作</h1><p>html内容基于此</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    我是div
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>我是标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>我是段落<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-获取元素内容" tabindex="-1"><a class="header-anchor" href="#_1-获取元素内容" aria-hidden="true">#</a> 1.获取元素内容</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
1.innerHTML获取的内容包含标签, innerText/textContent获取的内容不包含标签
2.innerHTML/textContent获取的内容不会去除两端的空格, innerText获取的内容会去除两端的空格
*/</span>

<span class="token keyword">let</span> oDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oDiv<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oDiv<span class="token punctuation">.</span>innerText<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oDiv<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-设置元素内容" tabindex="-1"><a class="header-anchor" href="#_2-设置元素内容" aria-hidden="true">#</a> 2.设置元素内容</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
特点:
无论通过innerHTML/innerText/textContent设置内容, 新的内容都会覆盖原有的内容
区别:
如果通过innerHTML设置数据, 数据中包含标签, 会转换成标签之后再添加
如果通过innerText/textContent设置数据, 数据中包含标签, 不会转换成标签, 会当做一个字符串直接设置
*/</span>
<span class="token keyword">let</span> oDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// oDiv.innerHTML = &quot;123&quot;;</span>
<span class="token comment">// oDiv.innerText = &quot;456&quot;;</span>
<span class="token comment">// oDiv.textContent = &quot;789&quot;;</span>
<span class="token comment">//  oDiv.innerHTML = &quot;&lt;span&gt;我是span&lt;/span&gt;&quot;;</span>
<span class="token comment">//  oDiv.innerText = &quot;&lt;span&gt;我是span&lt;/span&gt;&quot;;</span>
<span class="token comment">//  oDiv.textContent = &quot;&lt;span&gt;我是span&lt;/span&gt;&quot;;</span>
   
   
<span class="token comment">//innerText/textContent存在兼容问题，有的浏览器兼容这个，有的浏览器兼容那个，所以有兼容写法</span>
<span class="token function">setText</span><span class="token punctuation">(</span>oDiv<span class="token punctuation">,</span> <span class="token string">&quot;www.it666.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">setText</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;textContent&quot;</span> <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
        obj<span class="token punctuation">.</span>textContent <span class="token operator">=</span> text<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        obj<span class="token punctuation">.</span>innerText <span class="token operator">=</span> text<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[p];function o(c,l){return s(),a("div",null,i)}const d=n(e,[["render",o],["__file","06元素内容操作.html.vue"]]);export{d as default};
