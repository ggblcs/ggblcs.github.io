import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},l=e(`<h1 id="_079-映射类型上" tabindex="-1"><a class="header-anchor" href="#_079-映射类型上" aria-hidden="true">#</a> 079 映射类型上</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
1.什么是映射类型?
根据旧的类型创建出新的类型, 我们称之为映射类型
* */</span>
<span class="token comment">/*
interface TestInterface1{
    name:string,
    age:number
}
interface TestInterface2 {
    readonly name:string,
    readonly age:number
}
*/</span>
<span class="token keyword">interface</span> <span class="token class-name">TestInterface1</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">TestInterface2</span><span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> name<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token keyword">readonly</span> age<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">ReadonlyTestInterface<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// [P in keyof T]作用: 遍历出指定类型所有的key, 添加到当前对象上</span>
    <span class="token comment">// readonly [P in keyof T]: T[P]</span>
    <span class="token comment">// readonly [P in keyof T]?: T[P]</span>
    <span class="token operator">-</span><span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">MyType</span> <span class="token operator">=</span> ReadonlyTestInterface<span class="token operator">&lt;</span>TestInterface2<span class="token operator">&gt;</span>


<span class="token comment">// 我们可以通过+/-来指定添加还是删除 只读和可选修饰符</span>


<span class="token comment">// 由于生成只读属性和可选属性比较常用, 所以TS内部已经给我们提供了现成的实现</span>
<span class="token comment">// Readonly / Partial</span>

<span class="token keyword">type</span> <span class="token class-name">MyType2</span> <span class="token operator">=</span> Readonly<span class="token operator">&lt;</span>TestInterface1<span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">MyType3</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>TestInterface1<span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">MyType4</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>Readonly<span class="token operator">&lt;</span>TestInterface1<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[l];function o(c,i){return s(),a("div",null,p)}const d=n(t,[["render",o],["__file","079映射类型上.html.vue"]]);export{d as default};
