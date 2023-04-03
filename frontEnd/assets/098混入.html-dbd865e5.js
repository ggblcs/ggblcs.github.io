import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_098-混入" tabindex="-1"><a class="header-anchor" href="#_098-混入" aria-hidden="true">#</a> 098 混入</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 1.对象混入</span>
<span class="token comment">/*
let obj1 = {name:&#39;lnj&#39;};
let obj2 = {age:34};
Object.assign(obj1, obj2);
console.log(obj1);
console.log(obj2);
 */</span>

<span class="token comment">// 2.类混入</span>
<span class="token comment">// 需求: 定义两个类, 将两个类的内容混入到一个新的类中</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;wc&#39;</span><span class="token punctuation">;</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;wang wang&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;run run&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 注意点: 一次只能继承一个类</span>
<span class="token comment">// class Animal extends Dog, Cat{</span>
<span class="token comment">//</span>
<span class="token comment">// }</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token keyword">implements</span> <span class="token class-name">Dog</span><span class="token punctuation">,</span> Cat<span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token function-variable function">say</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function-variable function">run</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">myMixin</span><span class="token punctuation">(</span>target<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">,</span> from<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    from<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fromItem<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>fromItem<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            target<span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> fromItem<span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">myMixin</span><span class="token punctuation">(</span>Animal<span class="token punctuation">,</span> <span class="token punctuation">[</span>Dog<span class="token punctuation">,</span> Cat<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// console.log(a.name);</span>
<span class="token comment">// console.log(a.age);</span>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","098混入.html.vue"]]);export{k as default};
