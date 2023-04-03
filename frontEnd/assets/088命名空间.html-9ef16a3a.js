import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_088-命名空间" tabindex="-1"><a class="header-anchor" href="#_088-命名空间" aria-hidden="true">#</a> 088 命名空间</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
1.什么是命名空间?
命名空间可以看做是一个微型模块,
当我们先把相关的业务代码写在一起, 又不想污染全局空间的时候, 我们就可以使用命名空间
本质就是定义一个大对象, 把变量/方法/类/接口...的都放里面

2.命名空间和模块区别
在程序内部使用的代码, 可以使用命名空间封装和防止全局污染
在程序内部外部使用的代码, 可以使用模块封装和防止全局污染
总结: 由于模块也能实现相同的功能, 所以大部分情况下用模块即可
* */</span>
<span class="token comment">// namespace Validation {</span>
<span class="token comment">//     const lettersRegexp = /^[A-Za-z]+$/;</span>
<span class="token comment">//     export const LettersValidator  = (value) =&gt;{</span>
<span class="token comment">//         return lettersRegexp.test(value);</span>
<span class="token comment">//     }</span>
<span class="token comment">// }</span>

<span class="token comment">/// &lt;reference path=&quot;./56/test.ts&quot; /&gt;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Validation<span class="token punctuation">.</span><span class="token function">LettersValidator</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Validation<span class="token punctuation">.</span><span class="token function">LettersValidator</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">var</span> Validation<span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>Validation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> lettersRegexp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[A-Za-z]+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
    Validation<span class="token punctuation">.</span><span class="token function-variable function">LettersValidator</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> lettersRegexp<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Validation <span class="token operator">||</span> <span class="token punctuation">(</span>Validation <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
1.什么是命名空间?
命名空间可以看做是一个微型模块,
当我们先把相关的业务代码写在一起, 又不想污染全局空间的时候, 我们就可以使用命名空间
本质就是定义一个大对象, 把变量/方法/类/接口...的都放里面

2.命名空间和模块区别
在程序内部使用的代码, 可以使用命名空间封装和防止全局污染
在程序内部外部使用的代码, 可以使用模块封装和防止全局污染
总结: 由于模块也能实现相同的功能, 所以大部分情况下用模块即可
* */</span>
<span class="token comment">// namespace Validation {</span>
<span class="token comment">//     const lettersRegexp = /^[A-Za-z]+$/;</span>
<span class="token comment">//     export const LettersValidator  = (value) =&gt;{</span>
<span class="token comment">//         return lettersRegexp.test(value);</span>
<span class="token comment">//     }</span>
<span class="token comment">// }</span>
<span class="token comment">/// &lt;reference path=&quot;./56/test.ts&quot; /&gt;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Validation<span class="token punctuation">.</span><span class="token function">LettersValidator</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Validation<span class="token punctuation">.</span><span class="token function">LettersValidator</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">namespace</span> Validation <span class="token punctuation">{</span>
    <span class="token keyword">const</span> lettersRegexp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[A-Za-z]+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
    <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">LettersValidator</span>  <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> lettersRegexp<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[p];function c(l,o){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","088命名空间.html.vue"]]);export{d as default};
