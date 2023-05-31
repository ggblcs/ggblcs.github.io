import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="_04-defineproperty" tabindex="-1"><a class="header-anchor" href="#_04-defineproperty" aria-hidden="true">#</a> 04 defineProperty</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
Object.defineProperty()
可以直接在一个对象上定义一个新属性，
或者修改一个对象的现有属性，并返回此对象。
* */</span>
<span class="token comment">// 定义一个新的属性</span>
<span class="token comment">/*
let obj = {age:18};
Object.defineProperty(obj, &#39;name&#39;, {
    value:&#39;lnj&#39;
});
console.log(obj);
 */</span>

<span class="token comment">// 修改原有属性</span>
<span class="token comment">/*
let obj = {age:18};
Object.defineProperty(obj, &#39;age&#39;, {
    value:34
});
console.log(obj);
 */</span>

<span class="token comment">// 修改属性配置-读写</span>
<span class="token comment">/*
let obj = {age:18};
Object.defineProperty(obj, &#39;age&#39;, {
    writable:false
})
obj.age = 34;
console.log(obj.age);
 */</span>


<span class="token comment">// 修改属性配置-迭代</span>
<span class="token comment">/*
let obj = {age:18, name:&#39;lnj&#39;};
Object.defineProperty(obj, &#39;name&#39;, {
    enumerable: false
})
for(let key in obj){
    console.log(key);
}
 */</span>

<span class="token comment">// 修改属性配置-配置</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span> name<span class="token operator">:</span><span class="token string">&#39;lnj&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    enumerable<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    configurable<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    enumerable<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    configurable<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function c(o,p){return s(),a("div",null,t)}const u=n(i,[["render",c],["__file","04defineProperty.html.vue"]]);export{u as default};
