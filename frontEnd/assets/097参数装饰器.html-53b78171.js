import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_097-参数装饰器" tabindex="-1"><a class="header-anchor" href="#_097-参数装饰器" aria-hidden="true">#</a> 097 参数装饰器</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
1.参数装饰器
- 参数装饰器写在一个参数声明之前（紧靠着参数声明）。
- 参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
    + 对于静态成员来说是当前的类，对于实例成员是当前实例。
    + 参数所在的方法名称。
    + 参数在参数列表中的索引。
* */</span>
<span class="token comment">/*
其它
属性装饰器,参数装饰器最常见的应用场景就是配合元数据(reflect-metadata),
在不改变原有结构的同时添加一些额外的信息
但是元数据目前也是在提案中, 也还没有纳入正式的标准
所以对于装饰器而言, 我们只需要了解即可,
因为提案中的所有内容将来都是有可能被修改的
因为提案中的所有内容目前都有兼容性问题
* */</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span>target<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">,</span> proptyName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span> index<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proptyName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function">say</span><span class="token punctuation">(</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">test</span></span> name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[i];function c(l,o){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","097参数装饰器.html.vue"]]);export{d as default};
