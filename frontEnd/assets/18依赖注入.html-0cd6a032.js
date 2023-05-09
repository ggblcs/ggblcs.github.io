import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_18-依赖注入" tabindex="-1"><a class="header-anchor" href="#_18-依赖注入" aria-hidden="true">#</a> 18 依赖注入</h1><p>民间：跨级通信</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">provide</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span> <span class="token comment">// 使用this将会报错</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// 非响应式（默认）</span>
<span class="token comment">// 响应式方式一：return obj （原理：浅拷贝，当祖先变，孙子由于存地址【引用类型】，孙子也变。）</span>
<span class="token comment">// 响应式方式二：message: () =&gt; this.message // 通过函数返回响应式数据</span>

<span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;obj&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">newMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(官网：可在data中访问到注入属性)</p>`,4),o=[p];function c(i,l){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","18依赖注入.html.vue"]]);export{u as default};
