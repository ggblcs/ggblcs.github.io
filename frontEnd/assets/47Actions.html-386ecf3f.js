import{_ as s,p as n,q as a,a1 as t}from"./framework-96b046e1.js";const e={},c=t(`<h1 id="_47-actions" tabindex="-1"><a class="header-anchor" href="#_47-actions" aria-hidden="true">#</a> 47 Actions</h1><p>相当于method</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">xxx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token comment">// 没有参数，直接通过 this 访问。</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>支持异步，async，await</p><p>不能使用箭头函数，this 指向会不是store仓库，ts 使用 this 数据类型也可以 推导出来，与 getters 不一样</p>`,5),i=[c];function o(p,l){return n(),a("div",null,i)}const d=s(e,[["render",o],["__file","47Actions.html.vue"]]);export{d as default};