import{_ as n,p as e,q as s,a1 as l}from"./framework-96b046e1.js";const a={},i=l(`<h1 id="_03-null和undefined" tabindex="-1"><a class="header-anchor" href="#_03-null和undefined" aria-hidden="true">#</a> 03 null和undefined</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
1.null和undefined
TypeScript具有两种特殊的类型， null和 undefined，它们分别具有值null和undefined.
* */</span>
<span class="token comment">// 默认情况下我们可以将 null和 undefined赋值给任意类型</span>
<span class="token comment">// 默认情况下null和 undefined也可以相互赋值</span>
<span class="token comment">// 注意点: 在企业开发中, 如果不想把 null和 undefined赋值给其它的类型</span>
<span class="token comment">//         或者不想让 null和 undefined相互赋值, 那么我们就可以开启strictNullChecks</span>
<span class="token comment">/*
let value1:null;
let value2:undefined;
value1 = value2;
value2 = value1;

let value3:number;
value3 = value1;
value3 = value2;
 */</span>

<span class="token comment">// 如果我们开启了strictNullChecks, 还想把null和 undefined赋值给其它的类型</span>
<span class="token comment">// 那么我们就必须在声明的时候使用联合类型</span>
<span class="token comment">/*
let value:(number | null | undefined);
value = null;
value = undefined;
 */</span>

<span class="token comment">// 对于可选属性和可选参数而言, 如果开启了strictNullChecks, 那么默认情况下数据类型就是联合类型</span>
<span class="token comment">// 就是当前的类型 + undefined类型</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">say</span><span class="token punctuation">(</span>age<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>








</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[i];function c(u,v){return e(),s("div",null,d)}const r=n(a,[["render",c],["__file","03null和undefined.html.vue"]]);export{r as default};
