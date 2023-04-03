import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_047-泛型类" tabindex="-1"><a class="header-anchor" href="#_047-泛型类" aria-hidden="true">#</a> 047 泛型类</h1><p>若类的定义中带有类型参数，那么它是泛型类。</p><p>泛型类的定义中，形式类型参数列表紧随类名之后。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义类的方式一：类声明</span>
<span class="token keyword">class</span> <span class="token class-name">Container<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Container<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Container<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 定义类的方式二：类表达式</span>
<span class="token keyword">const</span> Container2 <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Container2<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 泛型类中的类型参数允许在类的继承语句和接口实现语句中使用，即extends语句和implements语句</span>
<span class="token keyword">interface</span> <span class="token class-name">Mi<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span><span class="token constant">T</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Mc<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    b<span class="token operator">?</span><span class="token operator">:</span><span class="token constant">T</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Derived<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span><span class="token keyword">extends</span> <span class="token class-name">Mc<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Mi<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> <span class="token keyword">readonly</span> a<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 每个类声明中都会创建两种类型，类的实例类型和构造函数类型。</span>
<span class="token comment">// 泛型类描述的是类的实例类型。因为类的静态成员是类的构造函数类型的一部分，所以泛型类型参数不能用于类的静态成员。</span>
<span class="token comment">// 也就是说，在类的静态成员中不允许引用类型参数</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">CA</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token comment">// static verson:T; // 报错</span>
    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> data<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","047泛型类.html.vue"]]);export{k as default};
