import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="_03-函数兼容性" tabindex="-1"><a class="header-anchor" href="#_03-函数兼容性" aria-hidden="true">#</a> 03 函数兼容性</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 参数个数</span>
<span class="token comment">/*
let fn1 = (x:number, y:number)=&gt;{};
let fn2 = (x:number)=&gt;{};
fn1 = fn2;
fn2 = fn1; // 可少不可多
 */</span>

<span class="token comment">// 参数类型</span>
<span class="token comment">/*
let fn1 = (x:number)=&gt;{};
let fn2 = (x:number)=&gt;{};
let fn3 = (x:string)=&gt;{};
fn1 = fn2;
fn2 = fn1;
fn1 = fn3; // 必须一模一样
fn3 = fn1;
 */</span>

<span class="token comment">// 返回值类型</span>
<span class="token comment">/*
let fn1 = ():number=&gt; 123;
let fn2 = ():number=&gt; 456;
let fn3 = ():string=&gt; &#39;abc&#39;;
fn1 = fn2;
fn2 = fn1;
fn1 = fn3; // 必须一模一样
fn3 = fn1;
 */</span>

<span class="token comment">// 函数双向协变</span>
<span class="token comment">/*
// 参数的双向协变
// let fn1 = (x:(number | string)) =&gt;{};
// let fn2 = (x:number) =&gt;{};
// fn1 = fn2;
// fn2 = fn1;

// 返回值双向协变
let fn1 = (x:boolean):(number | string) =&gt; x ? 123 : &#39;abc&#39;;
let fn2 = (x:boolean):number =&gt; 456;
// fn1 = fn2; // 但是可以将返回值是具体类型的赋值给联合类型的
fn2 = fn1; // 不能将返回值是联合类型的赋值给具体类型的
 */</span>

<span class="token comment">// 函数重载</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sub</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">sub</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// let fn = add;</span>
<span class="token comment">// fn = sub; // 不能将重载少的赋值给重载多的</span>

<span class="token keyword">let</span> fn <span class="token operator">=</span> sub<span class="token punctuation">;</span>
fn <span class="token operator">=</span> add<span class="token punctuation">;</span> <span class="token comment">// 可以将重载多的赋值给重载少</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function c(p,o){return s(),a("div",null,t)}const u=n(i,[["render",c],["__file","03函数兼容性.html.vue"]]);export{u as default};
