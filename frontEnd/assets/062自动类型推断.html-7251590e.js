import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="_062-自动类型推断" tabindex="-1"><a class="header-anchor" href="#_062-自动类型推断" aria-hidden="true">#</a> 062 自动类型推断</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 1.什么是自动类型推断?</span>
<span class="token comment">// 不用明确告诉编译器具体是什么类型, 编译器就知道是什么类型</span>

<span class="token comment">// 1.根据初始化值自动推断</span>
<span class="token comment">/*
// 如果是先定义在初始化, 那么是无法自动推断的
// let value;
// value = 123;
// value = false;
// value = &#39;abc&#39;;

// 如果是定义的同时初始化, 那么TS就会自动进行类型推荐
// let value = 123; // let value:number = 123;
// value = 456;
// value = false;
// value = &#39;abc&#39;;

let arr = [1, &#39;a&#39;]; // let arr:(number | string) = [1, &#39;a&#39;];
arr = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, 1, 3, 5, false]
 */</span>

<span class="token comment">// 2.根据上下文类型自动推断</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onmousedown</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function t(d,u){return s(),a("div",null,c)}const o=n(i,[["render",t],["__file","062自动类型推断.html.vue"]]);export{o as default};
