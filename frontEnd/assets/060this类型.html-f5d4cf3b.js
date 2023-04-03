import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="_060-this类型" tabindex="-1"><a class="header-anchor" href="#_060-this类型" aria-hidden="true">#</a> 060 this类型</h1><p>我们可以在类的非静态成员的类型注解中使用this类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> count<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">public</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>

    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token comment">// 我们可以链式调用这些方法，因为她们返回的是当前实例对象</span>

<span class="token comment">// 注意：this类型不允许应用于类的静态成员</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
    <span class="token comment">// static a:this // err &quot;this&quot; 类型仅在类或接口的非静态成员中可用。</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","060this类型.html.vue"]]);export{k as default};
