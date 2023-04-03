import{_ as n,p as s,q as e,a1 as a}from"./framework-96b046e1.js";const t={},l=a(`<h1 id="_082-条件和分布式条件类型" tabindex="-1"><a class="header-anchor" href="#_082-条件和分布式条件类型" aria-hidden="true">#</a> 082 条件和分布式条件类型</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
1.条件类型(三目运算)
判断前面一个类型是否是后面一个类型或者继承于后面一个类型
如果是就返回第一个结果, 如果不是就返回第二个结果
语法: T extends U ? X : Y;
* */</span>
<span class="token comment">// type MyType&lt;T&gt; = T extends string ? string : any;</span>
<span class="token comment">// type res = MyType&lt;boolean&gt;</span>

<span class="token comment">/*
2.分布式条件类型?
被检测类型是一个联合类型的时候, 该条件类型就被称之为分布式条件类型
* */</span>
<span class="token comment">// type MyType&lt;T&gt; = T extends any ? T : never;</span>
<span class="token comment">// type res = MyType&lt;string | number | boolean&gt;;</span>

<span class="token comment">// 从T中剔除可以赋值给U的类型。 Exclude</span>
<span class="token comment">// type MyType&lt;T, U&gt; = T extends U ? never : T;</span>
<span class="token comment">// type res = MyType&lt;string | number | boolean, number&gt;</span>
<span class="token comment">// type res = Exclude&lt;string | number | boolean, number&gt;</span>

<span class="token comment">// 提取T中可以赋值给U的类型。 Extract</span>
<span class="token comment">// type res = Extract&lt;string | number | boolean, number | string&gt;</span>

<span class="token comment">// 从T中剔除null和undefined。 NonNullable</span>
<span class="token comment">// type res = NonNullable&lt;string | null | boolean | undefined&gt;</span>

<span class="token comment">// 获取函数返回值类型。 ReturnType</span>
<span class="token comment">// type res = ReturnType&lt;(()=&gt;number)&gt;</span>

<span class="token comment">// 获取一个类的构造函数参数组成的元组类型。 ConstructorParameters</span>
<span class="token comment">// class Person {</span>
<span class="token comment">//     constructor(name:string, age:number){}</span>
<span class="token comment">// }</span>
<span class="token comment">// type res = ConstructorParameters&lt;typeof Person&gt;;</span>

<span class="token comment">// 获得函数的参数类型组成的元组类型。 Parameters</span>
<span class="token keyword">function</span> <span class="token function">say</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> gender<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">res</span> <span class="token operator">=</span> Parameters<span class="token operator">&lt;</span><span class="token keyword">typeof</span> say<span class="token operator">&gt;</span><span class="token punctuation">;</span>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[l];function c(r,o){return s(),e("div",null,i)}const d=n(t,[["render",c],["__file","082条件和分布式条件类型.html.vue"]]);export{d as default};
