import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_09-可辨识联合" tabindex="-1"><a class="header-anchor" href="#_09-可辨识联合" aria-hidden="true">#</a> 09 可辨识联合</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
1.什么是可辨识联合
具有共同的可辨识特征。
一个类型别名, 包含了具有共同的可辨识特征的类型的联合。
* */</span>
<span class="token keyword">interface</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span>
    kind<span class="token operator">:</span> <span class="token string">&quot;square&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 共同的可辨识特征</span>
    size<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
    kind<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 共同的可辨识特征</span>
    width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
    kind<span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 共同的可辨识特征</span>
    radius<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
Shape就是一个可辨识联合
因为: 它的取值是一个联合
因为: 这个联合的每一个取值都有一个共同的可辨识特征
* */</span>
<span class="token keyword">type</span> <span class="token class-name">Shape</span> <span class="token operator">=</span> <span class="token punctuation">(</span>Square <span class="token operator">|</span> Rectangle <span class="token operator">|</span> Circle<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">aera</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&quot;square&quot;</span><span class="token operator">:</span> <span class="token keyword">return</span> s<span class="token punctuation">.</span>size <span class="token operator">*</span> s<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&quot;rectangle&quot;</span><span class="token operator">:</span> <span class="token keyword">return</span> s<span class="token punctuation">.</span>width <span class="token operator">*</span> s<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&quot;circle&quot;</span><span class="token operator">:</span> <span class="token keyword">return</span>  Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> s<span class="token punctuation">.</span>radius <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// **是ES7中推出的幂运算符</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","09可辨识联合.html.vue"]]);export{r as default};
