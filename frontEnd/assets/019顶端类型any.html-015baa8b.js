import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const p={},t=e(`<h1 id="_019-顶端类型any" tabindex="-1"><a class="header-anchor" href="#_019-顶端类型any" aria-hidden="true">#</a> 019 顶端类型any</h1><p>顶端类型（Top Type）源自于数学中的类型论，同时它也被广泛应用于计算机编程语言中。顶端类型是一种通用类型，有时也称为通用超类型，因为在类型系统中，所有类型都是顶端类型的子类型，或者说顶端类型是所有其他类型的父类型。顶端类型涵盖了类型系统中所有可能的值。 TypeScript中有以下两种顶端类型：</p><p>▪ any类型</p><p>▪ unknown类型</p><p>在TypeScript中，所有类型都是any类型的子类型。我们可以将任何类型的值赋值给any类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

x <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> <span class="token string">&#39;hi&#39;</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> <span class="token number">99999n</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function-variable function">x</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，虽然any类型是所有类型的父类型，但是TypeScript允许将any类型赋值给任何其他类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">boolean</span>   <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token builtin">string</span>    <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token keyword">let</span> c<span class="token operator">:</span> <span class="token builtin">number</span>    <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token keyword">let</span> d<span class="token operator">:</span> bigint    <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token keyword">let</span> e<span class="token operator">:</span> <span class="token builtin">symbol</span>    <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token keyword">let</span> f<span class="token operator">:</span> <span class="token keyword">void</span>      <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token keyword">let</span> g<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token keyword">let</span> h<span class="token operator">:</span> <span class="token keyword">null</span>      <span class="token operator">=</span> x<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在any类型上允许执行任意的操作而不会产生编译错误。例如，我们可以读取any类型的属性或者将any类型当作函数调用，就算any类型的实际值不支持这些操作也不会产生编译错误。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// TypeScript中的类型注解是可选的。若一个值没有明确的类型注解，编译器又无法自动推断出它的类型，那么这个值的默认类型为any类型。示例如下：</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token comment">// 参数a b具有隐性的any类型.等价于a:any,b:any</span>

<span class="token comment">// 这样没写类型是会出不可预知的问题,所以可以在tsconfig.json中配置</span>
<span class="token comment">// 配置nolmplicitAny:true,控制该行为.</span>
<span class="token comment">// 启用了该编译选项后,如果发生了隐式的any类型转换,就会产生编译错误.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","019顶端类型any.html.vue"]]);export{u as default};
