import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},o=t(`<h1 id="_05-函数式组件" tabindex="-1"><a class="header-anchor" href="#_05-函数式组件" aria-hidden="true">#</a> 05 函数式组件</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span>  <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> flag <span class="token operator">=</span> flase<span class="token punctuation">;</span>
    <span class="token keyword">let</span> login <span class="token operator">=</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>登录<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token keyword">let</span> logout <span class="token operator">=</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>登出<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token keyword">return</span> flag <span class="token operator">?</span> login <span class="token operator">:</span> logout
<span class="token punctuation">}</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[o];function c(l,r){return s(),a("div",null,p)}const u=n(e,[["render",c],["__file","05函数式组件.html.vue"]]);export{u as default};
