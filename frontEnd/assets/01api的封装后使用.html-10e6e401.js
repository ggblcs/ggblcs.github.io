import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const t={},e=p(`<h1 id="_01-api的封装后使用" tabindex="-1"><a class="header-anchor" href="#_01-api的封装后使用" aria-hidden="true">#</a> 01 api的封装后使用</h1><p>下面是vben 封装axios 后使用，发请求，一个发的是json， 一个发的是formData。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">postSuggestPoList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  defHttp<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> Api<span class="token punctuation">.</span><span class="token constant">POST_SUGGEST_PO_LIST</span><span class="token punctuation">,</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*生成PO suggest清单*/</span>
<span class="token comment">// 参数 formData类型参数，list 传入 ids</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">postSuggestPoApply</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;ids&#39;</span><span class="token punctuation">,</span> params<span class="token punctuation">.</span>ids<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> defHttp<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> Api<span class="token punctuation">.</span><span class="token constant">POST_SUGGEST_PO_APPLY</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> formData<span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// @ts-ignore</span>
      <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;multipart/form-data &#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(i,l){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","01api的封装后使用.html.vue"]]);export{u as default};
