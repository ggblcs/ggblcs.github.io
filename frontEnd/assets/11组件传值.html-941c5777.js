import{_ as n,p as s,q as a,a1 as p}from"./framework-96b046e1.js";const e={},t=p(`<h1 id="_11-组件传值" tabindex="-1"><a class="header-anchor" href="#_11-组件传值" aria-hidden="true">#</a> 11 组件传值</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span>

<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> Number
<span class="token punctuation">}</span>
<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token comment">// 原生构造函数, 自定义类，构造函数类型， [String, Number]多种类型</span>
        <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>     
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span> 
        <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token comment">// 对象或数组应从工厂函数返回</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>     
    <span class="token punctuation">}</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 亦可以自定义校验规则</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function r(l,c){return s(),a("div",null,o)}const u=n(e,[["render",r],["__file","11组件传值.html.vue"]]);export{u as default};
