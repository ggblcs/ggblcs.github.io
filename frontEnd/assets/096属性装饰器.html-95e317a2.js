import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_096-属性装饰器" tabindex="-1"><a class="header-anchor" href="#_096-属性装饰器" aria-hidden="true">#</a> 096 属性装饰器</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
1.属性装饰器
- 属性装饰器写在一个属性声明之前（紧靠着属性声明）
- 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
    + 对于静态属性来说就是当前的类, 对于实例属性来说就是当前实例
    + 成员的名字。
* */</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span>target<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">,</span> proptyName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proptyName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    target<span class="token punctuation">[</span>proptyName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;lnj&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// @test</span>
    <span class="token keyword">static</span> age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">test</span></span>
    name<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>空</p>`,3),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","096属性装饰器.html.vue"]]);export{r as default};
