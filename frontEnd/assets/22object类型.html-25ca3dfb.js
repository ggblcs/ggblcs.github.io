import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},o=e(`<h1 id="_22-object类型" tabindex="-1"><a class="header-anchor" href="#_22-object类型" aria-hidden="true">#</a> 22 object类型</h1><h2 id="_1-ts的object对象" tabindex="-1"><a class="header-anchor" href="#_1-ts的object对象" aria-hidden="true">#</a> 1 ts的Object对象</h2><p>Object类型是特殊对象<code>Object.prototype</code>的类型，该类型的主要作用是描述JavaScript中几乎所有对象都共享（通过原型继承）的属性和方法。</p><p>Object类型，除了undefined和null，其他任何值都可以赋值给Object类型，原因是，JavaScript会对原始值执行封箱操作，将其转换为对象类型。</p><p>Object类型描述了所有对象共享的属性和方法，而JavaScript允许在原始值上直接访问这些方法。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> obj<span class="token operator">:</span>Object<span class="token punctuation">;</span>
obj <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">}</span> <span class="token comment">// 虽然不会编译错误，但有明显的使用错误，原因是Object类型的用途是描述Object.property对象的类型，即所有对象共享的属性和方法（不太懂）</span>

<span class="token comment">// obj = null // 报错</span>
<span class="token comment">// obj = undefined // 报错</span>
obj <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// ok</span>
obj <span class="token operator">=</span> <span class="token number">123</span> <span class="token comment">// ok</span>
obj <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// ok</span>
obj <span class="token operator">=</span> <span class="token number">1255n</span> <span class="token comment">// ok</span>
obj <span class="token operator">=</span> <span class="token string">&quot;string&quot;</span> <span class="token comment">// ok</span>

obj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-ts的object对象" tabindex="-1"><a class="header-anchor" href="#_2-ts的object对象" aria-hidden="true">#</a> 2 ts的object对象</h2><p>object对象类型不能调用对象的属性方法，除了不能赋值undefined和null，也不能赋值其他类型。</p><p>object类型强调一个类型是非原始类型，即对象类型，object类型的关注点不是该对象有哪些属性，因此不允许读取和修改object类型上的自定义属性。</p><p>所有类型都是顶端类型的子类型，所以object类型能赋值给any类型和unknown类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// object类型</span>
<span class="token comment">// 表示一个对象</span>
<span class="token keyword">let</span> <span class="token literal-property property">obj</span><span class="token operator">:</span>object<span class="token punctuation">;</span> <span class="token comment">// 定义了一个只能保存对象的变量</span>
<span class="token comment">// obj = 1; // 报错</span>
<span class="token comment">// obj = &quot;123&quot;; // 报错</span>
<span class="token comment">// obj = true; // 报错</span>
<span class="token comment">// obj = null // 报错</span>
<span class="token comment">// obj = undefined // 报错</span>
obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;lnj&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">33</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { name: &#39;lnj&#39;, age: 33 }</span>
<span class="token comment">// console.log(obj.name); // 报错</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [object Object]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),p=[o];function c(l,i){return s(),a("div",null,p)}const u=n(t,[["render",c],["__file","22object类型.html.vue"]]);export{u as default};
