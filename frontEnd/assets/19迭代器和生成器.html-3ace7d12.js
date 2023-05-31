import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_19-迭代器和生成器" tabindex="-1"><a class="header-anchor" href="#_19-迭代器和生成器" aria-hidden="true">#</a> 19 迭代器和生成器</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
和ES6迭代器一样
for...of
从零玩转JavaScript核心+新特性③
140-JavaScript-数组高级API上(掌握)
从零玩转JS新特性+流行框架⑥
34-Iterator接口(掌握)
35-Iterator接口应用场景(掌握)
* */</span>
<span class="token keyword">let</span> someArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> entry <span class="token keyword">of</span> someArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1, &quot;string&quot;, false</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
生成器
当生成目标为ES5或ES3，迭代器只允许在Array类型上使用。
在非数组值上使用 for..of语句会得到一个错误，
就算这些非数组值已经实现了Symbol.iterator属性。
为了解决这个问题, 编译器会生成一个简单的for循环做为for..of循环
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[i];function o(c,p){return s(),a("div",null,l)}const d=n(t,[["render",o],["__file","19迭代器和生成器.html.vue"]]);export{d as default};
