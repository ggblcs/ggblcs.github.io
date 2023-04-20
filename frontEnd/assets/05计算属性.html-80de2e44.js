import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_05-计算属性" tabindex="-1"><a class="header-anchor" href="#_05-计算属性" aria-hidden="true">#</a> 05 计算属性</h1><p>计算<strong>属性</strong>，而不是方法，方法名直接当属性，在插值语法中使用。</p><p>三种方法对比</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>1. {{ message.split(&quot;&quot;).reverse().join(&#39;&#39;) }} 插值中使用 js
2. {{ messageComputed }} 计算属性
3. {{ messageFn() }} 使用方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法一：如果在 html 中多处出现，就会计算多次，浪费性能。</p><p>方法二：如果出现多次，只会计算一次。（有缓存）</p><p>方法三：每调用一次方法，就会计算一次，多次调用就会计算多次，浪费性能。</p><p>结论：当所依赖的内容message 发生变化时，三种方法都会取得一样的效果，只不过计算属性的优势在于，有缓存，能减少执行次数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>getter 与 setter （另一种方法）
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;666&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 在设置或更改计算属性时调用</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;xxx&#39;</span> <span class="token operator">+</span> newValue <span class="token comment">// 计算属性默认是没有set方法的，只有get方法。</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[p];function o(c,l){return s(),a("div",null,i)}const u=n(t,[["render",o],["__file","05计算属性.html.vue"]]);export{u as default};
