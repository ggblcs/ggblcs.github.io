import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_039-函数中this值的类型" tabindex="-1"><a class="header-anchor" href="#_039-函数中this值的类型" aria-hidden="true">#</a> 039 函数中this值的类型</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 默认情况下，编译器会将函数中的this值设置为any类型，并允许程序在this值上执行任意的操作。</span>
<span class="token comment">// 因为编译器不会对any类型进行类型检查。</span>
<span class="token comment">// 启用编译选项nolmplicit-This编译选项，如果this默认值获得了any类型，将产生编译错误</span>

<span class="token doc-comment comment">/**
 *--nolmplicitThis=true
 */</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// this.a = true; // 编译错误</span>
    <span class="token comment">// this.b++; // 编译错误</span>
    <span class="token comment">// this.c = () =&gt; {} // 编译错误</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span><span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;xxx&#39;</span>
    <span class="token comment">// this.name = 0 // 编译错误，0是数字类型</span>
<span class="token punctuation">}</span>

<span class="token comment">// this参数必须存在于参数列表的第一个</span>
<span class="token comment">// 如果想定义一个纯函数，或者不想让函数依赖this值，可以将this定义为void类型</span>
<span class="token keyword">function</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">,</span> x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">{</span>
    <span class="token comment">// this.name = &#39;999&#39; // 编译错误，this为void类型，不允许读写和操作this属性</span>
    <span class="token keyword">return</span> <span class="token number">6</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// f3.call(obj, 1, 2) // 编译错误，this为void类型，而不是对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[i];function c(o,l){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","039函数中this值的类型.html.vue"]]);export{d as default};
