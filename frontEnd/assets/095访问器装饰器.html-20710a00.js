import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_095-访问器装饰器" tabindex="-1"><a class="header-anchor" href="#_095-访问器装饰器" aria-hidden="true">#</a> 095 访问器装饰器</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
1.访问器装饰器
- 访问器装饰器声明在一个访问器的声明之前（紧靠着访问器声明）。
访问器装饰器应用于访问器的 属性描述符并且可以用来监视，修改或替换一个访问器的定义

- 访问器装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
    + 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    + 成员的名字。
    + 成员的属性描述符。

- 注意: 
TypeScript不允许同时装饰一个成员的get和set访问器。
取而代之的是，一个成员的所有装饰的必须应用在文档顺序的第一个访问器上
* */</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> propertyKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(target);</span>
    <span class="token comment">// console.log(propertyKey);</span>
    <span class="token comment">// console.log(descriptor);</span>
    descriptor<span class="token punctuation">.</span><span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        target<span class="token punctuation">.</span>myName <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    descriptor<span class="token punctuation">.</span>get <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> target<span class="token punctuation">.</span>myName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> _name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// lnj</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">test</span></span>
    <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;lnj&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","095访问器装饰器.html.vue"]]);export{r as default};
