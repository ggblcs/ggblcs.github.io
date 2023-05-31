import{_ as n,p as s,q as e,a1 as a}from"./framework-96b046e1.js";const i={},l=a(`<h1 id="_11-索引访问操作符" tabindex="-1"><a class="header-anchor" href="#_11-索引访问操作符" aria-hidden="true">#</a> 11 索引访问操作符</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 通过[]索引类型访问操作符, 我们就能得到某个索引的类型</span>
<span class="token comment">// class Person {</span>
<span class="token comment">//     name:string;</span>
<span class="token comment">//     age:number;</span>
<span class="token comment">// }</span>
<span class="token comment">// type MyType = Person[&#39;name&#39;];</span>

<span class="token comment">// 应用场景</span>
<span class="token comment">// 需求: 获取指定对象, 部分属性的值, 放到数组中返回</span>
<span class="token comment">/*
let obj = {
    name:&#39;lnj&#39;,
    age:18,
    gender:true
}
function getValues&lt;T, K extends keyof T&gt;(obj:T, keys:K[]):T[K][] {
    let arr = [] as T[K][];
    keys.forEach(key=&gt;{
        arr.push(obj[key]);
    })
    return arr;
}
let res = getValues(obj, [&#39;name&#39;, &#39;age&#39;]);
console.log(res);
*/</span>

<span class="token comment">// 索引访问操作符注意点</span>
<span class="token comment">// 不会返回null/undefined/never类型</span>
<span class="token keyword">interface</span> <span class="token class-name">TestInterface</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>
    b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>
    c<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">,</span>
    d<span class="token operator">:</span><span class="token builtin">symbol</span><span class="token punctuation">,</span>
    e<span class="token operator">:</span><span class="token keyword">null</span><span class="token punctuation">,</span>
    f<span class="token operator">:</span><span class="token keyword">undefined</span><span class="token punctuation">,</span>
    g<span class="token operator">:</span><span class="token builtin">never</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">MyType</span> <span class="token operator">=</span> TestInterface<span class="token punctuation">[</span><span class="token keyword">keyof</span> TestInterface<span class="token punctuation">]</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function c(o,p){return s(),e("div",null,t)}const r=n(i,[["render",c],["__file","11索引访问操作符.html.vue"]]);export{r as default};
