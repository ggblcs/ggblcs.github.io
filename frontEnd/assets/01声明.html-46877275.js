import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_01-声明" tabindex="-1"><a class="header-anchor" href="#_01-声明" aria-hidden="true">#</a> 01 声明</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
1.什么是声明?
- 在企业开发中我们不可避免的需要引用第三方的 JS 的库,
  但是默认情况下TS是不认识我们引入的这些JS库的
  所以在使用这些JS库的时候, 我们就要告诉TS它是什么, 它怎么用
- 如何告诉TS呢?
  那就是通过声明来告诉
* */</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">$</span><span class="token operator">:</span><span class="token punctuation">(</span>selector<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token function">ajax</span><span class="token punctuation">(</span>url<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.main&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.main&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","01声明.html.vue"]]);export{k as default};
