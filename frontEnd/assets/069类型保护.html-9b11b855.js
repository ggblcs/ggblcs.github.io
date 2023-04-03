import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="_069-类型保护" tabindex="-1"><a class="header-anchor" href="#_069-类型保护" aria-hidden="true">#</a> 069 类型保护</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
3.类型保护
对于联合类型的变量，在使用时如何确切告诉编译器它是哪一种类型
通过类型断言或者类型保护
* */</span>
<span class="token keyword">let</span> getRandomValue <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;=</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&#39;abc&#39;</span> <span class="token operator">:</span> <span class="token number">123.123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// let value = getRandomValue();</span>
<span class="token comment">// console.log(value);</span>
<span class="token comment">/*
// 虽然通过类型断言可以确切的告诉编译器当前的变量是什么类型,
// 但是每一次使用的时候都需要手动的告诉编译器, 这样比较麻烦, 冗余代码也比较多
if((value as string).length){
    console.log((value as string).length);
}else{
    console.log((value as number).toFixed());
}
 */</span>
<span class="token comment">/*
// 定义了一个类型保护函数, 这个函数的&#39;返回类型&#39;是一个布尔类型
// 这个函数的返回值类型是, 传入的参数 + is 具体类型
function isString(value:(string | number)): value is string {
    return typeof value === &#39;string&#39;;
}
if(isString(value)){
    console.log(value.length);
}else{
    console.log(value.toFixed());
}
 */</span>
<span class="token comment">/*
// 除了可以通过定义类型保护函数的方式来告诉编译器使用时联合类型的变量具体是什么类型以外
// 我们还可以使用typeof来实现类型保护
// 注意点:
// 如果使用typeof来实现类型保护, 那么只能使用 === / !==
// 如果使用typeof来实现类型保护, 那么只能保护 number/string/boolean/symbol类型
if(typeof value === &#39;string&#39;){
    console.log(value.length);
}else{
    console.log(value.toFixed());
}
 */</span>
<span class="token comment">// 除了可以通过typeof类实现类型保护以外, 我们还可以通过instanceof来实现类型保护</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;lnj&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> getRandomObject <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">(</span>Person <span class="token operator">|</span> Animal<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;=</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">getRandomObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[p];function o(i,c){return s(),a("div",null,l)}const r=n(t,[["render",o],["__file","069类型保护.html.vue"]]);export{r as default};
