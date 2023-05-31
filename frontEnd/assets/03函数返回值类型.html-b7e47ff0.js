import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_03-函数返回值类型" tabindex="-1"><a class="header-anchor" href="#_03-函数返回值类型" aria-hidden="true">#</a> 03 函数返回值类型</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
<span class="token comment">/*
在绝大多数情况下，TypeScript能够根据函数体内的return语句等自动推断出返回值类型，
因此我们也可以省略返回值类型。

此例中，我们没有为add函数添加返回值类型，
但是TypeScript能够根据表达式“x + y”的类型推断出add函数的返回值类型为number类型
*/</span>

<span class="token keyword">function</span> <span class="token function">add2</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果返回值类型是void，并且没有启用strictNullChecks编译选项，那么void返回值允许是null。</p>`,3),p=[i];function c(l,o){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","03函数返回值类型.html.vue"]]);export{d as default};
