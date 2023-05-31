import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="_13-映射类型下" tabindex="-1"><a class="header-anchor" href="#_13-映射类型下" aria-hidden="true">#</a> 13 映射类型下</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Pick映射类型</span>
<span class="token comment">// 将原有类型中的部分内容映射到新类型中</span>
<span class="token comment">/*
interface TestInterface {
    name:string,
    age:number
}
type MyType = Pick&lt;TestInterface, &#39;name&#39;&gt;
 */</span>

<span class="token comment">// Record映射类型</span>
<span class="token comment">// 他会将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型</span>
<span class="token keyword">type</span> <span class="token class-name">Animal</span> <span class="token operator">=</span> <span class="token string">&#39;person&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;dog&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;cat&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">TestInterface</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">MyType</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span>Animal<span class="token punctuation">,</span> TestInterface<span class="token operator">&gt;</span>

<span class="token keyword">let</span> res<span class="token operator">:</span>MyType <span class="token operator">=</span> <span class="token punctuation">{</span>
    person<span class="token operator">:</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span><span class="token number">18</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    dog<span class="token operator">:</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span><span class="token string">&#39;wc&#39;</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span><span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    cat<span class="token operator">:</span><span class="token punctuation">{</span>
        name<span class="token operator">:</span><span class="token string">&#39;mm&#39;</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span><span class="token number">2</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>







</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[i];function l(c,o){return s(),a("div",null,p)}const d=n(t,[["render",l],["__file","13映射类型下.html.vue"]]);export{d as default};
