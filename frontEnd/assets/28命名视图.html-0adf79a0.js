import{_ as a,p as n,q as s,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="_28-命名视图" tabindex="-1"><a class="header-anchor" href="#_28-命名视图" aria-hidden="true">#</a> 28 命名视图</h1><p>同时有多个<code>&lt;router-view&gt;</code>头部，侧边栏、主要内容都是组件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;shop&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 注意加S</span>
  <span class="token keyword">default</span> <span class="token operator">:</span> SopMain<span class="token punctuation">,</span>
  <span class="token literal-property property">shopTop</span> <span class="token operator">:</span> ShopTop<span class="token punctuation">,</span>
  <span class="token literal-property property">shopFooter</span> <span class="token operator">:</span>ShopFoter
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ShopTop<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/&gt;</span></span> 默认的
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ShopFooter<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(l,r){return n(),s("div",null,o)}const u=a(e,[["render",c],["__file","28命名视图.html.vue"]]);export{u as default};
