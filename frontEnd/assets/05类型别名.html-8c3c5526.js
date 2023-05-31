import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},l=e(`<h1 id="_05-类型别名" tabindex="-1"><a class="header-anchor" href="#_05-类型别名" aria-hidden="true">#</a> 05 类型别名</h1><p>*书 已经查阅过书，无需更改</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
1.什么是类型别名?
类型别名就是给一个类型起个新名字, 但是它们都代表同一个类型
类型别名不会创建出一种新的类型，它只是给自己已有类型命名并直接引用该类型。
* */</span>
<span class="token comment">// 给string类型起了一个别名叫做MyString, 那么将来无论是MyString还是string都表示string</span>
<span class="token keyword">type</span> <span class="token class-name">MyString</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> value1<span class="token operator">:</span>MyString<span class="token punctuation">;</span>
value1 <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// value = 123; // 报错</span>

<span class="token comment">// 类型别名中可以引用其他类型别名</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A1</span></span> <span class="token operator">=</span> <span class="token builtin">string</span> 
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A2</span></span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token constant">A1</span>

<span class="token comment">// 类型别名也可以使用泛型</span>
<span class="token comment">// type MyType&lt;T&gt; = {x:T, y:T};</span>
<span class="token comment">// let value:MyType&lt;number&gt;;</span>
<span class="token comment">// value = {x:123, y:456};</span>
<span class="token comment">// value = {x:&#39;123&#39;, y:456};</span>
<span class="token comment">// value = {x:false, y:456};</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i=[l];function c(p,o){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","05类型别名.html.vue"]]);export{d as default};
