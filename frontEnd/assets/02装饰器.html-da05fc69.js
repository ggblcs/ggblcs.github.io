import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},c=e(`<h1 id="_02-装饰器" tabindex="-1"><a class="header-anchor" href="#_02-装饰器" aria-hidden="true">#</a> 02 装饰器</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
1.什么是装饰器?
- Decorator 是 ES7 的一个新语法，目前仍处于提案中，
- 装饰器是一种特殊类型的声明，它能够被附加到类，方法， 访问器，属性或参数上
- 被添加到不同地方的装饰器有不同的名称和特点
    + 附加到类上, 类装饰器
    + 附加到方法上,方法装饰器
    + 附加到访问器上,访问器装饰器
    + 附加到属性上,属性装饰器
    + 附加到参数上,参数装饰器

2. 装饰器基本格式
2.1普通装饰器
2.2装饰器工厂
2.3装饰器组合

3.如何在TS中使用装饰器?
在TS中装饰器也是一项实验性的特性, 所以要使用装饰器需要手动打开相关配置
修改配置文件 experimentalDecorators
* */</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 如果一个函数返回一个回调函数, 如果这个函数作为装饰器来使用, 那么这个函数就是装饰器工厂</span>
<span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;demo out&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;demo in&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">abc</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">def</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;def out&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;def in&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1.给Person这个类绑定了一个普通的装饰器</span>
<span class="token comment">// 这个装饰器的代码会在定义类之前执行, 并且在执行的时候会把这个类传递给装饰器</span>
<span class="token comment">// @test</span>
<span class="token comment">// 2.给Person这个类绑定了一个装饰器工厂</span>
<span class="token comment">// 在绑定的时候由于在函数后面写上了(), 所以会先执行装饰器工厂拿到真正的装饰器</span>
<span class="token comment">// 真正的装饰器会在定义类之前执行, 所以紧接着又执行了里面</span>
<span class="token comment">// @demo()</span>
<span class="token comment">// 3.普通的装饰器可以和装饰器工厂结合起来一起使用</span>
<span class="token comment">// 结合起来一起使用的时候, 会先从上至下的执行所有的装饰器工厂, 拿到所有真正的装饰器</span>
<span class="token comment">// 然后再从下至上的执行所有的装饰器</span>

<span class="token comment">//  demo out / def out / abc / def in / demo in / test</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">test</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">demo</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">def</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">abc</span></span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[c];function p(o,l){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","02装饰器.html.vue"]]);export{d as default};
